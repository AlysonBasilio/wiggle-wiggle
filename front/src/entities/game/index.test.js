import { Game } from "."
import { Card } from "../card"

describe('#allCardsAreFromSameSuit', () => {
  it('checks if all cards are from the same suit', () => {
    const cardsFromSameSuit = ['Ace', 2, 3].map((value) => new Card('Hearts', value))
    const gameWithCardsFromSameSuit = new Game(cardsFromSameSuit)
    expect(gameWithCardsFromSameSuit.allCardsAreFromSameSuit()).toBeTruthy()

    const cardsFromDifferentSuit = ['Hearts', 'Diamonds'].map((suit) => {
      return ['Ace', 2, 3].map((value) => new Card(suit, value))
    }).flat()
    const gameWithCardsFromDifferentSuit = new Game(cardsFromDifferentSuit)
    expect(gameWithCardsFromDifferentSuit.allCardsAreFromSameSuit()).toBeFalsy()
  })
})
