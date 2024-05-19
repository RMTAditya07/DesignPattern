"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextEditor_1 = require("./TextEditor");
var editor = new TextEditor_1.default();
// editor.undo();
editor.appendText("Hello, ");
editor.appendText("World!");
editor.appendText("Super!");
console.log("Current Text:", editor.getCurrentText());
editor.undo();
console.log("After Undo:", editor.getCurrentText());
editor.undo();
console.log("After Undo 2:", editor.getCurrentText());
//# sourceMappingURL=index.js.map