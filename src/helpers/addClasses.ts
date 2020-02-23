const addClasses = (element: HTMLElement, ...classes: (string | string[])[]): void => {
  const classesToAdd: string[] = classes
    .flat()
    .map(classToAdd => classToAdd.split(' '))
    .flat();

  element.classList.add(...classesToAdd);
};

export default addClasses;
