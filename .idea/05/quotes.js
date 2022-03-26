const quotes = [
    {
        quote: "More people are ruined by victory, I imagine, than by defeat",
        author: "Eleanor Rosevelt"
    },
    {
        quote: "Tenderness is greater proof of love than the most passionate of vows",
        author: "Marlene Dietrich"
    },
    {
        quote: "The ornament of a house is the friends who frequent",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "A meowing cat catches no mice",
        author: "annony"
    },
    {
        quote: "A goal without a plan is just a wish",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Change your thought and you change your world",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The crisis of today is the joke of tommorow",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The world is a book and those who do not travel read only",
        author: "Saint Augustine"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    }

]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

