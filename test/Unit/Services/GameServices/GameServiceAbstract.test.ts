import {expect} from "chai";
import GamePlayer from "../../../../src/Entities/GamePlayer";
import Player from "../../../../src/Entities/Player";
import GameServiceInterface from "../../../../src/Services/GameServices/GameServiceInterface";
import BlackJackGameService from "../../../../src/Services/GameServices/BlackJackGameService";
import SingleDeck from "../../../../src/Entities/Deck/SingleDeck";


describe("Test/Unit/Services/GameServices/GameServiceAbstractTest", (): void => 
{

    describe("#getCurrentPlayer", (): void => 
    {
        it("Should return current player", (): void => 
        {
            const player: GamePlayer = new GamePlayer(
                new Player("Fulano de tal")
            );

            const game: GameServiceInterface = new BlackJackGameService(
                [player],
                new SingleDeck()
            );

            const [, gotPlayer] = game.getCurrentPlayer();
            expect(player.getPlayer().getName()).to.be.equal(gotPlayer.getPlayer().getName());
        });

        it("Should return current player if one is already setted", (): void =>
        {
            const player: GamePlayer = new GamePlayer(
                new Player("Hi <3")
            );

            const game: GameServiceInterface = new BlackJackGameService(
                [player],
                new SingleDeck()
            );
            
            game.getCurrentPlayer();
            const [, gotPlayer] = game.getCurrentPlayer();
            expect(player.getPlayer().getName()).to.be.equal(gotPlayer.getPlayer().getName());
        });
    });

});