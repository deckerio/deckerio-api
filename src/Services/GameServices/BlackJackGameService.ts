import Card from "../../Entities/Card";
import DeckInterface from "./../../Entities/Deck/DeckInterface";
import GamePlayer from "./../../Entities/GamePlayer";
import InvalidPlayError from "./Exceptions/InvalidPlayError";
import GameServiceAbstract from "./GameServiceAbstract";


export default class BlackJackGameService extends GameServiceAbstract
{
    public possiblePlays: Array<string> = [
        "PLAY:DRAW_CARD",
        "PLAY:STOP"
    ];

    public doPlay(play: string, player?: GamePlayer)
    {
        if (play === "PLAY:DRAW_CARD")
        {
            const cards: Array<Card> = this.getDeck().draw();
            player.addCards(cards);

            if (this.hasPlayer21Points(player))
                this.play("PLAY:STOP");
        } else if (play == "PLAY:STOP")
            this.endGame();
        else
            throw new InvalidPlayError(`${play} is an invalid Play`);

        this.addHistory({
            play,
            "player": player ? player.getPlayer() : null,
            "created_at": new Date().toString()
        });
    }

    private hasPlayer21Points(player: GamePlayer): boolean
    {
        return this.getPlayerTotalPoints(player) > 21;
    }

    private getPlayerTotalPoints(player: GamePlayer): number
    {
        const cards: Array<Card> = player.getHand();
        return cards.reduce((prev: number, curr: Card) => 
        {
            let currentValue: number = curr.getNumber();
            if (currentValue > 10)
                currentValue = 10;

            return prev + currentValue;
        }, 0);
    }

}