function User(props) {
  console.log(props)
  return (
    <>
      <div style={{width:'70%', margin:"5px auto", padding:'10px',  backgroundColor:"dodgerblue", color:'white', fontSize:"17px", borderRadius:'8px', textAlign:"center"}}>
        <div>Id: {props.id}</div>
        <div>Name: {props.name}</div>
        <div>age: {props.age}</div>
      </div>
    </>
  );
}

export default User;
