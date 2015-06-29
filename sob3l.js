function Sob3l(){

	var threshold =  100;

	context.clearRect(0, 0, canvas.width, canvas.height);

	var imageWidth  = image.width*2;
	var imageHeight = image.height;

	canvas.width = imageWidth;
	canvas.height = imageHeight;
	context.drawImage(image, 0, 0);
	var imageData = context.getImageData(0, 0, imageWidth, imageHeight);
	var data = imageData.data;

	for(var y = 1; y < imageHeight-1; y++) {
	  for(var x = 1; x < (imageWidth/2)-1; x++) {

		var pNW = PictureArray[y-1][x-1];
		var pN  = PictureArray[y-1][x];
		var pNE = PictureArray[y-1][x+1];
		var pW  = PictureArray[y][x-1];
		var pE  = PictureArray[y][x+1];
		var pSW = PictureArray[y+1][x-1];
		var pS  = PictureArray[y+1][x];
		var pSE = PictureArray[y+1][x+1];
		var pC  = PictureArray[y][x];

		var Gx = 0;
		var Gy = 0;
		var G = 0;

		Gx += pNW * MASKX[0][0]; Gx += pN * MASKX[0][1]; Gx += pNE * MASKX[0][2];
        Gx += pW * MASKX[1][0];  Gx += pC * MASKX[1][1]; Gx += pE * MASKX[1][2];
        Gx += pSW * MASKX[2][0]; Gx += pS * MASKX[2][1]; Gx += pSE * MASKX[2][2];

        Gy += pNW * MASKY[0][0]; Gy += pN * MASKY[0][1]; Gy += pNE * MASKY[0][2];
        Gy += pW * MASKY[1][0];  Gy += pC * MASKY[1][1]; Gy += pE * MASKY[1][2];
        Gy += pSW * MASKY[2][0]; Gy += pS * MASKY[2][1]; Gy += pSE * MASKY[2][2];

        G = Math.abs(Gx) + Math.abs(Gy);

        if(G > 255){
            G = 255;
        }
        if(G < threshold ){
            G = 0;
        }

	    data[((imageWidth * y) + x) * 4]     = G;
	    data[((imageWidth * y) + x) * 4 + 1] = G;
	    data[((imageWidth * y) + x) * 4 + 2] = G;
	  }
	}

    for(var y = 0; y < imageHeight; ++y)
    {
    	for(var x = 0; x < (imageWidth/2); ++x)
        {
            if(x == 0 || x == (imageWidth/2)-1  || y == 0 || y == imageHeight - 1){
    		    data[((imageWidth * y) + x) * 4]     = 0;
	   		 	data[((imageWidth * y) + x) * 4 + 1] = 0;
	   			data[((imageWidth * y) + x) * 4 + 2] = 0;
            }

        }
    }
	context.putImageData(imageData, 0, 0 );
	context.drawImage(image, image.width, 0);	

}