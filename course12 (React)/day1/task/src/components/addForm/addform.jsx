import { useState } from 'react';
import './addform.css'
function AddForm({addData}) {

    const [formObj , setState] = useState({name: '' , age : ''});
    const handleChange = (e)=>{
        
        setState({...formObj , [e.target.name] : e.target.value});
    };
    const sendFormData = (e)=>{
        e.preventDefault()
        // console.log(formObj);
        if(formObj.name ==='' || formObj.age === '')
            return
        addData(formObj)
        // reset form
        setState( {name : '', age : ''});
    }
    return ( 
            <>
                <form className="formcontainer" onSubmit={sendFormData}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formObj.name} placeholder="Enter your name" onChange={handleChange} />
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" name="age" value={formObj.age} placeholder="Enter your age"  onChange={handleChange} />
                    <input type="submit" value='add' />
                </form>
                
            </>
    );
}

export default AddForm;