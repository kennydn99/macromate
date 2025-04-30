import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MealPlan from "../components/MealPlanner";

test("renders form and button", () => {
  render(<MealPlan />);
  expect(screen.getByText(/Meal Plan/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Total Calories/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Create Meal PLan/i })
  ).toBeInTheDocument();
});
