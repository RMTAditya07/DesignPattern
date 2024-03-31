public class Main {
    public static void main(String[] args) {
        // Get the singleton instance
        Singleton singleton1 = Singleton.getInstance();
        Singleton singleton2 = Singleton.getInstance();

        // Singleton singleton3 = new Singleton();
        
        // Both instances should be the same
        System.out.println("Is singleton1 the same instance as singleton2? " + (singleton1 == singleton2));
        // System.out.println("Is singleton1 the same instance as singleton3? " + (singleton1 == singleton3));

        // Use the singleton instance
        singleton1.doSomething();
        singleton2.doSomething();
    }
}
