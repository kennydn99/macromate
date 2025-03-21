import { useState } from "react";
import InputForm from "./InputForm";
import ResultCard from "./Result";

function CalorieCalculator() {
  const [macroResults, setMacroResults] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen text-white p-4">
      {macroResults ? (
        <ResultCard
          results={macroResults}
          onRecalculate={() => setMacroResults(null)}
        />
      ) : (
        <InputForm setMacroResults={setMacroResults} />
      )}
    </div>
  );
}

export default CalorieCalculator;
