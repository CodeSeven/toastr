import $ from 'jquery';

import Toastr from '../src/Toastr';

// eslint-disable-next-line typescript/no-var-requires
const defaults = require('./defaults.json');

const sampleMsg = 'I don\'t think they really exist';
const sampleTitle = 'TEST';

describe('clear', () => {
  let toastr: Toastr;

  beforeEach(() => {
    document.body.innerHTML = '';

    toastr = new Toastr();
  });

  // this is necessary to test the optional parameters
  type Notifiers = 'info' | 'warning' | 'success' | 'error';

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
});
