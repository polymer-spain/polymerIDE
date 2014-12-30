(function(scope){
    var menu = new scope.menu("global");

    var file =  menu.addItem("File","File");

    file.addSubItem("open","Open File","open.file")
        .addSubItem("close","Close File","close.file")
        .addDivider("div1");

    var create = file.addItem("create","Create");

    create.addSubItem("createComponent", "Create component", "create.component")
          .addSubItem("createApp", "Crear App", "create.app");


    var edit = menu.addItem("Edit","Edit");



}(PSspain.api));
