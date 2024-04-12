package WithoutFlyWeight;

public class IconWithoutFlyWeight {
    private String name;  // Intrinsic state
    private int x, y;     // Extrinsic state: position

    public IconWithoutFlyWeight(String name, int x, int y) {
        this.name = name;
        this.x = x;
        this.y = y;
        // Load icon image from disk (simulated)
        System.out.println("Loading image for icon: " + name);
    }

    public void draw(String color) {
        System.out.println("Drawing " + name + " at position (" + x + ", " + y + ") with color " + color);
        // Drawing logic specific to the icon
    }
}
