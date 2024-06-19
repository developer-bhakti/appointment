import React, { useState } from "react";
const AppoinmentList = ({
  appoinments,
  deletAppoinment,
  editAppoinment,
  clearAppoinment,
}) => {
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedName, setEditedName] = useState(null);
  const [editedDate, setEditedDate] = useState(null);
  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedName(appoinments[index].name);
    setEditedDate(appoinments[index].date);
  };

  const handleSaveEdit = (index) => {
    editAppoinment(index, editedName, editedDate);
    setEditedIndex(null);
    setEditedName(" ");
  };

  const handleCancelEdit = () => {
    setEditedIndex(null);
    setEditedName(" ");
  };

  return (
    <div className="container">
      <h1>Appoinment List</h1>
      <table id="list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {appoinments.map((appoinment,index) =>(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editedIndex === index ? (
                    <input type="text" value={editedName}onChange={(e) =>
                      setEditedName(e.target.value)
                    }
                    />
                  ) : (
                    appoinment.name
                  )}
                </td>

                <td>
                {editedIndex === index ? (
                    <input type="date" value={editedDate}onChange={(e) =>
                      setEditedDate(e.target.value)
                    }
                    />
                  ) : (
                    appoinment.date
                  )}
                </td>

                <td>
                {editedIndex === index ? (
                   <>
                   <button onClick={()=> handleSaveEdit(index)                
                   }
                   >
                    save
                   </button>
                   <button onClick={handleCancelEdit}>Cancel</button>
                   </>
                ) : (

                  <>
                     <button onClick={()=> handleEdit(index)}
                   >
                    Edit
                   </button>
                   <button onClick={()=>
                   deletAppoinment(index)
                   }
                   > 
                   Delete                   
                   </button>
                  </>
                )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <button onClick={clearAppoinment}>Clear All Appoinment</button>
    </div>
  );
};

export default AppoinmentList;
