// DecisionLogic.js

const DecisionLogic = ({ waterLevel, temperature, snow, rain }) => {
    const decisions = {
      '1': { waterLevel: 'Високий', rain: 'Сильний', conclusion: 'Евакуювати' },
      '2': { waterLevel: 'Високий',temperature: 'Висока', snow: 'Багато', rain: 'Помірний', conclusion: 'Евакуювати' },
      '3': { waterLevel: 'Високий', temperature: 'Середня', snow: 'Багато', rain: 'Помірний', conclusion: 'Посилити увагу' },
      '4': { waterLevel: 'Високий', temperature: 'Середня', snow: 'Багато', rain: 'Немає', conclusion: 'Не турбуватися' },
      '5': { waterLevel: 'Високий', temperature: 'Висока', snow: 'Мало', rain: 'Немає', conclusion: 'Не турбуватися' },
      '6': { waterLevel: 'Помірний', temperature: 'Висока', snow: 'Багато', rain: 'Сильний', conclusion: 'Посилити увагу' },
      '7': { waterLevel: 'Помірний', temperature: 'Середня', snow: 'Багато', rain: 'Сильний', conclusion: 'Не турбуватися' },
      '8': { waterLevel: 'Помірний', snow: 'Мало', rain: 'Сильний', conclusion: 'Не турбуватися' },
      '9': { waterLevel: 'Високий', rain: 'Помірний', conclusion: 'Не турбуватися' },
    };
  
    let decision = 'Не турбуватися';
  
    for (const key in decisions) {
      const { waterLevel: wL, temperature: temp, snow: s, rain: r } = decisions[key];
      if ((!waterLevel || waterLevel === wL || !wL) &&
          (!temperature || temperature === temp || !temp) &&
          (!snow || snow === s || !s) &&
          (!rain || rain === r || !r)) {
        decision = decisions[key].conclusion;
        break;
      }
    }
  
    return decision;
  };
  
  export default DecisionLogic;
  