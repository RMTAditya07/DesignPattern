public class Dollar_20 implements DispenseChain {
    private DispenseChain chain;

    @Override
    public void setNextChain(DispenseChain nextChain) {
        this.chain = nextChain;
    }

    @Override
    public void dispense(Currency cur) {
        if (cur.getAmount() >= 20) {
            int num = cur.getAmount() / 20;
            int remainder = cur.getAmount() % 20;
            System.out.println("Dispensing " + num + " 20$ note");
            cur.subtractAmount(num * 20);
            if (remainder != 0) {
                this.chain.dispense(cur);
            }
        } else {
            this.chain.dispense(cur);
        }
    }
}
