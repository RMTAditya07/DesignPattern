public class Dollar_50 implements DispenseChain {
    private DispenseChain chain;

    @Override
    public void setNextChain(DispenseChain nextChain) {
        this.chain = nextChain;
    }

    @Override
    public void dispense(Currency cur) {
        if (cur.getAmount() >= 50) {
            int num = cur.getAmount() / 50;
            int remainder = cur.getAmount() % 50;
            System.out.println("Dispensing " + num + " 50$ note");
            cur.subtractAmount(num * 50);
            if (remainder != 0) {
                this.chain.dispense(cur);
            }
        } else {
            this.chain.dispense(cur);
        }
    }
}
