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

}