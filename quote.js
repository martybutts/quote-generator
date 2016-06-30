/* var quotes = [
	{quote: “Be yourself; everyone else is already taken.”, author: "- Oscar Wilde"};
	{quote: “So many books, so little time.”, author: "- Frank Zappa"};
	{quote: “A room without books is like a body without a soul.”, author: "- Cicero"};
	{quote: "You only live once, but if you do it right, once is enough.”, author: "― Mae West"};
	{quote: “No one can make you feel inferior without your consent.” author: "― Eleanor Roosevelt"};
	{quote: “If you tell the truth, you don't have to remember anything.”, author: "- Mark Twain"};
	{quote: “A friend is someone who knows all about you and still loves you.”, author: "― Elbert Hubbard"};
	{quote: “Always forgive your enemies; nothing annoys them so much.”, author: "― Oscar Wilde"};
	{quote: “Without music, life would be a mistake.” , author: "― Friedrich Nietzsche,"};
	{quote: “Success is not final, failure is not fatal: it is the courage to continue that counts.”, author: "- Winston S. Churchill"};
]
*/

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://quotes.rest/quote.json", false);
xhr.send();

var quoteButton = document.getElementsByTagName('button');

function addListeners () {
	quoteButton.addEventListener('click', xhr);
}

// document.addEventListener('DOMContentLoaded', start)
