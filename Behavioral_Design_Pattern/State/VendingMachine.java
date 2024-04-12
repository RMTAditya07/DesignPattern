package Example;

// The 'Context' class
class VendingMachine {
    static State state;

    // Constructor
    public VendingMachine() {
        state = new IdleState();
    }

    // Other methods would follow here...
    public void selectItem(String selection) {
        state.selectItem(selection);
    }
    public void insertPayment(int amount) {
        state.insertPayment(amount);
    }
    public void dispenseItem() {
        state.dispenseItem();
    }
}