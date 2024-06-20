public class AccelerateMotorCycle implements ICommand {

    IVehicle vehicle;
  
    public AccelerateMotorCycle(IVehicle vehicle){
      this.vehicle = vehicle;
    }
  
    public void execute() {
      vehicle.accelerate();
    }
  
    public void revert() {
      vehicle.decelerate();
    }
  
  }