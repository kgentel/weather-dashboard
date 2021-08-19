var getWeather = function() {
    var apiKey = "2b5ba8ee077002a27250e918cf33dfea";
    var city = "Austin";
    var apiUrl = `api.openweathermap.org/data/2.5/weather?q=austin&appid=2b5ba8ee077002a27250e918cf33dfea`;

    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
          console.log(data);
        });
      });
  };
  
  var searchFormEl = document.querySelector("#search-form");
  var cityInputEl = document.querySelector("#city");

  var searchSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
  };

  searchFormEl.addEventListener("submit", searchSubmitHandler);





  getWeather();