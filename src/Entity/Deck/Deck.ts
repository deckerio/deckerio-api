import DeckInterface from "./DeckInterface";
import Card from "../Card";


export default abstract class Deck implements DeckInterface
{

    protected cards: Array<Card> = [];

    abstract start(): DeckInterface;

    public sort(): DeckInterface
    {
        for (let i = this.cards.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * i);
            const temp = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = temp;
        }
        return this;
    }

    public countCards()
    {
        return this.cards.length;
    }

    public draw(amount: number = 1): Array<Card>
    {
        return this.cards.splice(0, amount);
    }

}