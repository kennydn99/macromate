// import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-{#242424} text-white text-center">
      <h1 className="text-4xl font-bold text-green-300 mb-4">MacroMate</h1>
      <h2 className="text-lg mb-6">
        A Calorie & Macro Calculator with Meal Planner
      </h2>
      <div>
        <button className="px-6 py-2 bg-green-300 hover:bg-green-600 text-white font-semibold rounded-lg">
          <Link to="cal-calc">Get started!</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
