public class Dollar_10 implements DispenseChain {
    private DispenseChain chain;

    @Override
    public void setNextChain(DispenseChain nextChain) {
        this.chain = nextChain;
    }

    @Override
    public void dispense(Currency cur) {
        if (cur.getAmount() >= 10) {
            int num = cur.getAmount() / 10;
            int remainder = cur.getAmount() % 10;
            System.out.println("Dispensing " + num + " 10$ note");
            cur.subtractAmount(num * 10);
            if (remainder != 0) {
                this.chain.dispense(cur);
            }
        } else {
            this.chain.dispense(cur);
        }
    }
}
