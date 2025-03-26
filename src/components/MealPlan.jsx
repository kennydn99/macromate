import { fetchMealPlan } from "../utils/api";
import { useState } from "react";

const MealPlan = ({ tdee }) => {
  const [meals, setMeals] = useState([]);

  const generateMealPlan = async () => {
    const fetchedMeals = await fetchMealPlan(tdee);
    setMeals(fetchedMeals);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-full max-w-lg">
      <h2 className="text-2xl font-bold text-green-400 mb-4">Meal Plan</h2>

      {meals.length > 0 && (
        <div>
          {meals.map((meal) => (
            <div key={meal.id} className="bg-gray-700 p-4 rounded-lg mb-3">
              <h3 className="text-green-400 font-bold">{meal.title}</h3>
              <p>
                <a
                  href={meal.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  View Recipe
                </a>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MealPlan;
