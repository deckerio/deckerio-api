import {expect} from "chai";
import DeckInterface from "../../../../src/Entity/Deck/DeckInterface";
import SingleDeck from "../../../../src/Entity/Deck/SingleDeck";
import Card from "../../../../src/Entity/Card";


describe("Test/Unit/Deck/SingleDeckTest", (): void => 
{
    describe("#countCards", (): void => 
    {
        it("Should start deck", (): void => 
        {
            const deck: DeckInterface = new SingleDeck();
            deck.start();

            expect(deck.countCards()).to.be.equal(52);
        });
    });

    describe("#draw", (): void => 
    {
        it("Should draw the top card", (): void => 
        {
            const deck: DeckInterface = new SingleDeck();
            deck.start();

            const cards: Array<Card> = deck.draw();
            
            expect(cards).to.have.lengthOf(1);
            expect(cards[0].getNumber()).to.be.equal(1);
            expect(deck.countCards()).to.be.equal(51);
        });

        it("Should draw two top cards", (): void => 
        {
            const deck: DeckInterface = new SingleDeck();
            deck.start();

            const cards: Array<Card> = deck.draw(2);
            
            expect(cards).to.have.lengthOf(2);
            expect(deck.countCards()).to.be.equal(50);
        });
    });

    describe("#sort", (): void => 
    {
        it("Should randomize deck", (): void => 
        {
            const deck: DeckInterface = new SingleDeck();
            const cards: Array<Card> = deck.start()
                .sort()
                .draw();

            expect(cards[0].getCard()).to.be.not.equal(`1 ${Card.SIGN_SPADES}`);
        });
    });
});