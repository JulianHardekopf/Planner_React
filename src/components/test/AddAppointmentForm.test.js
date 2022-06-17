import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";

test("testing the form", () => {
  render(<App />);
  const taskButton = screen.getByRole("button", { id: /task/i });
  // clicked the Task_Button
  fireEvent.click(taskButton);
  const getInputElement = screen.getByTestId("taskName");
  expect(getInputElement).toBeInTheDocument();
});

test("selectDay", () => {
  render(<App />);

  const taskButton = screen.getByRole("button", { id: /task/i });
  // clicked the Task_Button
  fireEvent.click(taskButton);
  const getSelectedDay = screen.getByTestId("taskSelectDay");
  fireEvent.change(getSelectedDay, { target: { value: "1" } });
  expect(getSelectedDay).toHaveValue("1");
});
