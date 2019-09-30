import Card from "../../Entities/Card";
import DeckInterface from "./../../Entities/Deck/DeckInterface";
import GamePlayer from "./../../Entities/GamePlayer";
import GameServiceInterface from "./GameServiceInterface";


export default class BlackJackGameService implements GameServiceInterface
{
    public possiblePlays: Array<string> = [
        "PLAY:DRAW_CARD",
        "PLAY:STOP"
    ];

    private players: Array<GamePlayer>;
    
    private deck: DeckInterface;

    private currentPlayer: [number, GamePlayer];

    private history: any = {
        play: []
    };

    private constructor(players: Array<GamePlayer>, deck: DeckInterface)
    {
        this.players = players;
        this.deck = deck;
    }

    public play(player: GamePlayer, play: string): void
    {
        if (play === "PLAY:DRAW_CARD")
        {
            const cards: Array<Card> = this.deck.draw();
            player.addCards(cards);
        }
    }

    public getCurrentPlayer(): [number, GamePlayer]
    {
        if (!this.currentPlayer)
            this.setCurrentPlayer(0, this.players[0]);

        return this.currentPlayer;
    }

    public setCurrentPlayer(index: number, player: GamePlayer): void
    {
        this.currentPlayer = [index, player];
    }

    public callNextPlayer(): GameServiceInterface
    {
        const [oldIndex] = this.getCurrentPlayer();

        const newIndex = typeof this.players[oldIndex + 1] !== "undefined" ? oldIndex + 1 : 0;
        const player = this.players[newIndex]; 

        this.setCurrentPlayer(newIndex, player);

        return this;
    }

}