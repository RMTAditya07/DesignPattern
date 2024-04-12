package WithFlyWeight;

// ImageIcon.java
public class ImageIcon implements Icon {
    private String name;  // Intrinsic state

    public ImageIcon(String name) {
        this.name = name;
        // Load icon image from disk (simulated)
        System.out.println("Loading image for icon: " + name);
    }

    @Override
    public void draw(int x, int y, String color) {
        System.out.println("Drawing " + name + " at position (" + x + ", " + y + ") with color " + color);
        // Drawing logic specific to the icon
    }
}
