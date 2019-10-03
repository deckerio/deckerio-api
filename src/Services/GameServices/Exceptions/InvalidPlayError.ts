import ApiErrorAbstract from "../../../Core/Exceptions/ApiErrorAbstract";


export default class InvalidPlayError extends ApiErrorAbstract
{
    
    protected code: number = 400;

    protected type: string = "INVALID PLAY"
    
}