var list = document.getElementById("main_object_manager_ul");

function AddFolder(to,name,content){
    newfolder = "";
    newfolder += "<li class='folder'>";
    newfolder += "<img src='images/icons/folder.ico' class='folder_icon'>"
    newfolder += "<label class = 'folder_label''>" + name + "</label>"
    newfolder += "<ul class = '"+name+"_content_folder'>"
    newfolder += content
    newfolder += "</ul>"
    newfolder += "</li>"
    if(to == "main"){
        list.innerHTML += newfolder;
    }
    else{
        list.getElementsByClassName(to + "_content_folder")[0].innerHTML += newfolder;
    }
    fileAdded();
}

function AddFile(to,name,content){
    newfile = "";
    newfile += "<li class='file'>";
    newfile += "<img src='images/icons/file.ico' class='file_icon'>"
    newfile += "<label class = 'file_label''>" + name + "</label>"
    newfile += "<label class = 'file_content'>"
    newfile += content
    newfile += "</label>"
    newfile += "</li>"
    if(to == "main"){
        list.innerHTML += newfile;
    }
    else{
        list.getElementsByClassName(to + "_content_folder")[0].innerHTML += newfile;
    }
    fileAdded();
}

function AddNewFileButton(){
    var args = document.getElementsByClassName("add_menu_arg");
    type = ""
    name = ""
    dir = ""
    for(var i = 0;i < args.length;i++){
        if(args[i].name == "name_in"){
            name = args[i].value;
        }
        if(args[i].name == "type"){
            type = args[i].value;
        }
        if(args[i].name == "dir"){
            dir = args[i].value;
        }
    }
    if(type == "folder"){
        AddFolder(dir,name,"")
    }
    if(type == "file"){
        AddFile(dir,name,"")
    }
    if(type == "object"){
        AddFile(dir,name + ".obj","")
    }
}

function fileAdded(){
    
}

AddFolder("main","Scripts","");
AddFile("Scripts","main.js","//Your main game script")
AddFolder("main","Sprites","");
AddFolder("main","Other","");
AddFolder("main","Objects","");