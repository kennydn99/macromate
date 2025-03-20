export function calculateMacros(
  weight,
  height_ft,
  height_in,
  age,
  gender,
  activityLevel,
  goal
) {
  let genderFactor = gender == "male" ? 5 : -161;

  // convert units
  let weight_kg = weight * 0.453592;
  let height_cm = 2.54 * (12 * height_ft + height_in);

  // compute bmr
  let bmr = 10 * weight_kg + 6.25 * height_cm - 5 * age + genderFactor;

  let tdee;
  switch (activityLevel) {
    case "Sedentary":
      tdee = bmr * 1.2;
      break;
    case "Lightly Active":
      tdee = bmr * 1.375;
      break;
    case "Moderately Active":
      tdee = bmr * 1.55;
      break;
    case "Very Active":
      tdee = bmr * 1.725;
      break;
    default:
      throw new Error("No activity level selected");
  }

  // Adjust tdee based on goal
  if (goal == "Bulk") {
    tdee += 500;
  } else if (goal == "Cut") {
    tdee -= 500;
  }

  // Calculate Macros
  let protein = weight * 1;
  let fat = (0.25 * tdee) / 9;
  let carbs = (tdee - (protein * 4 + fat * 9)) / 4;

  return {
    tdee: Math.round(tdee),
    protein: Math.round(protein),
    fat: Math.round(fat),
    carbs: Math.round(carbs),
  };
}
