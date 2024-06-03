// Element interface
interface DocumentElement {
    accept(visitor: ExportVisitor): void;
}

// Concrete element
class TextElement implements DocumentElement {
    private content: string;
    constructor(content: string) {
        this.content = content;
    }

    accept(visitor: ExportVisitor): void {
        visitor.exportText(this);
    }

    getContent(): string {
        return this.content;
    }
}

// Visitor interface
interface ExportVisitor {
    exportText(textElement: TextElement): void;
}

// Concrete visitor
class PDFExporter implements ExportVisitor {
    exportText(textElement: TextElement): void {
        console.log(`Exporting text to PDF: ${textElement.getContent()}`);
    }
}

// Concrete visitor
class HTMLExporter implements ExportVisitor {
    exportText(textElement: TextElement): void {
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