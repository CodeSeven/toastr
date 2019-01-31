import Toastr from '../Toastr';

const sampleMsg = 'I don\'t think they really exist';
const sampleTitle = 'TEST';

describe('Toastr', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('should not fail', () => {
    const toastr = new Toastr();

    expect(toastr).toBeInstanceOf(Toastr);
  });

  it('should create a container when creating an instance', () => {
    // eslint-disable-next-line no-new
    new Toastr();

    expect(document.getElementById('toast-container')).toBeDefined();
  });

  describe('clear', () => {
    it('show 3 toasts, clear the 2nd', () => {
      const toastr = new Toastr();

      const toast1 = toastr.info(sampleMsg, `${sampleTitle}-1`);

      toastr.info(sampleMsg, `${sampleTitle}-2`);
      toastr.info(sampleMsg, `${sampleTitle}-3`);

      const container = toastr.$container;

      expect(container.children).toHaveLength(3);

      toastr.clear(toast1);

      expect(container.children).toHaveLength(2);
    });

    it('show 3 errors, clear all 3, 0 left', () => {
      const toastr = new Toastr();

      toastr.info(sampleMsg, `${sampleTitle}-1`);
      toastr.info(sampleMsg, `${sampleTitle}-2`);
      toastr.info(sampleMsg, `${sampleTitle}-3`);

      const container = toastr.$container;

      expect(container.children).toHaveLength(3);

      toastr.clear();

      expect(container.children).toHaveLength(0);
    });
  });
});
