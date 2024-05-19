import { HttpRequest } from "./HttpRequest";

export class HttpRequestBuilder{
    httpRequest: HttpRequest;

    constructor(){
        this.httpRequest = new HttpRequest();
    }
    setMethod(method: string): HttpRequestBuilder{
        this.httpRequest.method = method;
        return this;
    }
    setUrl(url: string): HttpRequestBuilder{
        this.httpRequest.url = url;
        return this;
    }
    addBody(key: string, value:any): HttpRequestBuilder{
        this.httpRequest.body[key] = value;
        return this;
    }
    addHeader(name: string, value:string): HttpRequestBuilder{
        this.httpRequest.headers[name] = value;
        return this;
    }
    build(): Request{
        return new Request(this.httpRequest.url,{
            method:this.httpRequest.method,
            headers: this.httpRequest.headers,
            body: JSON.stringify(this.httpRequest.body),
        })
    }

}