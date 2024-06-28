export function formatUnixTimestamp(unixTimestamp) {
    const date = new Date(unixTimestamp);

    // Define options that has the attriubtes of month/day/year
    const options = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric'
    };

    // Create a formatter
    const formatter = new Intl.DateTimeFormat('en-US', options);
    return formatter.format(date);
}

export function getDayOfWeekFromTimestamp(unixTimestamp) {

    // Create a Date object from the Unix timestamp (in milliseconds)
    const date = new Date(unixTimestamp);
    
    // Get the day of the week as a number (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayOfWeek = date.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return daysOfWeek[dayOfWeek];

}

export function kelvinToFahrenheit(k) {
    // celsius to farenheit conversion
    return Math.round((k - 273.15) * 9 / 5 + 32);
}

export function getIconForWeatherId(id) {

    // there is d/n character ending in the api data that distinguishes day/night
    // im getting rid of that

    id = id.substring(0, id.length - 1);

    // obtained from https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2
    const ICONS = {
        "01": '☀️',
        "02": '🌤️',
        "03": '☁️',
        "04": '⛅',
        "09": '🌦️',
        "10": '🌧️',
        "11": '🌩️',
        "13": '❄️',
        "50": '🌫️',
    };

    return ICONS['01'] || ICONS[id];
}

export function getColorsForIcon(icon) {

    // obtained from https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2

    //backgroundtransparency is set in order to create a visually appealing website that looks similar to the mock

    const backgroundTransparency = 0.25;

    const COLORS = {
        '☀️': {
            background: `rgba(255, 223, 0, ${backgroundTransparency})`,
            border: 'rgb(255, 223, 0)'
        },
        '🌤️': {
            background: `rgba(135, 206, 235, ${backgroundTransparency})`,
            border: 'rgb(135, 206, 235)'
        },
        '☁️': {
            background: `rgba(169, 169, 169, ${backgroundTransparency})`,
            border: 'rgb(169, 169, 169)'
        },
        '⛅': {
            background: `rgba(176, 196, 222, ${backgroundTransparency})`,
            border: 'rgb(176, 196, 222)'
        },
        '🌦️': {
            background: `rgba(173, 216, 230, ${backgroundTransparency})`,
            border: 'rgb(173, 216, 230)'
        },
        '🌧️': {
            background: `rgba(100, 149, 237, ${backgroundTransparency})`,
            border: 'rgb(100, 149, 237)'
        },
        '🌩️': {
            background: `rgba(128, 0, 128, ${backgroundTransparency})`,
            border: 'rgb(128, 0, 128)'
        },
        '❄️': {
            background: `rgba(175, 238, 238, ${backgroundTransparency})`,
            border: 'rgb(175, 238, 238)'
        },
        '🌫️': {
            background: `rgba(211, 211, 211, ${backgroundTransparency})`,
            border: 'rgb(211, 211, 211)'
        }
    };

    return COLORS[icon] || COLORS['☀️'];
}
