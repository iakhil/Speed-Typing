//const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";
const quoteDisplayElement = document.getElementById('quote-display')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')
const timeTaken = document.getElementById('time-taken')
let totalWords = document.getElementById('total-words')
let typingSpeed = document.getElementById('typing-speed')




quoteInputElement.addEventListener('input', () => {
  
    
  const arrayQuote = quoteDisplayElement.querySelectorAll('span')
  const arrayValue = quoteInputElement.value.split('')
  let correct = true 
  let total_words = 1
  arrayQuote.forEach((characterSpan, index) => {
      const character = arrayValue[index] 
       
      
      if (character == null){
          characterSpan.classList.remove('correct')
          characterSpan.classList.remove('incorrect')
          correct = false 
      }
      else if (character === characterSpan.innerText){
        characterSpan.classList.add('correct')
          characterSpan.classList.remove('incorrect')
      }

      else {
          characterSpan.classList.add('incorrect')
          characterSpan.classList.add('correct')
          correct = false 
      }

      if (characterSpan.innerText == ' ')
        total_words += 1 
  })

  if (correct){
    let time_taken = getTimerTime()
    let time_mins = (time_taken / 60).toFixed(2) 
    timeTaken.innerText = time_taken 
    totalWords.innerText = total_words 
    typingSpeed.innerText = (total_words / time_mins).toFixed(2) + " WPM"
    //renderNewQuote()
  }  
   
})

// function getRandomQuote() {
//     return fetch(RANDOM_QUOTE_API_URL)
//     .then(response => response.json()) 
//     .then(data => data.content)
// }
async function renderRevQuote()
{
    const quote = "zyxwvutsrqponmlkjihgfedcba"
    quoteDisplayElement.innerText = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character 
        quoteDisplayElement.appendChild(characterSpan) 
    })
    quoteInputElement.value = null;
    startTimer()
}
async function renderNewQuote() 
{
    //const quote = await getRandomQuote() 
    const quote = "abcdefghijklmnopqrstuvwxyz"
    quoteDisplayElement.innerText = ''
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character 
        quoteDisplayElement.appendChild(characterSpan) 
    })
    quoteInputElement.value = null;
    startTimer()   
}

let startTime 
function startTimer() {
    timerElement.innerText = 0;
    startTime = new Date() 
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime(){
   return ((new Date() - startTime) / 1000).toFixed(4)
}

renderNewQuote()