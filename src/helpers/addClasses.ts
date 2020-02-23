import flat from 'array.prototype.flat';

const addClasses = (element: HTMLElement, ...classes: (string | string[])[]): void => {
  const classesToAdd: string[] = flat(classes)
    .map(classToAdd => classToAdd.split(' '));

  element.classList.add(...flat(classesToAdd));
};

export default addClasses;
