package example1;
import java.util.Iterator;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Book[] books = {
                new Book("English", "Head First Java, 2nd Edition", "Kathy Sierra", 10123758943L, 10.5),
                new Book("English", "Effective Java (3rd Edition)", "Bloch Joshua", 34422235432L, 8.65),
                new Book("English", "Mastering Java Machine Learning", "Dr Uday Kamath", 2123765476L, 21.45),
                new Book("English", "Cloud-Native Java", "Kenny Bastani", 21332343434L, 28.99),
                new Book("English", "Java 9 Modularity", "Paul Bakker", 1645243587L, 36.68)
        };

        BookStore store = new BookStore();
        BookLibrary library = new BookLibrary();

        // Adding books from the array
        for (Book book : books) {
            store.addBook(book);
            library.addBook(book);
        }

        Scanner scanner = new Scanner(System.in);
        System.out.println("Do you want to add a book? (yes/no)");
        String addBookChoice = scanner.nextLine();

        if (addBookChoice.equalsIgnoreCase("yes")) {
            System.out.println("Enter book details:");
            System.out.print("Language: ");
            String language = scanner.nextLine();
            System.out.print("Title: ");
            String title = scanner.nextLine();
            System.out.print("Author: ");
            String author = scanner.nextLine();
            System.out.print("ISBN (numeric): ");
            long isbn = Long.parseLong(scanner.nextLine());
            System.out.print("Price: ");
            double price = Double.parseDouble(scanner.nextLine());

            System.out.println("Where do you want to add the book? (store/library)");
            String addLocation = scanner.nextLine();

            if (addLocation.equalsIgnoreCase("store")) {
                store.addBook(language, title, author, isbn, price);
            } else if (addLocation.equalsIgnoreCase("library")) {
                library.addBook(language, title, author, isbn, price);
            }
        }

        System.out.println("Do you want to display books from the store or library? (store/library)");
        String displayLocation = scanner.nextLine();

        if (displayLocation.equalsIgnoreCase("store")) {
            System.out.println("Printing Book details of Book Store");
            System.out.println("----------------------------------");
            printBooks(store.iterator());
        } else if (displayLocation.equalsIgnoreCase("library")) {
            System.out.println("Printing Book details of Book Library");
            System.out.println("------------------------------------");
            printBooks(library.iterator());
        } else {
            System.out.println("Invalid choice. Exiting.");
        }

        scanner.close();
    }

    private static void printBooks(Iterator<Book> iterator) {
        System.out.printf("%-10s | %-35s | %-15s | %-15s | %-10s\n", "Language", "Title", "Author", "ISBN", "Price");
        System.out.println("----------------------------------------------------------------------------");
        while (iterator.hasNext()) {
            Book book = iterator.next();
            System.out.printf("%-10s | %-35s | %-15s | %-15s | %-10.2f\n",
                    book.getLanguage(), book.getTitle(), book.getAuthor(), book.getISBN(), book.getPrice());
        }
        System.out.println("----------------------------------------------------------------------------");
        System.out.println();
    }
}
