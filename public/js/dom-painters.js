const Container = document.getElementById("Container");

fetch(null, "GET", '/getData?data=painters', buildPaintersDom)

function buildPaintersDom(errfetch, data) {
  if (errfetch) conole.log("error in fetch");
    var pdata = JSON.parse(data);
    console.log(pdata);
    //building the div
      pdata.data.forEach(element => {
        const prdev = document.createElement("div");
        prdev.classList = 'view';
        const name= document.createElement("h2");
        name.classList = 'title';
        const primg= document.createElement("img");
        primg.classList = 'img';
        name.textContent = element.painter_name;
        primg.src=element.img;
        prdev.appendChild(name);
        prdev.appendChild(primg);
        Container.appendChild(prdev);

      })

}
// windows.load =
