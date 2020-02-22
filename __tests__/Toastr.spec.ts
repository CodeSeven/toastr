import $ from 'jquery';

import Toastr from '../src/Toastr';

// this is necessary to test the optional parameters
type Notifiers = 'info' | 'warning' | 'success' | 'error';

// eslint-disable-next-line typescript/no-var-requires
const defaults = require('./defaults.json');

const sampleMsg = 'I don\'t think they really exist';
const sampleTitle = 'TEST';

describe('Toastr', () => {
  let toastr: Toastr;

  beforeEach(() => {
    toastr = new Toastr();

    document.body.innerHTML = '';
  });

  it('should not fail', () => {
    expect(toastr).toBeInstanceOf(Toastr);
  });

  it('should create a container when creating an instance', () => {
    // eslint-disable-next-line no-new
    new Toastr();

    expect(document.getElementById('toast-container')).toBeDefined();
  });

  it('should allow two toastClasses | issue #3', () => {
    expect.assertions(3);

    const toastrString = new Toastr({ toastClass: 'one' });
    const toastrArray = new Toastr({ toastClass: ['one', 'two'] });
    const toastrArrayString = new Toastr({ toastClass: 'one two' });

    const successString = toastrString.success();
    const successArray = toastrArray.success();
    const successArrayString = toastrArrayString.success();

    if (!successString || !successArray || !successArrayString) {
      return;
    }

    expect(successString.className).toBe('one toast-success');
    expect(successArray.className).toBe('one two toast-success');
    expect(successArrayString.className).toBe('one two toast-success');
  });

  ([
    'info',
    'warning',
    'error',
    'success',
  ] as Notifiers[]).forEach((item) => {
    describe(item, () => {
      it('pass title and message', () => {
        const toast: any = toastr[item](sampleMsg, sampleTitle);

        expect($(toast).find('div.toast-title').html()).toBe(sampleTitle);
        expect($(toast).find('div.toast-message').html()).toBe(sampleMsg);
        expect($(toast).hasClass(defaults.iconClasses[item]));
      });

      it('pass message, but no title', () => {
        const toast: any = toastr[item](sampleMsg);

        expect($(toast).find('div.toast-title')).toHaveLength(0);
        expect($(toast).find('div.toast-message').html()).toBe(sampleMsg);
        expect($(toast).hasClass(defaults.iconClasses[item]));
      });

      it('pass no message nor title', () => {
        const toast: any = toastr[item]();

        expect($(toast).find('div.toast-title')).toHaveLength(0);
        expect($(toast).find('div.toast-message').html()).toBeFalsy();
        expect($(toast).hasClass(defaults.iconClasses[item]));
      });
    });
  });

  describe('escape html', () => {
    beforeEach(() => {
      document.body.innerHTML = '';
    });

    ([
      'info',
      'warning',
      'error',
      'success',
    ] as Notifiers[]).forEach((item) => {
      it(`escape html - ${item}`, () => {
        toastr.options.escapeHtml = true;

        const toast: any = toastr[item]('html <strong>message</strong>', 'html <u>title</u>');

        expect($(toast).find('div.toast-title').html()).toBe('html &lt;u&gt;title&lt;/u&gt;');
        expect($(toast).find('div.toast-message').html()).toBe('html &lt;strong&gt;message&lt;/strong&gt;');
      });
    });
  });

  describe('closeButton', () => {
    it('close button disabled', () => {
      toastr.options.closeButton = false;

      const toast: any = toastr.success('');

      expect($(toast).find('button.toast-close-button')).toHaveLength(0);
    });

    it('close button enabled', () => {
      toastr.options.closeButton = true;

      const toast: any = toastr.success('');

      expect($(toast).find('button.toast-close-button')).toHaveLength(1);
    });

    it('close button has type=button', () => {
      toastr.options.closeButton = true;

      const toast: any = toastr.success('');

      expect($(toast).find('button[type="button"].toast-close-button')).toHaveLength(1);
    });

    // todo: should work after transitions has been added
    it.skip('close button duration', async () => {
      toastr.options.closeButton = true;
      toastr.options.closeDuration = 0;
      toastr.options.hideDuration = 2000;

      const toast: any = toastr.success('');

      $(toast).find('button.toast-close-button').click();

      expect(toastr.$container.children).toHaveLength(1);

      await new Promise(res => setTimeout(res, 500));

      expect(toastr.$container.children).toHaveLength(0);
    });
  });

  describe('progressbar', () => {
    it('progress bar disabled', () => {
      toastr.options.progressBar = false;

      const toast: any = toastr.success('');

      expect($(toast).find('div.toast-progress').length).toBe(0);
    });

    it('progress bar enabled', () => {
      toastr.options.progressBar = true;

      const toast: any = toastr.success('');

      expect($(toast).find('div.toast-progress').length).toBe(1);
    });
  });

  describe('rtl', () => {
    beforeEach(() => {
      toastr.options.rtl = true;
    });

    it('toastr is ltr by default', (done) => {
      const thisToastr = new Toastr();

      expect.assertions(1);

      thisToastr.subscribe((response) => {
        expect(response.options.rtl).toBe(false);

        done();
      });

      thisToastr.success('');
    });

    it('ltr toastr does not have .rtl class', () => {
      const thisToastr = new Toastr();
      const toastrSuccess: any = thisToastr.success('');

      expect($(toastrSuccess).hasClass('rtl')).toBe(false);
    });

    it('rtl toastr has .rtl class', () => {
      const toastrSuccess: any = toastr.success('');

      expect($(toastrSuccess).hasClass('rtl')).toBe(true);
    });
  });

  describe('accessibility', () => {
    it('toastr success has aria polite', () => {
      const toastrSuccess: any = toastr.success('');

      expect($(toastrSuccess).attr('aria-live')).toBe('polite');
    });

    it('toastr info has aria polite', () => {
      const toastrSuccess: any = toastr.info('');

      expect($(toastrSuccess).attr('aria-live')).toBe('polite');
    });

    it('toastr error has aria assertive', () => {
      const toastrSuccess: any = toastr.error('');

      expect($(toastrSuccess).attr('aria-live')).toBe('assertive');
    });

    it('toastr warning has aria assertive', () => {
      const toastrSuccess: any = toastr.warning('');

      expect($(toastrSuccess).attr('aria-live')).toBe('assertive');
    });
  });

  describe('event', () => {
    beforeEach(() => {
      toastr.options.closeButton = false;
      toastr.options.hideDuration = 0;
      toastr.options.timeOut = 1;
    });

    it('onShown is Executed', () => {
      toastr.options.onShown = jest.fn();
      toastr.success('');

      expect(toastr.options.onShown).toHaveBeenCalledTimes(1);
    });

    it('onHidden is Executed', async () => {
      toastr.options.onHidden = jest.fn();
      toastr.success('');

      await new Promise(res => setTimeout(res, 1));

      expect(toastr.options.onHidden).toHaveBeenCalledTimes(1);
    });

    it('onShown and onHidden are both executed', async () => {
      toastr.options.onShown = jest.fn();
      toastr.options.onHidden = jest.fn();
      toastr.success('');

      expect(toastr.options.onShown).toHaveBeenCalledTimes(1);
      await new Promise(res => setTimeout(res, 1));
      expect(toastr.options.onHidden).toHaveBeenCalledTimes(1);
    });

    it('onCloseClick is executed', () => {
      toastr.options.closeButton = true;
      toastr.options.closeDuration = 0;
      toastr.options.hideDuration = 2000;
      toastr.options.onCloseClick = jest.fn();

      const $toastrSuccess = $(toastr.success(defaults.sampleMsg, defaults.sampleTitle) as any);

      $toastrSuccess.find('button.toast-close-button').click();

      expect(toastr.options.onCloseClick).toHaveBeenCalledTimes(1);
    });

    it('message appears when no show or hide method functions provided', () => {
      const $toastrSuccess = $(toastr.success(defaults.sampleMsg, defaults.sampleTitle) as any);

      expect($toastrSuccess.hasClass(defaults.iconClasses.success)).toBe(true);
    });

    it('prevent duplicate sequential toasts', () => {
      toastr.options.preventDuplicates = true;

      toastr.info(sampleMsg, sampleTitle);
      toastr.info(sampleMsg, sampleTitle);
      toastr.info(`${sampleMsg} 1`, sampleTitle);
      toastr.info(sampleMsg, sampleTitle);

      const $container = $(toastr.getContainer());

      expect($container.children()).toHaveLength(3);
    });

    it('prevent dupliacate sequential toasts, but allow previous after clear', () => {
      toastr.options.preventDuplicates = true;

      toastr.info(sampleMsg, sampleTitle);
      toastr.info(sampleMsg, sampleTitle);
      toastr.clear();
      toastr.info(sampleMsg, sampleTitle);

      const $container = $(toastr.getContainer());

      expect($container.children()).toHaveLength(1);
    });

    it('allow duplicate sequential toasts', () => {
      toastr.options.preventDuplicates = false;

      toastr.info(sampleMsg, sampleTitle);
      toastr.info(sampleMsg, sampleTitle);
      toastr.info(sampleMsg, sampleTitle);

      const $container = $(toastr.getContainer());

      expect($container.children()).toHaveLength(3);
    });

    it('allow preventDuplicates option to be overridden', () => {
      toastr.info(sampleMsg, sampleTitle, { preventDuplicates: true });
      toastr.info(sampleMsg, sampleTitle, { preventDuplicates: true });
      toastr.info(sampleMsg, sampleTitle);

      const $container = $(toastr.getContainer());

      expect($container.children()).toHaveLength(2);
    });
  });
});
