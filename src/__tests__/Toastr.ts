import Toastr from '../Toastr';

describe('Toastr', () => {
  it('should not fail', () => {
    const toastr = new Toastr();

    expect(toastr).toBeInstanceOf(Toastr);
  });
});
