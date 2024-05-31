import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ATMDispenseChain {
    private DispenseChain c1;
    private Map<String, BankAccount> accounts;

    public ATMDispenseChain() {
        // Initialize the chain
        this.c1 = new Dollar_50();
        DispenseChain c2 = new Dollar_20();
        DispenseChain c3 = new Dollar_10();

        // Set the chain of responsibility
        c1.setNextChain(c2);
        c2.setNextChain(c3);

        // Initialize accounts
        accounts = new HashMap<>();
        // accounts.put("12345", new BankAccount("12345", 1000));
        // accounts.put("67890", new BankAccount("67890", 500));
    }

    public void createAccount(String accountNumber, int initialDeposit) {
        if (accounts.containsKey(accountNumber)) {
            System.out.println("Account already exists.");
        } else {
			BankAccount newAccount = new BankAccount(accountNumber, initialDeposit);
			accounts.put(accountNumber, newAccount);
			System.out.println("Account created successfully.");        }
    }

    public void handleTransaction(BankAccount account, Scanner input) {
        System.out.println("Enter amount to dispense or 'balance' to check balance:");
        String userInput = input.nextLine();

        if (userInput.equalsIgnoreCase("balance")) {
            account.displayBalance();
        } else {
            try {
                int amount = Integer.parseInt(userInput);
                if (amount % 10 != 0) {
                    System.out.println("Amount should be in multiples of 10s.");
                } else if (amount > account.getBalance()) {
                    System.out.println("Insufficient balance.");
                } else {
                    account.withdraw(amount);
                    c1.dispense(new Currency(amount));
                    account.displayBalance();
                }
            } catch (NumberFormatException e) {
                System.out.println("Invalid amount entered.");
            }
        }

        System.out.println("Do you want another transaction? (yes/no)");
        String anotherTransaction = input.nextLine();
        if (anotherTransaction.equalsIgnoreCase("yes")) {
            handleTransaction(account, input);
        }
    }

    public static void main(String[] args) {
        ATMDispenseChain atmDispenser = new ATMDispenseChain();
        Scanner input = new Scanner(System.in);

        while (true) {
            System.out.println("Welcome to the ATM. Please select an option:");
            System.out.println("1. Create a new account");
            System.out.println("2. Access existing account");
            System.out.println("3. Exit");
            int option = input.nextInt();
            input.nextLine(); // Consume newline

            if (option == 1) {
                System.out.println("Enter a new account number:");
                String newAccountNumber = input.nextLine();
                System.out.println("Enter initial deposit amount:");
                int initialDeposit = input.nextInt();
                input.nextLine(); // Consume newline
                atmDispenser.createAccount(newAccountNumber, initialDeposit);
            } else if (option == 2) {
                System.out.println("Enter your account number:");
                String accountNumber = input.nextLine();
                BankAccount account = atmDispenser.accounts.get(accountNumber);
                if (account == null) {
                    System.out.println("Invalid account number.");
                    continue;
                }
                atmDispenser.handleTransaction(account, input);
            } else if (option == 3) {
                System.out.println("Thank you for using the ATM. Goodbye!");
                break;
            } else {
                System.out.println("Invalid option. Please try again.");
            }
        }

        input.close();
    }
}
