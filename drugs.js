export const DRUGS = {
  HERBAL_TEA: {
    name: "Herbal Tea",
    expireLogic: (drug) => {
      drug.benefit += drug.expiresIn <= 0 ? 2 : 1;
    },
  },
  FERVEX: {
    name: "Fervex",
    expireLogic: (drug) => {
      if (drug.expiresIn <= 0) {
        drug.benefit = 0;
      } else if (drug.expiresIn <= 5) {
        drug.benefit += 3;
      } else if (drug.expiresIn <= 10) {
        drug.benefit += 2;
      } else {
        drug.benefit += 1;
      }
    },
  },
  MAGIC_PILL: {
    name: "Magic Pill",
    expireLogic: () => {
      // NO CHANGE
    },
  },
  DEFAULT: {
    name: "Default",
    expireLogic: (drug) => {
      drug.benefit -= drug.expiresIn <= 0 ? 2 : 1;
    },
  },
};

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
