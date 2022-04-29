const quotesList = [
    "Our family are an alternate stratification of poetry and mathematics.",
    "I am working very hard…like the Devil in fact (which perhaps I am). I think you will be pleased.",
    "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform…But it is likely to exert an indirect and reciprocal influence on science itself.",
    "That brain of mine is something more than merely mortal; as time will show.",
    "They say that “coming events cast their shadows before.” May they not sometimes cast their lights before?",
    "I have a peculiar way of learning and I think it must it must be a peculiar man to teach me successfully.",
    "I can only end by repeating what I have often said before, that I am very troublesome, & only wish I could do you any such service as you are doing me.",
];

const imageArray = [`assets/chemistry.png`, `assets/cocktails.png`, `assets/sfcannabis.png`];

    let quotes = document.querySelector('.quotes');
    let quote = document.createElement('q');
    let counter = 0;
    console.log() 
    function nextQuote() {
        counter++;
        if (counter === 8) {
            return quote.textContent = quotesList[3];
            
        }
        setTimeout('currentQuote()',30000)
    }

    function currentQuote() {
        quote.textContent = quotesList[counter];
        quotes.appendChild(quote);
        quotes.classList.add('padding-top-quote');
        setTimeout(nextQuote(),3000);
        console.dir(quote)
    }
 
    
    document.addEventListener('DOMContentLoaded', currentQuote);