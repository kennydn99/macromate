import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.spoonacular.com";

export const fetchMealData = async (results, numMeals) => {
  const meals = [];
  const usedMealIds = new Set();
  let totalCalories = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalCarbs = 0;

  try {
    for (let i = 0; i < numMeals; i++) {
      const response = await axios.get(`http://localhost:3000/api/meals`, {
        params: {
          apiKey: API_KEY,
          minCalories: (results.tdee / numMeals) * 0.8,
          maxCalories: (results.tdee / numMeals) * 1.2,
          minProtein: (results.protein / numMeals) * 0.8,
          maxProtein: (results.protein / numMeals) * 1.2,
          minCarbs: (results.carbs / numMeals) * 0.8,
          maxCarbs: (results.carbs / numMeals) * 1.2,
          minFat: (results.fat / numMeals) * 0.8,
          maxFat: (results.fat / numMeals) * 1.2,
          number: 10, // Fetch multiple options per meal
          random: true,
        },
      });

      if (response.data.length > 0) {
        const uniqueOptions = response.data.filter(
          (meal) => !usedMealIds.has(meal.id)
        );
        if (uniqueOptions.length === 0) continue;

        const randomMeal =
          uniqueOptions[Math.floor(Math.random() * uniqueOptions.length)];
        meals.push(randomMeal);
        usedMealIds.add(randomMeal.id);

        // Aggregate nutrient values
        totalCalories += randomMeal.calories;
        totalProtein += parseFloat(randomMeal.protein);
        totalFat += parseFloat(randomMeal.fat);
        totalCarbs += parseFloat(randomMeal.carbs);
      }
    }
    return {
      meals,
      nutrients: {
        calories: totalCalories,
        protein: totalProtein,
        fat: totalFat,
        carbs: totalCarbs,
      },
    };
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
