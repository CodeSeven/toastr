import addClasses from '../../src/helpers/addClasses';

test('add single class', () => {
  addClasses(document.body, 'new-class');

  expect(document.body.className).toBe('new-class');
});

test('add multiple classes as string', () => {
  addClasses(document.body, 'new-class another-new-class');

  expect(document.body.className).toBe('new-class another-new-class');
});

test('add multiple classes as array', () => {
  addClasses(document.body, ['new-class', 'another-new-class']);

  expect(document.body.className).toBe('new-class another-new-class');
});

test('add multiple classes as mixed', () => {
  addClasses(document.body, ['new-class', 'another-new-class mixed'], 'even-newer-class');

  expect(document.body.className).toBe('new-class another-new-class mixed even-newer-class');
});
