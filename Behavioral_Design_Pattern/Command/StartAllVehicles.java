import java.util.List;

public class StartAllVehicles implements ICommand {

  List<IVehicle> vehicles;

  public StartAllVehicles(List<IVehicle> vehicles) {
    this.vehicles = vehicles;
  }

  public void execute() {
    vehicles.forEach(vehicle -> vehicle.start());
  }

  @Override
  public void revert() {
    vehicles.forEach(vehicle -> vehicle.stop());
  }

}