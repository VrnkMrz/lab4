import React, { useState } from 'react';
import TransportationTable from '../TransportationTable';
import { EvacuationLogic } from '../EvacuationLogic';

const transportationTypes = [
  {
    name: 'Автобус',
    image: '../img/bus.png',
    min: 2,
    max: 180,
    passengerCapacity: 50,
  },
  {
    name: 'Вантажівка',
    image: '../img/van.png',
    min: 3,
    max: 50,
    passengerCapacity: 10,
  },
  {
    name: 'Машина',
    image: '../img/car.png',
    min: 3,
    max: 120,
    passengerCapacity: 4,
  },
  {
    name: 'Гелікоптер',
    image: '../img/helicopter.png',
    min: 1,
    max: 20,
    passengerCapacity: 5,
  },
  {
    name: 'Човен',
    image: '../img/boat.png',
    min: 0,
    max: 2,
    passengerCapacity: 100,
  },
];

const EvacuationApp = () => {
  const [peopleCount, setPeopleCount] = useState('');
  const [results, setResults] = useState([]);

  const handlePeopleCountChange = (e) => {
    setPeopleCount(e.target.value);
  };

  const handleCalculateClick = () => {
    if (!peopleCount || peopleCount < 0) {
      alert('Please enter a valid number of people for evacuation.');
      return;
    }
    const requiredTransport = EvacuationLogic(parseInt(peopleCount), transportationTypes);
    setResults(requiredTransport);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label htmlFor="peopleCount" className="block text-sm font-medium text-gray-700 text-lg">
          Кількість людей для евакуації
        </label>
        <div className="mt-1 text-lg">
          <input
            type="number"
            id="peopleCount"
            value={peopleCount}
            onChange={handlePeopleCountChange}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-2xl"
            placeholder="Enter the number of people"
          />
        </div>
        <button
          onClick={handleCalculateClick}
          className="mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Розрахунок
        </button>
      </div>
      <div>
        {results.map((type, index) => (
          <div key={index} className="flex justify-between p-2 border-b">
            <span>{type.name}</span>
            <span>{`Необхідна кількість: ${type.required}`}</span>
            <span>{`Загальна вмістимість: ${type.totalCapacity}`}</span>
          </div>
        ))}
      </div>
        <TransportationTable transportationTypes={transportationTypes}/>
    </div>
  );
};

export default EvacuationApp;
