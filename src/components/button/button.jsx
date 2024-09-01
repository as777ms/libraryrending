const Button = () => {
    function openLogIn(){
        window.location="/login"
    }
  return (
    <>
    <button onClick={openLogIn} style={{backgroundColor: "transparent", border: "2px solid grey", width: "130px", height: "40px", color: "grey", borderRadius: "10px", cursor: "pointer"}}>LOG IN</button>
    </>
  )
}

export default Button