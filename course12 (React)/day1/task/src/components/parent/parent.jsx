import { useState } from "react";
import AddForm from "../addForm/addform";
import TableData from "../tableData/table";

function Root() {
    const [data , setState ] = useState([])
    // const [dat , setStat ] = useState([])

    const addData = (person)=>{
        console.log(person);
        setState([...data , {...person , id : data.length + 1}])
        // console.log(data);
    }
    const deleteData = (id)=>{
        console.log(id);
        setState(data.filter((ele)=> ele.id != id))
        // console.log(data);
    }
    
    return (
        
        <>
        <AddForm addData={addData}></AddForm>
        <TableData data={data} deleteData={deleteData}></TableData>
        </>
    );
}

export default Root;