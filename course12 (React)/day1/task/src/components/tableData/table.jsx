import './table.css'
function TableData({data , deleteData}) {
    const deleteElement = (e)=>{
        deleteData(e.target.id)
    }
    return ( 
        <>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>controls</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele)=>
                            <tr key={ele.id} >
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.age}</td>
                                <td><button id={ele.id} onClick={deleteElement}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default TableData;