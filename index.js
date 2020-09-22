const mainDiv = document.getElementById('mainDiv'),
    quoteBox = document.getElementById('quote-box'),
    text = document.getElementById('text'),
    author = document.getElementById('author'),
    twitter = document.querySelector('.fa-twitter-square-a'),
    tumblr = document.querySelector('.fa-tumblr-square-a'),
    newQuote = document.getElementById('new-quote'),
    colorChange = document.querySelectorAll('.colorChange'),
    bgChange = document.querySelectorAll('.bgChange'),
    colors = ['#fb6964', '#342224', '#2c3e50', '#27ae60', '#77b1a9', '#ab7bdb', '#c451b7', '#bf2c6e', '#bf2c3b', '#bd7f2a'];

    newQuote.addEventListener('click', function(){ 

        const random_color = colors[Math.floor(Math.random() * colors.length)];
        
        for(var i =0; i<colorChange.length; i++){
            colorChange[i].style.color = random_color;
        }
        for(var i =0; i<bgChange.length; i++){
            bgChange[i].style.background = random_color;
        }


        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then((json1) => {
            return json1.json();  
        })
        .then(quotes => {
            const quotesArray = quotes["quotes"]
            // console.log(random_quote["quote"]);
            const random_quote = quotesArray[Math.floor(Math.random() * quotesArray.length)];
            text.innerText = random_quote["quote"];
            author.innerText = '― ' + random_quote["author"];
            twitter.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=aeskay&text="${random_quote["quote"]}"%20―%20${random_quote["author"]}`);
            tumblr.setAttribute('href', `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,aeskay&caption=${random_quote["author"]}&content=${random_quote["quote"]}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`);

            localStorage.setItem("quoteStore", quotesArray);
            
        })
        .catch((error) => {
            alert('Quote was not able to load. Please reload page')
        });
    })
    
    
    
