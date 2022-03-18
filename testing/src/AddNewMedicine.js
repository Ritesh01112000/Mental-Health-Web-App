import React , {useState} from 'react';


const AddNewMedicine =({addMedicine}) =>{
    const [medicine,setMedicine] = useState('');

const handleSubmit = (e) =>{
    e.preventDefault();
AddNewMedicine(medicine);
};
return(
    <form onSubmit={handleSubmit}>
           <label >medicine</label>
         <input type='text' value={medicine} id='medicine' onChange={(e)=> setMedicine(e.target.value)}></input>
        <input type='submit'/>
</form>
);


}
export default AddNewMedicine;

