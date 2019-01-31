import Toastr from '../Toastr';

const sampleMsg = 'I don\'t think they really exist';
const sampleTitle = 'TEST';

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
