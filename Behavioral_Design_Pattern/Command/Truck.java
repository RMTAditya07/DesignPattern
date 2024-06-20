public class Truck implements IVehicle {

    @Override
    public void start() {
      System.out.println("Starting truck...");
    }
  
    @Override
    public void stop() {
      System.out.println("Stopping truck...");
    }
  
    @Override
    public void accelerate() {
      System.out.println("Accelerating truck...");
    }
    @Override
    public void decelerate() {
      System.out.println("Decelerating truck...");
    }
  
  }