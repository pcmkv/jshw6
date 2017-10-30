function inBox(e){
    var x = e.clientX;
    var y = e.clientY;
    var mouseCor ="x = " + x + " y = " + y ;
    document.getElementById("position").innerHTML = mouseCor;
}
function outBox(){
    document.getElementById("position").innerHTML="";
}


var folderBlock = document.getElementById('folder');
function statusFolder() {
    this.classList.toggle('open-folder');
    this.classList.toggle('close-folder');
}
folderBlock.addEventListener('dblclick',statusFolder);

arrayBlock = new Array(400);
function drawBlock(){
    for(var i =0; i < arrayBlock.length;i++){
        var block = document.createElement('div');
        block.style.width='30px';
        block.style.height='30px';
        block.style.border = '1px solid black';
        block.style.background='#grey';
        block.style.marginBottom = '15px';
        block.style.marginTop = '15px';
        block.className = 'block'+i;
        document.getElementById('canvas').appendChild(block);
        block.addEventListener('mouseover',function () {
            this.style.borderRadius = '20px';
            this.style.transition = '1s';
        });
        block.addEventListener('mouseleave',function () {
            this.style.borderRadius = '0';
            this.style.transition = '1s';
        })
    }
}

var btnDraw = document.getElementById('draw');
btnDraw.addEventListener('click',drawBlock);


function changeBg(){
    var img = document.getElementsByClassName('img');
    for(var i = 0 ; i< img.length;i++){
        img[i].addEventListener('click',function () {
            var sourceImg = this.src;
            sourceImg = sourceImg.slice(sourceImg.lastIndexOf('images'));
            var galleryBlock = document.getElementById('gallery');
            galleryBlock.style.backgroundImage = 'url('+sourceImg+')';
            galleryBlock.style.backgroundSize = 'contain';
        })
    }
}
changeBg();

var moveBlock = document.getElementById('move-block');
moveBlock.style.top = "0";
function moveDownBlock() {
    var position = parseInt(moveBlock.style.top);
    moveBlock.style.top =(position +100) + 'px';
}

moveBlock.addEventListener('click',moveDownBlock);


var triggerBox = document.getElementById('trigger');
var num = 1;
function test(){
    if(num == 0){
        this.style.left = 0+"%";
        console.log(this.style.left);
        num++
    }
    else if(num == 1){
        this.style.position = "absolute";
        this.style.left = 50+"%";
        num++
    }
    else if(num == 2){
        this.style.right = 0+"%";
        this.style.left ='';
            console.log(2);
        num = 0;
    }


}
triggerBox.addEventListener('click',test);
console.log(triggerBox);