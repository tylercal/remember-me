/* global console */

(function() {
    "use strict";

    const MAX = 2;

    function remember() {
        var checkboxes = document.querySelectorAll("input[type=checkbox]");
        var checks = 0;

        for (var i = 0; i < checkboxes.length && checks < MAX; i++) {
            var checkbox = checkboxes[i];
            var text = (checkbox.name + checkbox.id).toLowerCase();
            if (text.indexOf("remember") > -1 || text.indexOf("keep") > -1 || text.indexOf("persist") > -1) {
                checkbox.checked = true;
                checks++;
            }
        }
    }

    remember();
})();