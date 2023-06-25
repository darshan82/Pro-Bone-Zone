import React, { useEffect, useState } from 'react';

function Checkbox({event , eventId , state , setState , key}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    updateState()
  } 
    const updateState = ()=>{
        if(!isChecked){
            setState({
                ...state,
                [event]:eventId
            })}
            else{
                setState({
                    ...state,
                    [event]:null
                })
        }
      };
        

      useEffect(()=>{
                if(state?.[event]){
                    setIsChecked(true)
                }  
      },[state])
  

  return (
    <label className="flex items-center space-x-2 ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="form-checkbox text-indigo-600 h-6 w-6"
      />
    </label>
  );
}

export default Checkbox;