import React from 'react';

const DecisionTable = ({ decisions }) => {
  // Перевірка, чи є висновок "Евакуювати" серед рішень
  const showWarning = decisions.some((decision) => decision.conclusion === 'Евакуювати');

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-8 mb-4 text-3xl font-bold">Висновок</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Рівень води</th>
            <th className="px-4 py-2">Температура</th>
            <th className="px-4 py-2">Сніг</th>
            <th className="px-4 py-2">Дощ</th>
            <th className="px-4 py-2">Висновок</th>
          </tr>
        </thead>
        <tbody>
          {decisions.map((decision, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{decision.waterLevel}</td>
              <td className="border px-4 py-2">{decision.temperature}</td>
              <td className="border px-4 py-2">{decision.snow}</td>
              <td className="border px-4 py-2">{decision.rain}</td>
              <td className={`border px-4 py-2 ${decision.conclusion === 'Евакуювати' ? 'bg-red-500 text-white' : (decision.conclusion === 'Посилити увагу' ? 'bg-orange-500' : (decision.conclusion === 'Не турбуватися' ? 'bg-green-500' : ''))}`}>
                {decision.conclusion}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showWarning && (
        <img src="../img/warning.png" alt="Warning" className="mt-4 w-32 h-32" />
      )}
    </div>
  );
};

export default DecisionTable;
