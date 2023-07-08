(function () {
    "use strict";
    var gameboyAdvanceSoftList = require("../data/soft_list");

    if (typeof define === "function" && define.amd) {
        define(function () {
            return gameboyAdvanceSoftList;
        });
    } else if (typeof module !== "undefined" && module.exports) {
        module.exports = gameboyAdvanceSoftList;
    } else {
        window.gameSoft = {
            GBA: gameboyAdvanceSoftList,
        };
    }
})();
