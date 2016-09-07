/* global console */

(function() {
    "use strict";

    const MAX = 2;

    function remember() {
        var checkboxes = document.querySelectorAll("input[type=checkbox]");
        var checks = 0;

        for (var i = 0; i < checkboxes.length && checks < MAX; i++) {
            var checkbox = checkboxes[i];
            var boxText = (checkbox.name + checkbox.id).toLowerCase();
            if (boxText.indexOf("remember") > -1 || boxText.indexOf("keep") > -1 || boxText.indexOf("persist") > -1) {
                checkbox.checked = true;
                checks++;
            }
        }

        var labels = document.querySelectorAll("label");
        checks = 0;

        for (var j = 0; j < labels.length && checks < MAX; j++) {
            var label = labels[j];
            var labelText = (label.textContent).toLowerCase();
            var subBox = label.querySelector('input[type=checkbox]');
            if (subBox !== null && labelText.indexOf("remember") > -1 || labelText.indexOf("keep") > -1 || labelText.indexOf("persist") > -1) {
                subBox.checked = true;
                checks++;
            }
        }
    }

    remember();
})();