
    class Account {
        constructor(type,interestRate, balance) {
          this.type = type;
          this.interestRate = interestRate;
          this.balance = balance;
          
        }
    }
    class User {
        constructor(name, email) {
          this.name = name;
          this.email = email;
          this.accChecking = new Account ('checking',.02 , 25);
          this.accSaving = new Account ('saving',.03 , 25)
        }
        makeDeposit(amount,type) {
            if (type.includes('checking')) {
          this.accChecking.balance += amount;
            }else if(type.includes('saving')) {
                this.accSaving.balance +=amount;
            }
          return this;

        }
        makeWithdraw(amount , type) {
            if (type.includes('checking')){
            this.accChecking.balance -= amount;
            }else if (type.includes('saving')){
                this.accSaving.balance -=amount;
            }
          return this;
        }
        display() {
          console.log(
            "the user name is: " +
              this.name +
              "  ,and the Balance in checking is: " +
              this.accChecking.balance + ' and the balance in saving is '+ this.accSaving.balance
          );
          return this;
        }
        transfer(amount,  to) {
          this.accChecking.balance -= amount;
      
          to.accChecking.balance += amount;
          console.log(
            this.name +
              " transfered money to " +
              to.name +
              " and the account balance now is " +
              this.accChecking.balance
          );
          console.log(to.name + " account balance now is: " + to.accChecking.balance);
        }
      }

      const user1 = new User ('Ali','abc@gmail.com');
      const user2 = new User('omar' ,'omar@gmail.com');
      user1.makeDeposit(300,'checking').makeDeposit(1000,'saving').display();

      user2.makeDeposit(300,'checking').makeDeposit(2000,'saving').makeWithdraw(500,'saving').display();
      


      
      
