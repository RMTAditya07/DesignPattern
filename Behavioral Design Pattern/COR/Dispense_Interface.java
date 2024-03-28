public interface Dispense_Interface {

	void setNextChain(Dispense_Interface nextChain);
	
	void dispense(Currency cur);
}