import Card from "../Card";
import Deck from "./Deck";


export default class SingleDeck extends Deck
{

    public start(): Deck
    {
        const cardNumbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        cardNumbers.forEach(num =>
        {
            this.cards.push(new Card(Card.SIGN_SPADES, num));
            this.cards.push(new Card(Card.SIGN_HEARTS, num));
            this.cards.push(new Card(Card.SIGN_DIAMONDS, num));
            this.cards.push(new Card(Card.SIGN_CLUBS, num));
        });

        return this;
    }

}