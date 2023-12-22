import cources from "./data.js";
import Card from "./components/Card/Card.jsx";

function App() {
  return (
    <div>
        <div>
            {cources.map ((course) => {
                return (<Card key={course.id} data={course}/>)
            }) }
        </div>
    </div>
  )
}

export default App
