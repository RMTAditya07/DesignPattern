import TextMemento from "./TextMemento";


class TextEditor {
    private text: string = "";
    private history: TextMemento[] = [];
  
    appendText(newText: string) {
      this.history.push(new TextMemento(this.text));
      this.text += newText;
    }
  
    undo() {
      if (this.history.length === 0) {
        throw new Error("Cannot undo. History is empty.");
      }
      const lastMemento = this.history.pop();
      if (lastMemento) {
        this.text = lastMemento.text;
      }
    }
  
    getCurrentText() {
      return this.text;
    }
  }
  
  export default TextEditor;