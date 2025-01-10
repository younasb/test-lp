export const DRUGS = {
  HERBAL_TEA: {
    name: "Herbal Tea",
    expireLogic: (drug) => {
      // Benefit increases the older it gets. Benefit increases twice as fast after the expiration date.
      drug.benefit += drug.expiresIn <= 0 ? 2 : 1;
    },
  },
  FERVEX: {
    name: "Fervex",
    expireLogic: (drug) => {
      //  Benefit increases by 2 when there are 10 days or less, by 3 when there are 5 days or less, and drops to 0 after expiration
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
  DAFLAGAN: {
    name: "Dafalgan",
    expireLogic: (drug) => {
      // Benefit degrade by 2, once the expiration date has passed it degrades by 4
      drug.benefit -= drug.expiresIn <= 0 ? 4 : 2;
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
      // Benefit degrade by 1, once the expiration date has passed it degrades by 2
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
