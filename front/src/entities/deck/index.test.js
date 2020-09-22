import { Deck } from "."

describe('#constructor', () => {
  it('loads a 52 cards deck', () => {
    const deck = new Deck()
    expect(deck._cards).toHaveLength(52)
  })
})
