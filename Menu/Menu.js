/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  Step 1: Write a function that will create a menu component as seen below:
  <div class="menu">
    <ul>
      {each menu item as a contents item}
    </ul>
  </div>
  The function takes an array as its only argument.
  Step 2: Inside this function, iterate over the array creating a contents item <li> element for each item in the array.
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  Step 4: add a click event contentsener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.

*/
function createMenu(array) {
  // define elements
  const menu = document.createElement('div');
  const contents = document.createElement('ul');
  const menuBtn = document.querySelector('.menu-button');
  array.forEach(item => {
    let menuItem = document.createElement('li');
    menuItem.textContent = item;
    contents.appendChild(menuItem);
    console.log(menuItem)
  })
  menu.classList.add('menu');
  menu.appendChild(contents);
  menuBtn.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
    contents.classList.toggle('toggle-on');
  })
  return menu;
}
const dd = document.querySelector('.header');
dd.appendChild(createMenu(menuItems))
