function ResultCard({ results, onRecalculate }) {
  return (
    <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-80">
      <h2 className="text-2xl font-bold text-green-400 mb-4">
        Your Daily Macros
      </h2>

      <p>
        <strong>Calories:</strong> {results.tdee} kcal
      </p>
      <p>
        <strong>Protein:</strong> {results.protein}g
      </p>
      <p>
        <strong>Fats:</strong> {results.fat}g
      </p>
      <p>
        <strong>Carbs:</strong> {results.carbs}g
      </p>

      <button
        onClick={onRecalculate}
        className="w-full  bg-green-500 hover:bg-green-600 text-white p-2 rounded mt-4"
      >
        Recalculate
      </button>

      <button className="w-full bg-purple-500 hover:bg-purple-600 text-white p-2 rounded mt-2">
        Create Meal Plan
      </button>
    </div>
  );
}

export default ResultCard;
