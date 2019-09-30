import Card from "./Card";
import Player from "./Player";


export default class GamePlayer
{

    private player: Player;

    private hand: Array<Card> = [];

    public constructor(player: Player)
    {
        this.player = player;
    }

    public addCards(cards: Array<Card>)
    {
        this.hand = [
            ...this.hand,
            ...cards
        ];
    }

    public removeCards(cards: Array<string>)
    {
        this.hand = this.hand.filter(card => {
            const cardIndex: number = cards.indexOf(card.getSign());
            if (cardIndex < 0) 
                return true;

            cards.splice(cardIndex, 1);
            return false;
        });
    }

}