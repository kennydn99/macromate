import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "./Result";

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const macroResults = location.state?.macroResults;

  useEffect(() => {
    if (!macroResults) {
      navigate("/cal-calc");
    }
  }, [macroResults, navigate]);

  if (!macroResults) return null;

  return (
    <div className="flex items-center justify-center min-h-screen p-4 text-white">
      <ResultCard
        results={macroResults}
        onRecalculate={() => navigate("/cal-calc")}
      />
    </div>
  );
}
