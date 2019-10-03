

export default interface ApiErrorInterface extends Error
{

    getMessage(): {
        code: number,
        type: string
        message: string
    }
    
}