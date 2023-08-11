'use strict';
// document.querySelector('.message').textContent = 'vishnu';

// let element = document.querySelector('.manh');
// console.log(element)





// document.querySelector('.guess').value = 23;
let score = 20;


document.querySelector('.score').textContent = score;
let num = Math.floor(Math.random() * 20) + 1;
console.log(num);
//document.querySelector('.number').textContent = num;
let val = document.querySelector('.again').addEventListener('click', () =>
{
    document.querySelector('body').style.backgroundColor = '#222';
    num = Math.floor(Math.random() * 30) + 1;
    console.log(num);
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = "Start guessing...";
    
})
//console.log(val);
document.querySelector('.check').addEventListener('click', () =>
{
    let guess = +document.querySelector('.guess').value;
    console.log(guess);
    if (!guess)
    {
        console.log("⛔️ No number");
        document.querySelector('.message').textContent = "⛔️ No Number";

    }
    else if (guess === num)
    {
        
        document.querySelector('.message').textContent = "🎉 Correct Number!"
        document.querySelector('.highscore').textContent = Number(document.querySelector('.highscore').textContent) +score;
        document.querySelector('.number').textContent = num;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
  

    }
    else if (guess > num)
    {
        if (score > 1)
        {
            document.querySelector('.message').textContent = "📈 Too high!"
            score -= 1;
            document.querySelector('.score').textContent = score
            
            
        }
        else {
            document.querySelector('.message').textContent = "😂 You Lost The Game";
          
            document.querySelector('.score').textContent = 0;
        }
        
    }
    else if (guess < num)
    {
        if (score > 1)
        {
            document.querySelector('.message').textContent = "📈 Too Low!"
            score -= 1;
            document.querySelector('.score').textContent = score;
           
            
        }
        else {
            document.querySelector('.message').textContent = "😂 You Lost The Game";
            document.querySelector('.score').textContent = 0;
        }
        
        }
    
    
})
// let element = document.getElementById('pass');
// document.querySelector('.vis').addEventListener('click', () =>
// {
    
//     console.log(document.querySelector('input').type);
//     if (element.type === "password")
//     {
//         element.type = "text";
//     }
//     else {
//         element.type = "password";
//     }
// })

