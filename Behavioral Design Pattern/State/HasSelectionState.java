package Example;

class HasSelectionState implements State {
    public void selectItem(String selection) {
        System.out.println("Item is already selected.");
    }
    public void insertPayment(int amount) {
        System.out.println("You have inserted payment: " + amount);
        VendingMachine.state = new HasPaymentState();
    }
    public void dispenseItem() {
        System.out.println("Please make a payment first.");
    }
}