import java.util.List;

public class RideVehicle {

    public static void main(String[] args) {
      IVehicle motorcycle = new Motorcycle();
  
      StartMotorCycle startCommand = new StartMotorCycle(motorcycle);
      GhostRider ghostRider = new GhostRider(startCommand);
      ghostRider.takeAction();
  
      AccelerateMotorCycle accelerateCommand = new AccelerateMotorCycle(motorcycle);
      ghostRider.setCommand(accelerateCommand);
      ghostRider.takeAction();
      ghostRider.revertAction();
  
      IVehicle truck = new Truck();
      List<IVehicle> vehicles = List.of(motorcycle, truck);
      StartAllVehicles startAllVehicles = new StartAllVehicles(vehicles);
      startAllVehicles.execute();
      startAllVehicles.revert();
    }
  
  }