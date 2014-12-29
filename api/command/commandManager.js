(function (scope) {
    "use strict";
    function commandManager() {
        var commands = {};
        return {
            register : function (id, callback) {
                commands[id] = new scope.command(callback);
            },
            deleteCommand : function (id) {
                delete commands[id];
            },
            get : function (id) {
                var command = commands[id];
                if(command){
                    return command.execute.bind(command);
                }
            }
        };
    }

    scope.commandManager = commandManager();
}(PSspain.api));
