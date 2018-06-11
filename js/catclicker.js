class Cat {
	constructor(name, numClicks = 0, imageSrc, id){
		this.name = name;
		this.id = id;
		this.numClicks = 0;
	}

	addImage(catContainer){
		this.imageSrc = 'assets/cat' + this.id + '.png';
		this.imageHolder = document.createElement('div');
    	this.imageHolder.classList.add('image-holder', 'image' + this.id);
    	this.image = document.createElement('img');
    	this.image.src = this.imageSrc;
    	this.imageHolder.appendChild(this.image);
  		catContainer.appendChild(this.imageHolder);
	}
	
	countClicks(){
		addEventListener('click', function () {
		    this.numClicks ++;
			updateCounter(this.numClicks);
		}, false);
	}
}

let cat1, cat2; 
    // initiate cats

window.addEventListener('load',function(){

	function createCats(){
		cat1 = new Cat;
		cat1.name = "Moggie";
		cat1.id = 1;
		cat1.addImage(container);

		cat2 = new Cat;
		cat2.name = "Paws";
		cat2.id = 2;
		cat2.addImage(container);
	}

	// use dom elements
    const container = document.querySelector('.container');
    
	
	createCats();
	

})


