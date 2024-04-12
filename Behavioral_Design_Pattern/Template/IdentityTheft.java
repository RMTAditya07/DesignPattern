public class IdentityTheft extends StealingMethod {

    @Override
    protected String pickTarget() {
      return "Individual";
    }
  
    @Override
    protected void approachTarget(String target) {
      System.out.println("Gather information about the "+ target + " through hacking, malware");
    }
  
    @Override
    protected void attackTarget(String target) {
        System.out.println("Use the identity for illegal activities");
    }
  }