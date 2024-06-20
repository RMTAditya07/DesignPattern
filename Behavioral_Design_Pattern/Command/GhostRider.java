public class GhostRider {
    ICommand command;
  
    public GhostRider(ICommand command){
      this.command = command;
    }
  
    public void setCommand(ICommand command) {
      this.command = command;
    }
  
    public void takeAction(){
      command.execute();
    }
  
    public void revertAction() {
      command.revert();
    }
  }