class Manager{
    constructor(){
        this.manager = document.getElementById("main_object_manager_ul")
    }
    getFile(name){
        var files = this.manager.getElementsByClassName("file")
        var found = false;
        var file = "null";
        for(var i = 0;i < files.length;i++){
            if(files[i].getElementsByClassName("file_label")[0].innerHTML == name){
                found = true;
                file = files[i]
                break;
            }
        }
        if(found == false){
            file =  null;
        }
        return file;
    }
}

var fileManager = new Manager();

function drawRotated(x,y,width,height,image,degrees,context){
    context.clearRect(0,0,context.width,context.width);
    context.save();
    context.translate(width/2 + x,height/2 + x);
    context.rotate(degrees*Math.PI/180);
    context.drawImage(image,-(width/2 + x) / 2,-(width/2+y) / 2,width,height);
    context.restore();
}

var testImage = new Image();
testImage.src = "images/icons/close.ico";