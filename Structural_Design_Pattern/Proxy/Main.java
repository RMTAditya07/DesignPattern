package Structural_Design_Pattern.Proxy;

// Client Code
public class Main {
    public static void main(String[] args) {
        Image image = new ProxyImage("example.jpg");
        // Image image = new ProxyImage("example1.jpg");
        // The real image is loaded only when needed
        image.display();

        // The real image is not loaded again, as it has already been loaded
        image.display();
    }
}
