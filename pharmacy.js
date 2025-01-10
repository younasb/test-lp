import { DRUGS } from "./drugs.js";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateDrug(drug) {
    // Get the drug logic or fall back to DEFAULT
    const drugLogic =
      Object.values(DRUGS).find((d) => d.name === drug.name) || DRUGS.DEFAULT;

    // Apply the expiration logic
    drugLogic.expireLogic(drug);

    // Ensure benefit stays within bounds [0, 50]
    drug.benefit = Math.max(0, Math.min(50, drug.benefit));

    // Decrease expiresIn if it's not Magic Pill
    if (drug.name !== DRUGS.MAGIC_PILL.name) {
      drug.expiresIn--;
    }
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => this.updateDrug(drug));
    return this.drugs;
  }
}
