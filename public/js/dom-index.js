fetch(null,'get','/getData?data=painting',render)

function render(err,obj) {
		object = JSON.parse(obj);
		if(object.err){
			console.log('error');
		}
		let arr = object.data
		console.log('arr.length',arr);
		const content = document.getElementsByClassName('content')[0];
		// CREATE ELEMENTS
		arr.forEach(element => {
			const view = document.createElement('div');
			view.classList = 'view';
			const title = document.createElement('h2');
			title.classList = 'title';
			title.textContent = element.paint_name;
			const img = document.createElement('img');
			img.classList = 'img';
			img.src = element.img;
			const desc = document.createElement('p');
			desc.classList = 'desc';
			desc.textContent = element.paint_description;
			const owner = document.createElement('h3');
			owner.classList = 'owner';
			owner.textContent = element.painter_name;
			const remove = document.createElement('span');
			remove.classList = 'fas fa-trash';
			const line = document.createElement('hr');
			//APPEND CHILDS
			view.appendChild(title);
			view.appendChild(owner);	
			view.appendChild(img);
			view.appendChild(desc);
			view.appendChild(remove);
			content.appendChild(view);
			content.appendChild(line);
		})
}  