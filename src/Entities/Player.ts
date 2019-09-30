

export default class Player
{

    private name: string;

    public constructor(name: string)
    {
        this.name = name;
    }

    public getName(): string
    {
        return this.name;
    }

}