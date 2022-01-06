var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");



function playsound(){
	x.play()
}
function newimage()
{ fabric.Image.fromURL("BirthdayImage.jpg",function(img){
    blockimgobject=img
    blockimgobject.scaleToWidth(600)
    blockimgobject.scaleToHeight(600)
    blockimgobject.set(
        {
            top:0,left:0
        }
    )
    canvas.add(blockimgobject)
        
})

}
