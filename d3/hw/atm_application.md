 	# I hope that you're the one...if not you are the prototype

####ATM application
To get some practice with working with `constructors`, `prototypes`, and the use of the `new` operator to create an Object, you are going to make an ATM.

You should define two constructor functions and any necessary prototype properties:

1. Account
	- always starts at 0 dollars.
	- can withdraw money
	- can deposit money
2. User
	- name
	- checking account
	- savings account

Start by creating the Account constructor that will be the basis for the checking and savings accounts of a user.

Here are the user stories to guide you:

- Keep track of checking and savings balances
	* As a user, I want to deposit money into one of my accounts
	* As a user, I want to withdraw money from one of my accounts
	* As a user, I want to not be able to overdraft my accounts
		- If a user tries to withdraw more money than exists in the account, ignore the transaction.
	
Implement these behaviors first, then create a User constructor. When a new User object is created they should have a name, and two accounts: checking and savings.

Once you have created your User objects and are able to create multiple users with multiple accounts move on to overdraft protection: 
- As a user I want overdraft protection, so my card is never declined on a hot date.
	- If a withdrawal can be covered by the balances in both accounts, take the checking
balance down to $0 and take the rest of the withdrawal from the savings account. 
	- If the withdrawal amount is more than the combined account balance, ignore the transaction.
___

#### MTA Redux

The second part of your assignment is recreate the MTA app you made the first week of class.

You should define two constructor functions:

1. Line
	- has an array of stations
	- can return a string listing all of the stations belonging to that line
2. Subway
	- has an object containing train lines
	- can print out a list of all train lines
	- can determine the length of a trip on 
	the subway system
	
**Start with a trip on one line, then work on trips requiring a transfer**

