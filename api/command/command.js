(function (scope) {

    function command(callback) {
        this.callback = callback;
    }

    command.prototype = {
        constructor : command,
        execute : function () {
            return this.callback.apply(null,arguments);
        }
    };

    scope.command = command;

}(PSspain.api));
