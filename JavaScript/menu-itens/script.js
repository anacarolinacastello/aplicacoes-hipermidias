const listContainer = document.querySelector('[data-list]');
const listInput = document.querySelector('[data-input]');

let list = [];
listInput.addEventListener('submit', function (e) {
  e.preventDefault();
  const listName = listInput.value;
  if (listName === null || listName === '') {
    return;
  }
  const list = createList(listName);
  listInput.value = null;
  list.push(list);
  render();
});
function createList(name) {
  return { id: Date.now().toString(), name: name }; //função que retonara um objeto, a montagem de um objeto
}
function render() {
  lists.forEach(function (list) {
    const item = document.createElement('li'); //criar a lista, jogando pro html, criando elemento html
    item.classList.add('item'); // adiciona uma class, a nossa lista de classes
    item.innerText = list.name; //recuperar item e dizer que ele vai receber com texto o list
    listContainer.appendChild(item); //elemento mãe que vai receber as listas, a div fantasma *para passar elemnto filho appendchild, que é o item
  });
}
