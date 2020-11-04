"use strict";
var displayArray = function () {
    var message = "Use Codefresh!!";
    var useCodefresh = [
        message,
        "   #                ##",
        "   ###           ####",
        "    ## ###     #######",
        "    ##  ###  ########",
        "     ##  ###  ######",
        "     ##  ###  ####",
        "    ###  ##  ###",
        "     #####",
        "        ##",
        "         ##"
    ];
    useCodefresh.forEach(function (value) {
        console.log(value);
    });
};
displayArray();
