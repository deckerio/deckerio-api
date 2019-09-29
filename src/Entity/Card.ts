

export default class Card
{
    public static SIGN_SPADES = "SIGN:SPADES";
    public static SIGN_HEARTS = "SIGN:HEARTS";
    public static SIGN_DIAMONDS = "SIGN:DIAMONDS";
    public static SIGN_CLUBS = "SIGN:CLUBS";

    private sign: string;

    private number: number;

    public constructor(sign: string, number: number)
    {
        this.sign = sign;
        this.number = number;
    }

    public getNumber(): number 
    {
        return this.number;
    }
    
    getSign(): string 
    {
        return this.sign;
    }

    getCard(): string 
    {
        return `${this.number} ${this.sign}`;
    }

}