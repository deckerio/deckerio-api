import {expect} from "chai";
import GamePlayer from "../../../src/Entities/GamePlayer";
import Player from "../../../src/Entities/Player";
import Card from "../../../src/Entities/Card";
import DeckInterface from "../../../src/Entities/Deck/DeckInterface";
import SingleDeck from "../../../src/Entities/Deck/SingleDeck";


describe("Test/Unit/Entities/GamePlayerTest", (): void => 
{

    describe("#getPlayer", (): void => 
    {
        it("Should get a player instance", (): void => 
        {
            const gamePlayer: GamePlayer = new GamePlayer(
                new Player("Fulano de tal")
            );

            expect(gamePlayer.getPlayer()).to.be.instanceOf(Player);
        });
    });

    describe("#getHand", (): void => 
    {
        it("Should get player's hand", (): void => 
        {
            const gamePlayer: GamePlayer = new GamePlayer(
                new Player("Fulano de tal")
            );

            const hand: Array<Card> = gamePlayer.getHand();
            expect(hand).to.be.lengthOf(0);
        });
    });

    describe("#addCard", (): void => 
    {
        it("Should add a card to player's hand", (): void => 
        {
            const deck: DeckInterface = new SingleDeck();
            deck.start();
            
            const gamePlayer: GamePlayer = new GamePlayer(
                new Player("Fulano de tal")
            );
            gamePlayer.addCards(deck.draw());

            const hand: Array<Card> = gamePlayer.getHand();
            expect(hand).to.be.lengthOf(1);
        });
    });

    describe("#removeCard", (): void => 
    {
        it("Should remove cards from players hand", (): void => 
        {
            const deck: DeckInterface = new SingleDeck();
            deck.start();
            
            const gamePlayer: GamePlayer = new GamePlayer(
                new Player("Fulano de tal")
            );
            const cards: Array<Card> = deck.draw(3);
            gamePlayer.addCards(cards);
            
            gamePlayer.removeCards([
                cards[0].getSign()
            ]);
            expect(gamePlayer.getHand()).to.be.lengthOf(2);
        });
    });

});