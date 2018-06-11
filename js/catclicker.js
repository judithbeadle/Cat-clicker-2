class Cat {
	constructor(name, id){
		this.name = name;
		this.id = id;
		this.numClicks = 0;
		this.imageHolder = document.createElement('div');
		this.imageHolder.classList.add('image-holder', 'image' + this.id);
	}

	addCatHTML(catContainer){	
		this.imageSrc = 'assets/cat' + this.id + '.png';
    	this.image = document.createElement('img');
    	this.image.src = this.imageSrc;
    	this.imageHolder.appendChild(this.image);
  		catContainer.appendChild(this.imageHolder);
  		console.log(this.imageHolder);
	}
	
	countClicks(name, numClicks){
		numClicks = this.numClicks;
		name = this.name;
		this.imageHolder.addEventListener('click', function () {
		    numClicks ++;
			updateCounter(name, numClicks);
		}, false);
	}
}

let cat1, cat2;
function createCats(catContainer, imageHolder){
	cat1 = new Cat("Moggie", 1);
	cat1.addCatHTML(catContainer);
	cat1.countClicks(name, this.numClicks);
	cat2 = new Cat("Paws", 2);
	cat2.addCatHTML(catContainer);
	cat2.countClicks(this.imageHolder);
}
function updateCounter(name, numClicks){
	console.log(name + numClicks);
}

window.addEventListener('load',function(){


	// use dom elements
    const container = document.querySelector('.container');
	createCats(container);	

})


