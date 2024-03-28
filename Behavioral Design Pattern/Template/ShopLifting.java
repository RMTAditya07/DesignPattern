public class ShopLifting extends StealingMethod {

    @Override
    protected String pickTarget() {
      return "Shops";
    }
  
    @Override
    protected void approachTarget(String target) {
      System.out.println("Go to shop and get the products");
    }
  
    @Override
    protected void attackTarget(String target) {
      System.out.println("Leave without paying or switch price tags");
    }
  }