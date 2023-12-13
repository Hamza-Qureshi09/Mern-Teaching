import React, { useState } from "react";

const Weather = () => {
  const [cityName, setcityName] = useState("");
  const [refetch, setrefetch] = useState(false);
  const [weatherInfo, setweatherInfo] = useState({});

  //   fetching weather data
  const fetchWeatherData = async () => {
    try {
      const weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          cityName ? cityName : "pakistan"
        }&units=metric&appid=6b0ea8447b0ba9a51d7204827e4517bf`
      );
      if (weatherData.ok) {
        setweatherInfo(await weatherData.json());
        return;
      }
    } catch (error) {
      return window.alert(error.message);
    }
  };
  React.useEffect(() => {
    if (refetch === true) {
      fetchWeatherData();
      setrefetch(false);
    }
  }, [refetch]);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        className="h-14 w-64 pl-2 py-1 border border-zinc-300"
        placeholder="Enter country or city name"
        value={cityName}
        onChange={(e) => setcityName(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            setrefetch(true);
          }
        }}
      />
      {/* display weather data */}
      Name:{weatherInfo.name}
      Temp:{weatherInfo?.main?.temp}
    </div>
  );
};

export default Weather;
