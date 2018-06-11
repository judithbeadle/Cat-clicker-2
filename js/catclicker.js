class Cat {
	constructor(name, numClicks = 0, imageSrc, id){
		this.name = name;
		this.id = id;
		this.numClicks = 0;
	}

	addImage(){
		this.imageSrc = 'assets/cat/cat' + this.id + '.png';
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
	cat1.addImage();

	cat2 = new Cat;
	cat2.name = "Paws";
	cat2.id = 2;
	cat2.addImage();

}
createCats();


