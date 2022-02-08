var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");


 function new_image(){
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
        blockImg_object = Img;
        blockImg_object.scaleToWidth(700);
        blockImg_object.scaleToHeight(510);
        blockImg_object.set({
            top:0,
            left:0
        });
        canvas.add(blockImg_object);
    });
}

function playsound(){
    x.play()
}
