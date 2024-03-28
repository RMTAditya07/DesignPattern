public class Dollar_20_Dispenser implements Dispense_Interface{

	private Dispense_Interface chain;
	
	@Override
	public void setNextChain(Dispense_Interface nextChain) {
		this.chain=nextChain;
	}

	@Override
	public void dispense(Currency cur) {
		if(cur.getAmount() >= 20){
			int num = cur.getAmount()/20;
			int remainder = cur.getAmount() % 20;
			System.out.println("Dispensing "+num+" 20$ note");
			if(remainder !=0) this.chain.dispense(new Currency(remainder));
		}else{
			this.chain.dispense(cur);
		}
	}
}