import React, { useState } from 'react';

const FactorSelection = ({ onSelectFactors }) => {
    const [waterLevel, setWaterLevel] = useState('');
    const [temperature, setTemperature] = useState('');
    const [snow, setSnow] = useState('');
    const [rain, setRain] = useState('');
  
    const getImageWater = (parameter) => {
      switch (parameter) {
        case 'Високий':
            return "../img/flood.png"; 
        case 'Помірний':
          return '../img/water.png';
        default:
          return '../img/water.png';
      }
    };

    const getImageTemp = (parameter) => {
      switch (parameter) {
        case 'Висока':
          return '../img/temperature_hot.png'; 
        case 'Середня':
          return '../img/temperature_norm.png';
        default:
          return '../img/temperature_hot.png';
      }
    };  

    const getImageSnow = (parameter) => {
        switch (parameter) {
          case 'багато':
            return '../img/snow_strong.png'; 
          case 'мало':
            return '../img/snowing.png';
          default:
            return '../img/snow_strong.png';
        }
      };  

      const getImageRain = (parameter) => {
        switch (parameter) {
          case 'Сильний':
            return '../img/storm.png'; 
          case 'Помірний':
                return '../img/rain.png';
          case 'Немає':
            return '../img/sun.png';
          default:
            return '../img/sun.png';
        }
      };  

    const handleSubmit = (e) => {
      e.preventDefault();
      onSelectFactors({ waterLevel, temperature, snow, rain });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-200 rounded-lg shadow-md">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="waterLevel">
                Рівень води:
                <select
                  id="waterLevel"
                  className="block w-full mt-1 p-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
                  value={waterLevel}
                  onChange={(e) => setWaterLevel(e.target.value)}
                >
                  <option value="">Оберіть</option>
                  <option value="Високий">Високий</option>
                  <option value="Помірний">Помірний</option>
                </select>
                {waterLevel && <img src={getImageWater(waterLevel)} alt={waterLevel} className="mt-2 w-24 h-24" />}
              </label>
            </div>
            <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="temperature">
          Температура:
          <select
            id="temperature"
            className="block w-full mt-1 p-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          >
            <option value="">Оберіть</option>
            <option value="Висока">Висока</option>
            <option value="Середня">Середня</option>
          </select>
          {temperature && <img src={getImageTemp(temperature)} alt={temperature} className="mt-2 w-24 h-24" />}
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="snow">
          Сніг:
          <select
            id="snow"
            className="block w-full mt-1 p-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
            value={snow}
            onChange={(e) => setSnow(e.target.value)}
          >
            <option value="">Оберіть</option>
            <option value="багато">Багато</option>
            <option value="мало">Мало</option>
          </select>
          {snow && <img src={getImageSnow(snow)} alt={snow} className="mt-2 w-24 h-24" />}
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="rain">
          Дощ:
          <select
            id="rain"
            className="block w-full mt-1 p-2 border rounded-md bg-white focus:outline-none focus:border-blue-500"
            value={rain}
            onChange={(e) => setRain(e.target.value)}
          >
            <option value="">Оберіть</option>
            <option value="Сильний">Сильний</option>
            <option value="Помірний">Помірний</option>
            <option value="Немає">Немає</option>
          </select>
          {rain && <img src={getImageRain(rain)} alt={rain} className="mt-2 w-24 h-24" />}
        </label>
      </div>
          </div>
          <button
            type="submit"
            className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Дізнатись відповідь
        </button>
        </form>
      );
};

export default FactorSelection;
