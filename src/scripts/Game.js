class objectTransform{
    constructor(x,y,width,height,rotation){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.rotation = rotation
    }
}

class objectVisual{
    constructor(sprite,render){
        this.sprite = sprite
        this.render = render
    }
}

class gameObject{
    constructor(transform,visual,otherArgs){
        this.transform = transform
        this.visual = visual
        this.args = otherArgs
    }
}

class Game{
    constructor(canvasId,mainScript){
        this.canvas = document.getElementById(canvasId).getContext("2d");
        this.mainFunction = mainScript.getElementsByClassName("file_content")[0].innerHTML;
        this.objects = []
    }
    reloadMainFunction(mainScript){
        this.mainFunction = mainScript.getElementsByClassName("file_content")[0].innerHTML;
    }
    run(){
        var a = this.mainFunction.split(".line.")
        var b = ""
        for(var i = 0;i < a.length;i++){
            b += a[i] + "\n";
        }  
        this.fn = eval("this.fn = " + b)
        this.fn()
    }
    newObject(x,y,sprite){
        this.objects.push(new gameObject(new objectTransform(x,y,10,10,0),new objectVisual(sprite,true),{}))
    }
    draw(){
        for(var i = 0;i < this.objects.length;i++){
            if(this.objects[i].visual.render != false){
                var obj = this.objects[i]
                try{
                    drawRotated(obj.transform.x,obj.transform.y,obj.transform.width,obj.transform.height,obj.visual.sprite,obj.transform.rotation,this.canvas)    
                }
                catch(err){
                    console.log(err)
                }
            }
        }
    }
}