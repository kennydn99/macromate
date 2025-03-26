import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.spoonacular.com/mealplanner/generate";

export const fetchMealPlan = async (calories) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apiKey: API_KEY,
        timeFrame: "day",
        targetCalories: calories,
      },
    });
  } catch (error) {
    console.error("Error fetching meal plan: ", error);
  }
};
