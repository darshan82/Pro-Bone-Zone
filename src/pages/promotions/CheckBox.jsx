import React from 'react';

function Checkbox({ eventId, eventSelected, setEventSelected, disabled }) {

  const handleCheckboxChange = () => {
    updateState()
  }

  const updateState = () => {
    const ifExists = eventSelected?.find((item) => item === eventId)
    if (ifExists) {
      const updatedList = eventSelected?.filter((item) => item !== ifExists)
      setEventSelected(updatedList)
    }
    else if (eventSelected?.length < 4) {
      setEventSelected([...eventSelected, eventId])

    }
    else {
      swal({
        title: "Add Event Alert ",
        text: "Please select less than four events to create this promotion",
        icon: 'warning',
        timer: 4000,
      })
    }
  };


  return (
    <label className="flex items-center space-x-2 ">
      <input
        disabled={disabled}
        type="checkbox"
        checked={eventSelected?.filter((item) => item === eventId).length > 0 ? true : false}
        onChange={handleCheckboxChange}
        className="form-checkbox text-indigo-600 h-6 w-6"
      />
    </label>
  );
}

export default Checkbox;