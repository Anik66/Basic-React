
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  function handelClick(){
    alert('button clicked')
  }

const handelClick2 =()=>{
  alert('button clicked again')
}
const addToFive =(num) =>{
  alert(num+5);
}
  return (
    <>
      
      <h3> React core conecpts part2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click </button>
      <button onClick={()=>{alert("clicked third button")}}>Third Clicked</button>
      {/* Vajaila */}
      <button onClick={() =>addToFive(5)}>fouth Clicked</button>
    </>
  )
}

export default App
