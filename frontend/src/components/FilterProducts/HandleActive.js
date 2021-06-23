export const handleActive = (elementName, activeName) => {
  //let element = document.querySelector(`#${e.target.id}`);
  //console.log(element);

  let element = document.querySelector(`.${elementName}`);
  if (element.parentElement.querySelector(`.${activeName}`)) {
    element.parentElement
      .querySelector(`.${activeName}`)
      .classList.remove(`${activeName}`);
  }
  element.classList.add(`${activeName}`);
};
