public class Singleton {
    // Private static instance of the class
    private static Singleton instance;

    // Private constructor to prevent instantiation from outside
    private Singleton() {
        // Optional: Initialization code
    }

    // Public static method to get the singleton instance
    public static Singleton getInstance() {
        // Check if the instance is null
        if (instance == null) {
            // If null, create a new instance
            instance = new Singleton();
        }
        // Return the instance
        return instance;
    }

    // Example method
    public void doSomething() {
        System.out.println("Singleton instance is doing something.");
    }
}