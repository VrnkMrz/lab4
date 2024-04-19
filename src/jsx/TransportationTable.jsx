import React from 'react';

const TransportationTable = ({ transportationTypes }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 p-4">
      {transportationTypes.map((type, index) => (
        <div key={index} className="shadow-md p-4 flex flex-col items-center justify-center rounded-lg">
          <h3 className="text-lg font-semibold">{type.name}</h3>
          <img src={type.image} alt={type.name} className="h-20 my-2" />
          <span>{`Вмісткість: ${type.passengerCapacity}`}</span>
          <span>{`Мін: ${type.min}`}</span>
          <span>{`Макс: ${type.max}`}</span>
        </div>
      ))}
    </div>
  );
};

export default TransportationTable;
