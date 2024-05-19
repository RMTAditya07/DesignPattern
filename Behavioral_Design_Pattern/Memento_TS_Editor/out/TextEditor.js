"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextMemento_1 = require("./TextMemento");
var TextEditor = /** @class */ (function () {
    function TextEditor() {
        this.text = "";
        this.history = [];
    }
    TextEditor.prototype.appendText = function (newText) {
        this.history.push(new TextMemento_1.default(this.text));
        this.text += newText;
    };
    TextEditor.prototype.undo = function () {
        if (this.history.length === 0) {
            throw new Error("Cannot undo. History is empty.");
        }
        var lastMemento = this.history.pop();
        if (lastMemento) {
            this.text = lastMemento.text;
        }
    };
    TextEditor.prototype.getCurrentText = function () {
        return this.text;
    };
    return TextEditor;
}());
exports.default = TextEditor;
//# sourceMappingURL=TextEditor.js.map