const Button = () => {
    function openLogIn(){
        window.location="/login"
    }
  return (
    <>
    <button onClick={openLogIn} style={{backgroundColor: "transparent", border: "2px solid rgb(92, 166, 255)", width: "130px", height: "40px", color: "rgb(92, 166, 255)", borderRadius: "10px", cursor: "pointer"}}>LOG IN</button>
    </>
  )
}

export default Button