fetch(null, "GET", '/getData?data=painters', buildPaintersDom)

function buildPaintersDom(errfetch, data) {
  if (errfetch) conole.log("error in fetch");
    var pdata = JSON.parse(data);
    console.log(pdata);
    

}
// windows.load =
