export const EvacuationLogic = (people, transportationTypes) => {
    // Calculating the total max and min capacities
    const totalMaxCapacity = transportationTypes.reduce(
      (acc, type) => acc + type.passengerCapacity * type.max,
      0
    );
    const totalMinCapacity = transportationTypes.reduce(
      (acc, type) => acc + type.passengerCapacity * type.min,
      0
    );
  
    // Calculating the coefficient r
    const r = (totalMaxCapacity - totalMinCapacity) / (people - totalMinCapacity);
  
    // Calculating the number of each transportation type required
    return transportationTypes.map(type => {
      let requiredNumberOfUnits = Math.ceil((type.max + (r - 1) * type.min) / r);
      requiredNumberOfUnits = Math.min(requiredNumberOfUnits, type.max); // Ensure within max limit
      return {
        ...type,
        required: requiredNumberOfUnits,
        totalCapacity: requiredNumberOfUnits * type.passengerCapacity,
      };
    });
  };
  