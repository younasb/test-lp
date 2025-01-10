import { Pharmacy } from "./pharmacy";
import { Drug } from "./drugs";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });

  it("should Herbal Tea benefit increases by 1 before expiration and 2 after expiration", () => {
    const herbalTea = new Drug("Herbal Tea", 10, 5);
    const pharmacy = new Pharmacy([herbalTea]);

    pharmacy.updateBenefitValue();
    expect(herbalTea.benefit).toBe(6);

    herbalTea.expiresIn = -1;
    pharmacy.updateBenefitValue();
    expect(herbalTea.benefit).toBe(8);

    herbalTea.benefit = 55;
    pharmacy.updateBenefitValue();
    expect(herbalTea.benefit).toBe(50); // max value should be 50
  });

  it("should Dafalgan benefit decreases by 2 and 4 when expired", () => {
    const dafalgan = new Drug("Dafalgan", 5, 10);
    const pharmacy = new Pharmacy([dafalgan]);

    pharmacy.updateBenefitValue();
    expect(dafalgan.benefit).toBe(8);

    dafalgan.expiresIn = -1;
    pharmacy.updateBenefitValue();
    expect(dafalgan.benefit).toBe(4);
  });

  it("should benefit range be between 0 and 50", () => {
    const drug = new Drug("Random drug", 10, 55);
    const pharmacy = new Pharmacy([drug]);

    pharmacy.updateBenefitValue();
    expect(drug.benefit).toBe(50); // Benefit should not exceed 50

    drug.benefit = -10;
    pharmacy.updateBenefitValue();
    expect(drug.benefit).toBe(0); // Benefit should not be less than 0
  });
});
