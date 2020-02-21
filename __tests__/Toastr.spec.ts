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
});
