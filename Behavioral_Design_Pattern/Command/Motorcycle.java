public class Motorcycle implements IVehicle {

    @Override
    public void start() {
      System.out.println("Starting motorcycle...");
    }
  
    @Override
    public void stop() {
      System.out.println("Stopping motorcycle...");
    }
  
    @Override
    public void accelerate() {
      System.out.println("Accelerating motorcycle...");
    }
    @Override
    public void decelerate() {
      System.out.println("Decelerating motorcycle...");
    }
  
  }