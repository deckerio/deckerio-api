import GameServiceInterface from "./GameServiceInterface";
import GamePlayer from "../../Entities/GamePlayer";
import DeckInterface from "../../Entities/Deck/DeckInterface";
import GameIsOverError from "./Exceptions/GameIsOverError";


export default abstract class GameServiceAbstract implements GameServiceInterface
{

    protected possiblePlays: Array<string> = [];

    private players: Array<GamePlayer>;
    
    private deck: DeckInterface;

    private currentPlayer: [number, GamePlayer];

    private resumed: boolean = true;

    private history: any = {
        play: []
    };

    abstract doPlay(play: string, player?: GamePlayer): void;

    public constructor(players: Array<GamePlayer>, deck: DeckInterface)
    {
        this.players = players;
        this.deck = deck.start().sort();
    }

    public play(play: string, player?: GamePlayer): void
    {
        if (this.isGameOver())
            throw new GameIsOverError("Can't do any play anymore");

        this.doPlay(play, player);
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

    public isGameOver(): boolean
    {
        return !this.resumed;
    }

    public getHistory()
    {
        return this.history;
    }

    protected endGame(): void
    {
        this.resumed = false;
    }

    protected getDeck()
    {
        return this.deck;
    }

    protected addHistory(history): void
    {
        this.history.play.push(history);
    }

}