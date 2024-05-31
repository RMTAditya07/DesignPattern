public interface IATCMediator
{

  //contains the methods for registering the flight, runway and  checking if landing is allowed and setting the landing status.
  
  public void registerRunway(Runway runway);

  public void registerFlight(Flight flight);

  public boolean isLandingOk();

  public void setLandingStatus(boolean status);
}
