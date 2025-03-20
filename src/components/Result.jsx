function ResultCard({ results }) {
  return (
    <div className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg text-white w-80">
      <h2 className="text-xl font-bold text-green-400 mb-4">
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
    </div>
  );
}

export default ResultCard;
