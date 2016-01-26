/* global console */

(function() {
    "use strict";

    const MAX = 2;

    function remember() {
        var checkboxes = document.querySelectorAll("input[type=checkbox]");
        var checks = 0;

        for (var i = 0; i < checkboxes.length && checks < MAX; i++) {
            var checkbox = checkboxes[i];
            if ((checkbox.name + checkbox.id).toLowerCase().indexOf("remember") > -1) {
                checkbox.checked = true;
                checks++;
            }
        }
    }

    remember();
})();