var game = new Game("main_canvas",fileManager.getFile("main.js"));
//game.reloadMainFunction(document.getElementById("main.js_file"))
//game.run()

setInterval(rungame,10)
game.newObject(10,10,testImage)
function rungame(){
    game.objects[0].transform.rotation++;
    game.draw()
}