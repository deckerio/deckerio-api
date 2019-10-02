import {expect} from "chai";
import SingleDeck from "../../../../src/Entities/Deck/SingleDeck";
import BlackJackGameService from "../../../../src/Services/GameServices/BlackJackGameService";
import GameServiceInterface from "../../../../src/Services/GameServices/GameServiceInterface";
import GamePlayer from "../../../../src/Entities/GamePlayer";
import Player from "../../../../src/Entities/Player";
import GameIsOverError from "../../../../src/Services/GameServices/Exceptions/GameIsOverError";


describe("Test/Unit/Services/GameServices/BlackJackGameServiceTest", (): void => 
{

    describe("#play", (): void => 
    {
        it("Should play until game is over", (): void => 
        {
            const player: GamePlayer = new GamePlayer(
                new Player("Hi <3")
            );

            const game: GameServiceInterface = new BlackJackGameService(
                [player],
                new SingleDeck()
            );
            
            while (!game.isGameOver())
                game.play("PLAY:DRAW_CARD", player);

            expect(game.isGameOver()).to.be.true;
        });

        it("Should do nothing if game is already over", (): void => 
        {
            const player: GamePlayer = new GamePlayer(
                new Player("Hi <3")
            );

            const game: GameServiceInterface = new BlackJackGameService(
                [player],
                new SingleDeck()
            );

            game.play("PLAY:STOP");
            expect(() => game.play("PLAY:DRAW_CARD", player))
                .to.throw(Error);
        });
    });

}); 