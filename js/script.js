$(document).ready(function () {

    var weather = $('#weather');
    var now = new Date();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    weather.prepend('Current date: ' + now.getDate() + ' ' + monthNames[now.getMonth()] + ' ' + now.getFullYear());

    function myTimer() {
        var d = new Date();
        document.getElementById("time").innerHTML = d.toLocaleTimeString();
    }
    setInterval(myTimer, 1000);

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
        success: function (date) {
            // console.log(date);
            weather.prepend('<h1> <u> Weather in: ' + date.name + '</u>' + '</h1>');
            weather.append(
                '<p> Temp: ' + date.main.temp + " °C " + '</p>' +
                '<p> Pressure: ' + date.main.pressure + " hPa" + '</p>' +
                '<p> Description: ' + date.weather[0].description + '</p>' +
                '<p> Humidity: ' + date.main.humidity + " %" + '</p>' +
                '<p> Speed: ' + date.wind.speed + " km/h" + '</p>' +
                '<p> Deg: ' + date.wind.deg + " °" + '</p>');
            var icon = "http://openweathermap.org/img/w/" + date.weather[0].icon + ".png";
            weather.prepend(
                '<img src= "' + icon + '">'
            );
        }
    });
});