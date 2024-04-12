package WithoutFlyWeight;

// Client Code Without Flyweight
public class GraphicsClientWithoutFlyWeight {
    public static void main(String[] args) {
        // Without Flyweight, create new instances for each icon
        IconWithoutFlyWeight icon1 = new IconWithoutFlyWeight("document", 10, 20);
        icon1.draw("blue");

        IconWithoutFlyWeight icon2 = new IconWithoutFlyWeight("folder", 50, 30);
        icon2.draw("green");

        IconWithoutFlyWeight icon3 = new IconWithoutFlyWeight("document", 80, 40);
        icon3.draw("red");
    }
}
