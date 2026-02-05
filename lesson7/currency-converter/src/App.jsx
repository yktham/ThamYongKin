import './App.css'

function App() {
  //function handleOnMouseEnter(){
  //  alert("you have hovered over this button")
  //}
  function handleOnChange(e) {
    alert('user has selected ${e.target.value}')
  }
    

  return (
    <>
      <h1>Currency Converter</h1>
      <select onChange={handleOnChange}>
        <option> SGD</option>
        <option> MYR</option>
      </select>
    </>
  )
}

export default App;
