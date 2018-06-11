class Cat {
	constructor(name, id){
		this.name = name;
		this.numClicks = 0;
		this.id = id;
		this.imageSrc = 'assets/cat';
	}

	addImage(){
		console.log(this.imageSrc);
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
function createCats(){
	cat1 = new Cat;
	cat1.name = "Moggie";
	cat1.id = 1;

	cat2 = new Cat;
	cat2.name = "Paws";
	cat2.id = 2;
}
createCats();


