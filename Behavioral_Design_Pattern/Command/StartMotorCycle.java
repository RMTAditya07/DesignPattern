public class StartMotorCycle implements ICommand {

    IVehicle vehicle;
  
    public StartMotorCycle(IVehicle vehicle) {
      this.vehicle = vehicle;
    }
  
    public void execute() {
      vehicle.start();
    }
  
    @Override
    public void revert() {
      vehicle.stop();
    }
  
  }
  