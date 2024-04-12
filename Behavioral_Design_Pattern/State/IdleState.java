package Example;

// A 'ConcreteState' class
class IdleState implements State {
    public void selectItem(String selection) {
        System.out.println("You have selected item: " + selection);
        VendingMachine.state = new HasSelectionState();
    }
    public void insertPayment(int amount) {
        System.out.println("Please select an item first.");
    }
    public void dispenseItem() {
        System.out.println("Please select an item first.");
    }
}