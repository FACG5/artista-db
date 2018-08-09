fetch(null, 'get', '/getdata?data=painters', renderOption);

function renderOption(err, data) {
  const obj = JSON.parse(data);
  if (obj.err);
  const opations = document.getElementsByClassName('options')[0];
  obj.data.forEach((element) => {
    const opation = document.createElement('option');
    opation.value = element.painter_id;
    opation.textContent = element.painter_name;
    opations.appendChild(opation);
  });
}
