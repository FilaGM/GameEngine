class Game{
    constructor(canvasId,mainScript){
        this.canvas = document.getElementById(canvasId);
        this.mainFunction = mainScript.getElementsByClassName("file_content")[0].innerHTML;
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
}