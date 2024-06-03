package example1;

public class Book {
    private String language;
    private String title;
    private String author;
    private long ISBN;
    private double price;

    public Book(String language, String title, String author, long ISBN, double price) {
        this.language = language;
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.price = price;
    }
    //-----------------------------------
    public String getLanguage() {
        return language;
    }
    
    public void setLanguage(String language) {
        this.language = language;
    }
    //-----------------------------------
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    //-----------------------------------
    
    public String getAuthor() {
        return author;
    }
    
    public void setAuthor(String author) {
        this.author = author;
    }
    //-----------------------------------
    
    public long getISBN() {
        return ISBN;
    }
    
    public void setISBN(long iSBN) {
        ISBN = iSBN;
    }
    //-----------------------------------
    
    public double getPrice() {
        return price;
    }
    
    public void setPrice(double price) {
        this.price = price;
    }
    //-----------------------------------

     @Override
    public String toString() {
        return "Book [language=" + language + ", title=" + title + ", author=" + author + ", ISBN=" + ISBN + ", price=" + price + "]";
    }

}