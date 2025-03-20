import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="text-green-300">MacroMate</h1>
      <h2>A Calorie & Macro Calculator with Meal Planner</h2>
      <div className="card">
        <button>
          <Link to="cal-calc">Get started!</Link>
        </button>
      </div>
    </>
  );
}

export default App;
