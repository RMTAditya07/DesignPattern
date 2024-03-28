public class Main {
    public static void main(String[] args){
        
        var thief = new Thief(new ShopLifting());
        thief.steal();
        System.out.println("--------------------------------");
        thief.changeMethod(new IdentityTheft());
        thief.steal();
        System.out.println("--------------------------------");
    
    }
}
