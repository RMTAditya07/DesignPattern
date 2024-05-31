class Runway implements Command 
{
  private IATCMediator atcMediator;

  public Runway(IATCMediator atcMediator) 
  {
    this.atcMediator = atcMediator;
    atcMediator.setLandingStatus(false);
  }

  @Override
  public void land() 
  {
    if (atcMediator.isLandingOk()) 
    {
      System.out.println("Landing permission granted.");
    } 
    else 
    {
      System.out.println("Landing permission denied. Waiting for clearance.");
    }
  }
}
