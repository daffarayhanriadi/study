import { it, describe, expect } from "bun:test";
import { add } from "./calculator.mjs";

describe("Calculator", () => {
  it("should add correctly", () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    expect(actualValue).toBe(expectedValue);
  });

  it("should throw an error if string passed on numA parameter", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = "1";
      const operandB = 1;

      // Action
      add(operandA, operandB);
    }

    // Assert
    expect(potentialErrorToBeThrew).toThrow(Error);
  });

  it("should throw an error if string passed on numB parameter", () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 1;
      const operandB = "1";

      // Action
      add(operandA, operandB);
    }

    // Assert
    expect(potentialErrorToBeThrew).toThrow(Error);
  });
});
