package WithFlyWeight;

// GraphicsClientWithFlyweight.java 
class GraphicsClientWithFlyweight {
    public static void main(String[] args) {
        IconFactory iconFactory = new IconFactory();

        // Use flyweight objects to draw icons
        Icon icon1 = iconFactory.getIcon("document");
        icon1.draw(10, 20, "blue");

        Icon icon2 = iconFactory.getIcon("folder");
        icon2.draw(50, 30, "green");

        Icon icon3 = iconFactory.getIcon("document");
        icon3.draw(80, 40, "red");
    }
}
