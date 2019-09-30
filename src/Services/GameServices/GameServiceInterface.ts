import GamePlayer from "../../Entities/GamePlayer";


export default interface GameServiceInterface
{

    possiblePlays: Array<string>;

    getCurrentPlayer(): [number, GamePlayer];

    setCurrentPlayer(index: number, player: GamePlayer): void;

}