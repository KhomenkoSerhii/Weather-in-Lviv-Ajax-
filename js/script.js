$(document).ready(function () {

    var weather = $('#weather');

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19',
        success: function (date) {
            // console.log(date);
            weather.prepend('<h1> Weather in: ' + date.name + '</h1>');
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