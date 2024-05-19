export class HttpRequest{
    method: string;
    url: string;
    body: Record<string, any>;
    headers : HeadersInit;

    constructor(){
        this.body = {};
        this.headers = {};
    }
}