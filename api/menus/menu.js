(function(scope){

    var menus = scope.menus= scope.menus || {};


    //subItem class
    function subItem(id,name,command){
        this.id = id;
        this.name = name;
        this.command = command;
    }

    //Item class
    function menuItem(id,name){
        this.id =id;
        this.name = name;
    }
    menuItem.prototype._addSubItems=function(){
        this.subItems =  this.subItems || {};
    };
    menuItem.prototype._addElementToSubItems = function(element){
        this.subItems[element.id] = element;
    };
    menuItem.prototype.addItem = function(id,name){
        this._addSubItems();
        var element = new menuItem(id,name);
        this._addElementToSubItems(element);
        return element;
    };
    menuItem.prototype.addSubItem=function(id,name,command){
        this._addSubItems();
        var element = new subItem(id,name,command);
        this._addElementToSubItems(element);
        return this;
    };
    menuItem.prototype.addDivider=function(id){
        this.addSubItem(id);
    };
    menuItem.prototype.toJSON=function(){
        if(this.subItems)
        {
            var items = [];
            Object.keys(this.subItems).forEach(function(value){
                items.push(this.subItems[value]);
            }.bind(this));
            return {id:this.id,name:this.name,subItems:items};
        }
        return {id:this.id,name:this.name};
    };


    //menu Class
    function menu(id){
        this.id = id;
        menus[id] = this;
    }
    menu.prototype.addItem =function(id,name){
        var items = menus[this.id].items = menus[this.id].items || {};
        var menuitem = new menuItem(id,name);
        items[menuitem.id]=menuitem;
        return menuitem;
    };
    menu.prototype.toJSON = function(){
        var items = [];
        Object.keys(this.items).forEach(function(value){
            items.push(this.items[value]);
        }.bind(this));
        return {items:items};
    }

    scope.menu = menu;

}(PSspain.api))
