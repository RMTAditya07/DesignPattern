public abstract class StealingMethod {

    protected abstract String pickTarget();
  
    protected abstract void approachTarget(String target);
  
    protected abstract void attackTarget(String target);
  
    public final void steal() {
      var target = pickTarget();
      // logger.log(Level.INFO,"The target has been chosen as "+ target);
      System.out.println("The target has been chosen as "+ target);
      approachTarget(target);
      attackTarget(target);
    }
  }