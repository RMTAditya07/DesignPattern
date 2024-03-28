public class Triangle extends Shape {

    public Triangle(Color c) {
        super(c);
    }
    // implements the applyColortoShape() method by invoking the applyColor() method of the associated Color object.
    // This allows shapes to apply color without knowing the specific details of color implementation.
    @Override
    public void applyColortoShape() {
        System.out.print("Triangle filled with color ");
        color.applyColor();
    }

}