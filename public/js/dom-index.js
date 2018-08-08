function render(data) {
  const content = document.getElementsByClassName('content');
  // CREATE ELEMENTS
  const view = document.createElement('div');
  view.classList = 'view';
  const title = document.createElement('h2');
  title.classList = 'title';
  title.textContent = '';
  const img = document.createElement('img');
  img.classList = 'img';
  const desc = document.createElement('p');
  desc.classList = 'desc';
  const owner = document.createElement('h3');
  owner.classList = 'owner';
  const remove = document.createElement('span');
  remove.classList = 'fas fa-trash';
  // APPEND CHILDS
  view.appendChild(remove);
  view.appendChild(owner);
  view.appendChild(desc);
  view.appendChild(img);
  view.appendChild(title);
  content.appendChild(view);
}
