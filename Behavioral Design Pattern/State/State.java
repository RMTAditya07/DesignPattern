package Example;

interface State {
    void selectItem(String selection);
    void insertPayment(int amount);
    void dispenseItem();
}