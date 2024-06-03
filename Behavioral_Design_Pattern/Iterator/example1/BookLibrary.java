package example1;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class BookLibrary implements IBookCollection {
    private List<Book> books;

    public BookLibrary() {
        this.books = new ArrayList<>();
    }

    public boolean addBook(String language, String title, String author, long ISBN, double price) {
        Book book = new Book(language, title, author, ISBN, price);
        return books.add(book);
    }

    public boolean addBook(Book book) {
        return books.add(book);
    }

    @Override
    public Iterator<Book> iterator() {
        return books.iterator();
    }
}