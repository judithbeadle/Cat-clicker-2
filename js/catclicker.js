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
    	this.scorePanel = document.createElement('p');
    	this.scorePanelText = "click " + this.name;
    	this.scorePanel.innerHTML = this.scorePanelText; 
    	this.imageHolder.appendChild(this.image);
  		catContainer.appendChild(this.imageHolder);
  		this.imageHolder.appendChild(this.scorePanel);
	}
	
	countClicks(name, numClicks, scorePanel){
		numClicks = this.numClicks;
		name = this.name;
		scorePanel = this.scorePanel;
		this.imageHolder.addEventListener('click', function () {
		    numClicks ++;
			updateCounter(name, numClicks, scorePanel);
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
function updateCounter(name, numClicks, scorePanel){
	if (numClicks === 1){
		scorePanel.innerHTML = 'You\'ve clicked ' + name + ' ' + numClicks + ' time';
	} else {
		scorePanel.innerHTML = 'You\'ve clicked ' + name + ' ' + numClicks + ' times';
	}
}

window.addEventListener('load',function(){
	// use dom elements
    const container = document.querySelector('.container');
	createCats(container);	

})


