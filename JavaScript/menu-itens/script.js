const listContainer = document.querySelector('[data-list]');
const newList = document.querySelector('[data-form]');
const input = document.querySelector('[data-input]');

let lists = [];

newList.addEventListener('submit', function (e) {
  e.preventDefault();
  const listName = input.value;

  if (listName === null || listName === '') return;
  const list = createList(listName);
  input.value = null;
  lists.push(list);
  render();
});
function createList(name) {
  return { id: Date.now().toString(), name: name };
}
function render() {
  clearElement(listContainer);
  lists.forEach(function (list) {
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = list.name;
    listContainer.appendChild(item);
  });
}
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
