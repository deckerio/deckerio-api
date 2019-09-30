import Card from "../Card";


export default interface DeckInterface
{

    start(): DeckInterface;

    sort(): DeckInterface;

    draw(amount?: number): Array<Card>;

    countCards(): number;

}