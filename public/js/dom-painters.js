const Container = document.getElementById('Container');

fetch(null, 'GET', '/getdata?data=painters', buildPaintersDom);

function buildPaintersDom(errfetch, data) {
  if (errfetch) conole.log('error in fetch');
  let pdata = JSON.parse(data);
  
  pdata.data.forEach((element) => {
    const prdev = document.createElement('div');
    prdev.classList = 'view';
    const name = document.createElement('h2');
    name.classList = 'title';
    const primg = document.createElement('img');
    primg.classList = 'img';
    const line = document.createElement('hr');
    name.textContent = element.painter_name;
    primg.src = element.img;
    prdev.appendChild(name);
    prdev.appendChild(primg);
    Container.appendChild(prdev);
    Container.appendChild(line);
  });
}
