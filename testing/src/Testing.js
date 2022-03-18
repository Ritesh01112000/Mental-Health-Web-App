
import React,{useState} from 'react';
import AddNewMedicine from './AddNewMedicine'



  const Testing =()=> {
    const [medicine, setMedicine] = useState([
        {text: 'azithrol ' , id:1}
    ]);

    const addMedicine = (text) =>{
        setMedicine([
            ...medicine,
            {text:'text',id:Math.random()}
        ])
    };

    return (
        <div>
            <ul>
                {medicine.map((med) =>{
                  return(
                      <li key={med.id}>{med.text}</li>
                  )

                })}
            </ul>
        <AddNewMedicine addMedicine={addMedicine}/>
        </div>
    )



}
export default Testing;