import {expect} from "chai";
import Card from "../../../src/Entities/Card";


describe("Test/Unit/Entity/CardTest", () => 
{

    describe("#getSign", () => 
    {
        it("Should return card sign", (): void => 
        {
            const card:Card = new Card(Card.SIGN_SPADES, 12);
            expect(card.getSign()).to.be.equal(Card.SIGN_SPADES);
        });
    });

    describe("#getNumber", () => 
    {
        it("Should return card number", (): void => 
        {
            const card:Card = new Card(Card.SIGN_SPADES, 3);
            expect(card.getNumber()).to.be.equal(3);
        });
    });

    describe("#getCard", () => 
    {
        it("Should return card formatted", (): void => 
        {
            const card:Card = new Card(Card.SIGN_SPADES, 3);
            expect(card.getCard()).to.be.equal(`3 ${Card.SIGN_SPADES}`);
        });
    });

});