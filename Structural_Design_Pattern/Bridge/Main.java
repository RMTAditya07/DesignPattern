public class Main {

	public static void main(String[] args) {
		Shape tri = new Triangle(new RedColor());
		tri.applyColortoShape();
		
		Shape pent = new Pentagon(new GreenColor());
		pent.applyColortoShape();
	}

}