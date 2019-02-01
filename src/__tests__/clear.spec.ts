import $ from 'jquery';

import defaults from './defaults.json';
import Toastr from '../Toastr';

const sampleMsg = 'I don\'t think they really exist';
const sampleTitle = 'TEST';

describe('clear', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('show 3 toasts, clear the 2nd', () => {
    const toastr = new Toastr(defaults.toastrOptions);

    const toast1 = toastr.info(sampleMsg, `${sampleTitle}-1`);

    toastr.info(sampleMsg, `${sampleTitle}-2`);
    toastr.info(sampleMsg, `${sampleTitle}-3`);

    const container = toastr.$container;

    expect(container.children).toHaveLength(3);

    toastr.clear(toast1);

    expect(container.children).toHaveLength(2);
  });

  it('show 3 errors, clear all 3, 0 left', () => {
    const toastr = new Toastr(defaults.toastrOptions);

    toastr.info(sampleMsg, `${sampleTitle}-1`);
    toastr.info(sampleMsg, `${sampleTitle}-2`);
    toastr.info(sampleMsg, `${sampleTitle}-3`);

    const container = toastr.$container;

    expect(container.children).toHaveLength(3);

    toastr.clear();

    expect(container.children).toHaveLength(0);
  });

  it('after clear with force option toast with focus disappears', () => {
    const toastr = new Toastr(defaults.toastrOptions);
    const msg = `${sampleMsg}<br/><br/><button type="button">Clear</button>`;

    const toast: any = toastr.info(msg, `${sampleTitle}-1`);

    $(toast).find('button').focus();

    toastr.clear(toast, { force: true });

    expect(toastr.$container).toBeDefined();
    expect(toastr.$container.children).toHaveLength(0);
  });

  describe('show 2 toasts and clear', () => {
    const testText = `${sampleTitle}-3-Visible`;

    let toastr: Toastr;
    let toast1: any;
    let toast2: any;

    beforeEach(() => {
      toastr = new Toastr(defaults.toastrOptions);

      toast1 = toastr.info(sampleMsg, `${sampleTitle}-1`);
      toast2 = toastr.info(sampleMsg, `${sampleTitle}-2`);
      toastr.clear();
    });

    it('show 2 toasts, clear both, then show 1 more', () => {
      const toast: any = toastr.info(sampleMsg, testText);
      const toastHtml = $(toast).find('div.toast-title').html();

      expect(toastHtml).toBe(testText);
    });

    it('clear removes toast container', () => {
      const container = $(defaults.selectors.container);

      expect(container).toHaveLength(0);
      expect($(toast1).is(':visible')).toBe(false);
      expect($(toast2).is(':visible')).toBe(false);
    });

    it('after clear new toast creates container', () => {
      toastr.info(sampleMsg, testText);

      const containerHtml = $(defaults.selectors.container).find('div.toast-title').html();

      expect(containerHtml).toBe(testText);
    });

    it('after clear all toasts new toast still appears', () => {
      toastr.info(sampleMsg, `${sampleTitle}-3-Visible`);

      expect($(document.body).find('div.toast-title')).toHaveLength(1);
    });
  });

  it('clear toast after hover', async () => {
    const toastr = new Toastr(defaults.toastrOptions);
    const toast: any = toastr.info(sampleMsg, sampleTitle);

    expect($(toastr.$container).find('div.toast-title')).toHaveLength(1);

    toast.dispatchEvent(new Event('mouseout'));
    await new Promise(res => setTimeout(res, 10));

    expect($(toastr.$container).find('div.toast-title')).toHaveLength(0);
  });

  it('do not clear toast after hover', async () => {
    const toastr = new Toastr(defaults.toastrOptions);

    const toast: any = toastr.info(sampleMsg, 'test', { closeOnHover: false });

    expect($(toastr.$container).find('div.toast-title')).toHaveLength(1);

    toast.dispatchEvent(new Event('mouseout'));
    await new Promise(res => setTimeout(res, 10));

    expect($(toastr.$container).find('div.toast-title')).toHaveLength(1);
  });
});
