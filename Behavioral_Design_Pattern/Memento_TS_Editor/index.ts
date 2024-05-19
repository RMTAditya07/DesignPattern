import TextEditor from "./TextEditor";

const editor = new TextEditor();
  
// editor.undo();

editor.appendText("Hello, ");
editor.appendText("World!");
editor.appendText("Super!");
  
console.log("Current Text:", editor.getCurrentText());
  
editor.undo();
  
console.log("After Undo:", editor.getCurrentText());
  
editor.undo();
  
console.log("After Undo 2:", editor.getCurrentText());