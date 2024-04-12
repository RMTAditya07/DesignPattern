package Example;

class HasPaymentState implements State {
    public void selectItem(String selection) {
        System.out.println("Item is already selected and paid for.");
    }
    public void insertPayment(int amount) {
        System.out.println("Item is already paid for.");
    }
    public void dispenseItem() {
        System.out.println("Dispensing item...");
        VendingMachine.state = new IdleState();
    }
}
