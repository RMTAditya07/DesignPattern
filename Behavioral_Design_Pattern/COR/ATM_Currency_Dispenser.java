import java.util.Scanner;

public class ATM_Currency_Dispenser {

	private Dispense_Interface c1;

	public ATM_Currency_Dispenser() {
		// initialize the chain
		this.c1 = new Dollar_50_Dispenser();
		Dispense_Interface c2 = new Dollar_20_Dispenser();
		Dispense_Interface c3 = new Dollar_10_Dispenser();

		// set the chain of responsibility
		c1.setNextChain(c2);
		c2.setNextChain(c3);
	}

	public static void main(String[] args) {
		ATM_Currency_Dispenser atmDispenser = new ATM_Currency_Dispenser();
		// while (true) {
		// 	int amount = 0;
		// 	System.out.println("Enter amount to dispense");
		// 	Scanner input = new Scanner(System.in);
		// 	amount = input.nextInt();
		// 	if (amount % 10 != 0) {
		// 		System.out.println("Amount should be in multiple of 10s.");
		// 		return;
		// 	}
		// 	// process the request
		// 	atmDispenser.c1.dispense(new Currency(amount));
		// }
		atmDispenser.c1.dispense(new Currency(80));

	}

}