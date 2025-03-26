import MacroChart from "./MacroChart";
import { useState } from "react";
import MealPlan from "./MealPlan";

function ResultCard({ results, onRecalculate }) {
  const [showMealPlan, setShowMealPlan] = useState(false);

  return (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        Your Daily Macros
      </h2>

      <p>
        <strong>Calories:</strong> {results.tdee} kcal
      </p>

      <MacroChart results={results}></MacroChart>

      <div className="flex gap-4 justify-center items-center w-full mt-4">
        <button
          onClick={onRecalculate}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white p-2 rounded"
        >
          Recalculate
        </button>
        <button
          onClick={() => setShowMealPlan(true)}
          className="flex-1 bg-purple-500 hover:bg-purple-600 text-white p-2 rounded"
        >
          Create Meal Plan
        </button>
      </div>
      {showMealPlan && <MealPlan tdee={results.tdee}></MealPlan>}
    </div>
  );
}

export default ResultCard;
