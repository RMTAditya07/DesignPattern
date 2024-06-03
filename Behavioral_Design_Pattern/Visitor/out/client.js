// Concrete element
class TextElement {
    constructor(content) {
        this.content = content;
    }
    accept(visitor) {
        visitor.exportText(this);
    }
    getContent() {
        return this.content;
    }
}
// Concrete visitor
class PDFExporter {
    exportText(textElement) {
        console.log(`Exporting text to PDF: ${textElement.getContent()}`);
    }
}
// Concrete visitor
class HTMLExporter {
    exportText(textElement) {
        console.log(`Exporting text to HTML: ${textElement.getContent()}`);
    }
}
// Client
const textElement = new TextElement("This is a text element.");
//Exporting text to PDF: This is a text element.
const pdfExporter = new PDFExporter();
textElement.accept(pdfExporter);
//Exporting text to HTML: This is a text element.
const htmlExporter = new HTMLExporter();
textElement.accept(htmlExporter);
//# sourceMappingURL=client.js.map