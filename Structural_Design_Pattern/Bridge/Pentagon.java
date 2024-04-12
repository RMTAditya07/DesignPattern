public class Pentagon extends Shape {

    public Pentagon(Color c) {
        super(c);
    }

    @Override
    public void applyColortoShape() {
        System.out.print("Pentagon filled with color ");
        color.applyColor();
    }

}