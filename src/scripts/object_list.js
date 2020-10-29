var list = document.getElementById("main_object_manager_ul");

function AddFolder(to,name,content){
    newfolder = "";
    newfolder += "<li class='folder'>";
    newfolder += "<img src='images/folder.ico' class='folder_icon'>"
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
}

function AddFile(to,name,content){
    newfile = "";
    newfile += "<li class='folder'>";
    newfile += "<img src='images/file.ico' class='file_icon'>"
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
}

AddFolder("main","Scripts","");
AddFile("Scripts","main.js","//Your main game script")
AddFolder("main","Images","");
AddFolder("main","Other","");
AddFolder("main","Objects","");