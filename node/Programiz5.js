const readline=require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter a number:",function (num){
    let number=parseInt(num);
    let temp=number;
    let sum=0

    let digit=num.lenght;
    while(temp>0){
        let reminder=temp%10;
        sum+=Math.pow(remainder,digit);
        temp=Math.floor(temp10);    
    }
    if (sum==number){
        console.log(number+ "is an armstrong number");
    }
    else{
        console.log(number+ "is not an armstrong number");

    }
    rl.close();
});

//hello //llheo