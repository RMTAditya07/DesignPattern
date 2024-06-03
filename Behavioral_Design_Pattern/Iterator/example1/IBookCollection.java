package example1;

public interface IBookCollection extends Iterable<Book> {
    // No need for extra method declarations, as Iterable already declares iterator()
}