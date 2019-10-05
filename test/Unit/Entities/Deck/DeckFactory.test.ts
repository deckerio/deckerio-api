import { expect } from "chai";
import DeckFactory from "../../../../src/Entities/Deck/DeckFactory";
import DeckInterface from "../../../../src/Entities/Deck/DeckInterface";
import SingleDeck from "../../../../src/Entities/Deck/SingleDeck";


describe("Test/Unit/Entities/Deck/DeckFactoryTest", (): void => 
{

    it("Should return SingleDeck instance", (): void => 
    {
        const deck: DeckInterface = DeckFactory("single");
        expect(deck).to.be.instanceOf(SingleDeck);
    });

    it("Should trigger expection if invalid deck type", (): void => 
    {
        expect(() => DeckFactory("xpto")).to.throw;
    });

});