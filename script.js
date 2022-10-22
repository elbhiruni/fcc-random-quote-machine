const colors = [
  "#64748b",
  "#6b7280",
  "#71717a",
  "#ef4444",
  "#f97316",
  "#f59e0b",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
];

$(function() {
  const quotesUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  const quotes = [];

  $.getJSON(quotesUrl, function (data) {
    data.quotes.forEach(quote => {
      quotes.push(quote);
    });
  }).done(function () {
    generateQuote(quotes);
  });

  $("#new-quote").click(function() {
    generateQuote(quotes);
  });
});

function generateQuote(quotes) {
  const quote = randomQuote(quotes);
  const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`;

  $("#text").fadeOut(300, function() {
    $("#text").text(quote.quote);
    $("#text").fadeIn(300);
  });
  $("#author").fadeOut(300, function() {
    $("#author").text(quote.author);
    $("#author").fadeIn(300);
  });

  $("#tweet-quote").attr("href", tweetUrl);
  randomColor();
}

function randomQuote(quotes) {
  const randomNum = Math.floor(Math.random() * 101);
  return quotes[randomNum];
}

function randomColor() {
  const color = Math.floor(Math.random() * (colors.length - 1));
  $("body").css("color", colors[color]);
  $("body").css("background-color", colors[color]);
  $("#tweet-quote").css("background-color", colors[color]);
  $("#new-quote").css("background-color", colors[color]);
}
