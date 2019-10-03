import ApiErrorInterface from "./ApiErrorInterface";


export default abstract class ApiErrorAbstract extends Error implements ApiErrorInterface
{

    protected code: number = 500;

    protected type: string = "UNEXPECTED EXCEPTION";

    public constructor(message?: string)
    {
        super(message);
        Error.captureStackTrace(ApiErrorAbstract);
    }

    public getMessage()
    {
        return {
            "code": this.code,
            "type": this.type,
            "message": this.message
        };
    }

}