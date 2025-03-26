import { fetchMealData, fetchMealDetails } from "../utils/api";
import { useState, useEffect } from "react";

const MealPlan = ({ results }) => {
  const [mealData, setMealData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedMeals, setExpandedMeals] = useState({});
  const [mealNutrients, setMealNutrients] = useState({});

  useEffect(() => {
    const generateMealPlan = async () => {
      try {
        const fetchedData = await fetchMealData(results.tdee);
        setMealData(fetchedData);
      } catch (err) {
        setError("Failed to fetch meal plan. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    generateMealPlan();
  }, []);

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

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white w-full max-w-lg">
      <h2 className="text-2xl font-bold text-green-400 mb-4">Meal Plan</h2>

      {loading && <p className="text-gray-400">Loading meal plan...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && mealData.meals?.length > 0 ? (
        <div>
          <p>Total Calories: {mealData.nutrients.calories}</p>
          {mealData.meals.map((meal) => (
            <div
              key={meal.id}
              className="bg-gray-700 p-4 rounded-lg mb-3 cursor-pointer hover:bg-gray-600"
              onClick={() => handleMealClick(meal.id)}
            >
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

              {/* Display nutrients if expanded */}
              {expandedMeals[meal.id] && mealNutrients[meal.id] && (
                <div className="mt-3 p-3 bg-gray-600 rounded-lg">
                  <h4 className="text-green-300 font-semibold">
                    Nutritional Info
                  </h4>
                  <p>Calories: {mealNutrients[meal.id].calories} kcal</p>
                  <p>Protein: {mealNutrients[meal.id].protein}</p>
                  <p>Fat: {mealNutrients[meal.id].fat}</p>
                  <p>Carbs: {mealNutrients[meal.id].carbs}</p>
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
