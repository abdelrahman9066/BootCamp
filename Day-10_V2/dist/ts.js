var FloatingLabelForm = /** @class */ (function () {
    function FloatingLabelForm() {
        this.inputs = document.querySelectorAll(".form-input");
        this.initialize();
    }
    ;
    FloatingLabelForm.prototype.initialize = function () {
        this.inputs.forEach(function (input) {
            var label = input.previousElementSibling;
            input.addEventListener("focus", function () {
                label.classList.add("active");
            });
            input.addEventListener("blur", function () {
                if (input.value.trim() === "") {
                    label.classList.remove("active");
                }
            });
        });
    };
    return FloatingLabelForm;
}());
new FloatingLabelForm();
