import {expect} from "chai";
import SingleDeck from "../../../../src/Entities/Deck/SingleDeck";
import BlackJackGameService from "../../../../src/Services/GameServices/BlackJackGameService";
import GameServiceInterface from "../../../../src/Services/GameServices/GameServiceInterface";
import GamePlayer from "../../../../src/Entities/GamePlayer";
import Player from "../../../../src/Entities/Player";


describe("Test/Unit/Services/GameServices/BlackJackGameServiceTest", (): void => 
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
    });

}); 