import { useState } from "react";
import { calculateMacros } from "../utils/calculateMacros";

function InputForm({ setMacroResults }) {
  // State to hold user inputs
  const [formData, setFormData] = useState({
    weight: "",
    height_ft: "",
    height_in: "",
    age: "",
    gender: "male",
    activityLevel: "Sedentary",
    goal: "Maintain",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert weight, height, and age to numbers
    const { weight, height_ft, height_in, age, gender, activityLevel, goal } =
      formData;
    const parsedData = {
      weight: parseFloat(weight),
      height_ft: parseInt(height_ft, 10),
      height_in: parseInt(height_in, 10),
      age: parseInt(age, 10),
      gender,
      activityLevel,
      goal,
    };

    // Ensure all required fields are filled
    if (
      !parsedData.weight ||
      !parsedData.height_ft ||
      !parsedData.height_in ||
      !parsedData.age
    ) {
      alert("Please fill in all fields!");
      return;
    }

    // Calculate macros
    const results = calculateMacros(
      parsedData.weight,
      parsedData.height_ft,
      parsedData.height_in,
      parsedData.age,
      parsedData.gender,
      parsedData.activityLevel,
      parsedData.goal
    );

    // Store results in state
    setMacroResults(results);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-{#242424} text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-bold mb-4 flex justify-center">
          Enter Your Information
        </h2>

        {/* User Input Form */}
        <form className="bg-gray-800 p-6 w-80" onSubmit={handleSubmit}>
          <label className="block mb-2">Weight (lbs):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />

          <label className="block mb-2">Height:</label>
          <div className="flex gap-2 mb-4">
            <input
              type="number"
              name="height_ft"
              placeholder="Feet"
              value={formData.height_ft}
              onChange={handleChange}
              className="w-1/2 p-2 rounded bg-gray-700 text-white"
            />
            <input
              type="number"
              name="height_in"
              placeholder="Inches"
              value={formData.height_in}
              onChange={handleChange}
              className="w-1/2 p-2 rounded bg-gray-700 text-white"
            />
          </div>

          <label className="block mb-2">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          />

          <label className="block mb-2">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label className="block mb-2">Activity Level:</label>
          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          >
            <option value="Sedentary">Sedentary</option>
            <option value="Lightly Active">Lightly Active</option>
            <option value="Moderately Active">Moderately Active</option>
            <option value="Very Active">Very Active</option>
          </select>

          <label className="block mb-2">Goal:</label>
          <select
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
          >
            <option value="Maintain">Maintain</option>
            <option value="Bulk">Bulk</option>
            <option value="Cut">Cut</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded"
          >
            Calculate
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
