package example1;


import java.util.Iterator;
import java.util.ArrayList;
import java.util.List;

public class BookStore implements IBookCollection {
    private static final int MAX_BOOKS = 1000;
    private List<Book> books;

    public BookStore() {
        this.books = new ArrayList<>(MAX_BOOKS);
    }

    public boolean addBook(String language, String title, String author, long ISBN, double price) {
        if (books.size() < MAX_BOOKS) {
            Book book = new Book(language, title, author, ISBN, price);
            return books.add(book);
        } else {
            System.out.println("BookStore is full and can't accept any more books!");
            return false;
        }
    }

    public boolean addBook(Book book) {
        if (books.size() < MAX_BOOKS) {
            return books.add(book);
        } else {
            System.out.println("BookStore is full and can't accept any more books!");
            return false;
        }
    }

    @Override
    public Iterator<Book> iterator() {
        return new BookIterator(books);
    }
}