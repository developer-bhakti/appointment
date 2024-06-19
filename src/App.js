import React, { useState } from "react";
import "./App.css";
import AppointmentList from "./Components/AppoinmentList";
import AppointmentForm from "./Components/AppoinmentForm";
const App = () => {
  const [appoinments, setAppoinments] = useState([]);

  const addAppoinment = (appointment) => {
    setAppoinments([...appoinments, appointment]);
  };

  const deletAppoinment = (index) => {
    const newAppoinments = [...appoinments];
    newAppoinments.splice(index, 1);
    setAppoinments(newAppoinments);
  };

  const editAppoinment = (index, name, date) => {
    const newAppoinments = [...appoinments];
    newAppoinments[index] = { name, date };
    setAppoinments(newAppoinments);
  };

  const clearAppoinment = () => {
    setAppoinments([]);
  };

  return (
    <div>
      <h1>Appointment Management System</h1>
      <AppointmentForm addAppoinment={addAppoinment} />

      <AppointmentList
                appoinments={appoinments}
                deletAppoinment={deletAppoinment}
                clearAppoinment={clearAppoinment}
                editAppoinment={editAppoinment}
            />
    </div>
  );
};

export default App;
