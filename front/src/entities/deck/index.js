import { Card } from '../card'

const allSuits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const allValues = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

export class Deck {
  _cards

  constructor() {
    this._cards = allSuits.map((suit) => {
      return allValues.map((value) => {
        return new Card(suit, value)
      })
    }).flat()
  }
}
