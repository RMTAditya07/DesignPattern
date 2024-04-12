package Example;

public class Client {
    public static void main(String[] args) {
        VendingMachine vendingMachine = new VendingMachine();

        // The state of 'vendingMachine' will change after each operation
        vendingMachine.selectItem("Candy");
        vendingMachine.insertPayment(10);
        vendingMachine.insertPayment(10);
        vendingMachine.dispenseItem();

        // vendingMachine.dispenseItem();    
        // vendingMachine.insertPayment(10);
        // vendingMachine.selectItem("Cookies");

        // vendingMachine.selectItem("Chips");
    }
}