import SingleDeck from "./SingleDeck";
import DeckInterface from "./DeckInterface";


export default (type: string): DeckInterface =>
{
    if (type === "single")
        return new SingleDeck();

    throw new Error("You should describe a valid deck type");
}