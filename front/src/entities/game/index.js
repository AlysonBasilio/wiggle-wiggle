export class Game {
  _cards

  constructor(initialCards) {
    this._cards = initialCards
  }

  isValid() {
    return this.hasMinimumRequiredCardsQty() && this.allCardsAreFromSameSuit()
  }

  hasMinimumRequiredCardsQty() {
    return this._cards.length >= 3
  }

  allCardsAreFromSameSuit() {
    const suitSet = new Set()

    this._cards.forEach(card => {
      suitSet.add(card._suit)
    });

    return suitSet.size === 1
  }
}
