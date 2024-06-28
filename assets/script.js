import {
    formatUnixTimestamp, kelvinToFahrenheit,
    getIconForWeatherId, getDayOfWeekFromTimestamp,
    getColorsForIcon, capitalizeFirstLetters
} from "./utility.js";

const API_KEY = "ODgzM2Y5NDI1MjI0NTI3NjIwMmZlYzg5MDUzMDNiODQ=";
const MAX_CACHE_AGE = 60 * 60 * 1000;
const badCityRequests = [];
const CITIES = {
    NEW_YORK: "new_york",
    ATLANTA: "atlanta",
    AUSTIN: "austin",
    CHICAGO: "chicago",
    DENVER: "denver",
    ORLANDO: "orlando",
    SAN_FRANCISCO: "san_francisco",
    SEATTLE: "seattle"
};

const cityCoordinates = {
    [CITIES.NEW_YORK]:      { latitude: 40.7128, longitude: -74.0060 },
    [CITIES.ATLANTA]:       { latitude: 33.7490, longitude: -84.3880 },
    [CITIES.AUSTIN]:        { latitude: 30.2672, longitude: -97.7431 },
    [CITIES.CHICAGO]:       { latitude: 41.8781, longitude: -87.6298 },
    [CITIES.DENVER]:        { latitude: 39.7392, longitude: -104.9903 },
    [CITIES.ORLANDO]:       { latitude: 28.5383, longitude: -81.3792 },
    [CITIES.SAN_FRANCISCO]: { latitude: 37.7749, longitude: -122.4194 },
    [CITIES.SEATTLE]:       { latitude: 47.6062, longitude: -122.3321 }
};