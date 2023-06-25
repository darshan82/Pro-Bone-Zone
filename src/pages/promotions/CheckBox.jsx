import React, { useState } from 'react';

function Checkbox({date ,time , city}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="form-checkbox text-indigo-600 h-5 w-5"
      />
      <h1 className="text-gray-1000">{date} </h1>
      <span className="text-gray-700">{time}</span>
      <span className="text-gray-700">{city}</span>
    </label>
  );
}

export default Checkbox;