import readline from 'readline';


// get input from user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function processSum(number) {
  // Insert code to do whatever with sum here.
  console.log('The sum is', number);
}


const add = () => {rl.question('Enter a number: ', (score1) => {
    rl.question('Enter another number: ', (score2) => {
      const totalScore = parseFloat(score1) + parseFloat(score2);
      processSum(totalScore);
  
      rl.close();
    });
  });
}

if (require.main === module) {
  add()
} 
module.exports = add

