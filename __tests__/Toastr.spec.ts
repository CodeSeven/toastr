import Toastr from '../src/Toastr';

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
});
