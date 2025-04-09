import { fetchMealData, fetchMealDetails } from "../utils/api";
import { useState, useEffect } from "react";
import MacroChart from "./MacroChart";

const MealPlan = ({ results, numMeals = 3 }) => {
  const [mealData, setMealData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedMeals, setExpandedMeals] = useState({});
  const [mealNutrients, setMealNutrients] = useState({});

  useEffect(() => {
    const generateMealPlan = async () => {
      try {
        const fetchedData = await fetchMealData(results, numMeals);
        setMealData(fetchedData);
      } catch (err) {
        setError("Failed to fetch meal plan. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    generateMealPlan();
  }, [results, numMeals]);

  const handleMealClick = async (mealId) => {
    setExpandedMeals((prev) => ({
      ...prev,
      [mealId]: !prev[mealId], // Toggle expanded state
    }));

    // Fetch nutrients if not already fetched
    if (!mealNutrients[mealId]) {
      const nutrients = await fetchMealDetails(mealId);
      if (nutrients) {
        setMealNutrients((prev) => ({
          ...prev,
          [mealId]: nutrients,
        }));
      }
    }
  };

  const parseGrams = (str) => Number(str.replace("g", "").trim());

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-full max-w-lg">
      <h2 className="text-2xl font-bold text-green-400 mb-4">Meal Plan</h2>

      {loading && <p className="text-gray-400">Loading meal plan...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && mealData.meals?.length > 0 ? (
        <div>
          <p>Total Calories: {mealData.nutrients.calories} kcal</p>
          <p>Total Carbs: {mealData.nutrients.carbs}g</p>
          <p>Total Protein: {mealData.nutrients.protein}g</p>
          <p>Total Fats: {mealData.nutrients.fat}g</p>

          {mealData.meals.map((meal) => (
            <div
              key={meal.id}
              className="bg-gray-700 p-4 rounded-lg mb-3 cursor-pointer hover:bg-gray-600"
              onClick={() => handleMealClick(meal.id)}
            >
              <h3 className="text-green-400 font-bold">{meal.title}</h3>

              {/* Display nutrients if expanded */}
              {expandedMeals[meal.id] && mealNutrients[meal.id] && (
                <div className="flex flex-col items-center mt-3 p-3 bg-gray-600 rounded-lg">
                  <img src={meal.image}></img>
                  <h4 className="text-green-300 font-semibold">
                    Nutritional Info
                  </h4>
                  <p>Calories: {mealNutrients[meal.id].calories} kcal</p>

                  <MacroChart
                    results={{
                      protein: parseGrams(mealNutrients[meal.id].protein),
                      fat: parseGrams(mealNutrients[meal.id].fat),
                      carbs: parseGrams(mealNutrients[meal.id].carbs),
                    }}
                    size="small"
                  ></MacroChart>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-gray-400">No meals found.</p>
      )}
    </div>
  );
};

export default MealPlan;
