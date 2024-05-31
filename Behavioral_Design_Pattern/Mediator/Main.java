public class Main 
{
  public static void main(String args[]) 
  {

    //Air Traffic Control Mediator
    IATCMediator atcMediator = new ATCMediator();
    Flight sparrow101 = new Flight(atcMediator);
    Runway mainRunway = new Runway(atcMediator);
    
    atcMediator.registerFlight(sparrow101); //Register the flight 
    atcMediator.registerRunway(mainRunway); //Register the runway
    sparrow101.getReady();
    mainRunway.land();
    sparrow101.land();

  }
}
