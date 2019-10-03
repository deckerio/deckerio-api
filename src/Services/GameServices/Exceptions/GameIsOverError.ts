import ApiErrorAbstract from "../../../Core/Exceptions/ApiErrorAbstract";


export default class GameIsOverError extends ApiErrorAbstract
{

    protected code: number = 400;

    protected type: string = "GAME IS OVER";

}