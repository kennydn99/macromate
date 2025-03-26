import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const fetchMealData = async (calories) => {
  try {
    const response = await axios.get(`${BASE_URL}/mealplanner/generate`, {
      params: {
        apiKey: API_KEY,
        timeFrame: "day",
        targetCalories: calories,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching meal Data: ", error);
    return { meals: [], nutrients: {} };
  }
};

export const fetchMealDetails = async (mealId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/recipes/${mealId}/nutritionWidget.json`,
      {
        params: { apiKey: API_KEY },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching meal details: ", error);
    return null;
  }
};
