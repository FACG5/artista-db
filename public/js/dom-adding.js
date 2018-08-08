fetch(null, 'get', '/getdata?data=painters', renderOption);

function renderOption(err, data) {
	const obj = JSON.parse(data);
	if(obj.err);
	obj.data.forEach(element => {

	});
}
