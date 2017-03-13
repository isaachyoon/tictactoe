


	var classArr = document.getElementsByClassName('tiles');
	console.log('classArr', classArr.length);
	classArr.forEach(el => {
		el.addEventListener('click', e=> {
			console.log(e);
		})
	})
	// console.log(className);


	// .addEventListener('click', ()=> {
	// 		console.log('clicked');
	// 	})




