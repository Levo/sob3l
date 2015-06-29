var pictures = {
	"chicago1":"chicago_1.jpg",
	"chicago2":"chicago_2.jpg",
	"david":"david.png",
	"sanfran":"sanfran.jpg",
	"bird":"bird.jpg",
	"spacex1":"spacex_1.jpg",
	"spacex2":"spacex_2.jpg",
	"spacex3":"spacex_3.jpg",
	"spacex4":"spacex_4.jpg",
	"spacex5":"spacex_5.jpg"
}

function pickPicture(pictureName){
	image.src = this.pictures[pictureName.value];
    animate(canvas, context, startTime);

}