import GamePlayer from "../../Entities/GamePlayer";


export default interface GameServiceInterface
{

    play(play: string, player?: GamePlayer): void;

    getCurrentPlayer(): [number, GamePlayer];

    setCurrentPlayer(index: number, player: GamePlayer): void;

    isGameOver(): boolean;

}