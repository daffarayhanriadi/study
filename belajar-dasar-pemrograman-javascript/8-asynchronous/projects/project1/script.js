// Frontend
// Fungsi pembantu untuk memetakan kode cuaca Open-Meteo ke teks sederhana
function interpretWeather(code) {
  switch (code) {
    case "clouds":
      return {desc: "Berawan", act: "Sangat pas untuk jalan-jalan sore di taman atau berburu jajanan kaki lima tanpa takut kepanasan!"};
    case "rain":
      return {desc: "Hujan", act: "Paling nikmat untuk rebahan sambil menonton film ditemani semangkuk mi instan kuah hangat."};
    case "clear":
      return {desc: "Cerah", act: "Waktu yang tepat untuk pergi berenang atau ngadem di kafe sambil minum es kopi susu!"};
      case "thunderstorm":
      return {desc: "Hujan Badai ", act: "Paling aman tetap berada di dalam rumah dan menghindari aktivitas di dekat jendela."};
    case "drizzle":
      return {desc: "Gerimis", act: "Cocok sekali untuk duduk santai di teras sambil minum secangkir teh hangat."};
    case "mist":
      return {desc: "Kabut", act: "Sangat syahdu untuk jalan-jalan pagi di daerah pegunungan sambil menikmati udara dingin."};
    default:
      return {desc: code, act: "Cuaca apa ini cik?"};
  }
}

function showLoadingSpinner(show) {
    const loader = document.getElementById('loading');
    if (show) {
        loader.classList.remove('hidden');
        document.getElementById('result-container').classList.add('hidden');
        document.getElementById('error-message').classList.add('hidden');
    } else {
        loader.classList.add('hidden');
    }
}

function displayErrorToUser(message) {
    const errorCard = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    errorText.textContent = `⚠️ Error: ${message}`;
    errorCard.classList.remove('hidden');
    document.getElementById('result-container').classList.add('hidden');
}

function updateUI(cityName, weatherData) {
    const resultContainer = document.getElementById('result-container');
    const weatherInfo = interpretWeather(weatherData.weather.main.toLowerCase());
    
    document.getElementById('result-city').textContent = cityName;
    document.getElementById('weather-temp').textContent = `${weatherData.temp}°C`;
    document.getElementById('weather-desc').textContent = weatherInfo.desc;
    document.getElementById('activity-text').textContent = weatherInfo.act;

    resultContainer.classList.remove('hidden');
}


// Backend
async function getCoordinates(cityName) {
  try {
    const appid = "99f6d5bc14e45f4374be71a71932f780";
    const endpoint = (`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${appid}`);
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Gagal mengambil data lokasi.");


    const [data] = await response.json();
    if (!data) throw new Error("Kota tidak ditemukan!");

    return {
      name: data.name,
      lat: data.lat,
      lon: data.lon,
    };
  } catch (error) {
    console.error("Error Geocoding:", error.message);
    throw error;
  }
}

async function getWeather(lat, lon) {
  try {
    const appid = "99f6d5bc14e45f4374be71a71932f780";
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${appid}`;
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Gagal mengambil data cuaca.");

    const data = await response.json();
    if (!data) throw new Error("Data tidak ditemukan!");

    return {
      weather: data.weather[0],
      temp: data.main.temp,
    };
  } catch (error) {
    console.error("Error Cuaca:", error.message);
    throw error;
  }
}

async function initPlanner(cityName) {
  showLoadingSpinner(true);

  try {
    const location = await getCoordinates(cityName);
    const weather = await getWeather(location.lat, location.lon);

    updateUI(location.name, weather);
  } catch (error) {
    displayErrorToUser(error.message);
  } finally {
    showLoadingSpinner(false);
  }
}

document.getElementById("search-btn").addEventListener("click", () => {
  const inputCity = document.getElementById("city-input").value;
  if (inputCity) {
    initPlanner(inputCity);
  }
});
