class HttpRequest {
    method: string;
    url: string;
    body: Record<string, any>;
    headers: HeadersInit;
  
    constructor() {
      this.body = {};
      this.headers = {};
    }
  }
  
  class HttpRequestBuilder {
    httpRequest: HttpRequest;
  
    constructor() {
      this.httpRequest = new HttpRequest();
    }
  
    setMethod(method: string): HttpRequestBuilder {
      this.httpRequest.method = method;
      return this;
    }
  
    setUrl(url: string): HttpRequestBuilder {
      this.httpRequest.url = url;
      return this;
    }
  
    addBody(key: string, value: any): HttpRequestBuilder {
      this.httpRequest.body[key] = value;
      return this;
    }
  
    addHeader(name: string, value: string): HttpRequestBuilder {
      this.httpRequest.headers[name] = value;
      return this;
    }
  
    build(): Request {
      return new Request(this.httpRequest.url, {
        method: this.httpRequest.method,
        headers: this.httpRequest.headers,
        body: JSON.stringify(this.httpRequest.body),
      });
    }
  }
  
  let fetchRequest = new HttpRequestBuilder()
    .setMethod('POST')
    .setUrl('https://myapi.com/resource')
    .addHeader('Content-Type', 'application/json')
    .addBody('weather', 'is nice today')
    .build();
  
  console.log(fetchRequest); // Outputs: a `Request` object which can be passed directly to `fetch()`
  
  // Then it can be used using FETCH api:
  fetch(fetchRequest)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error('Error:', err));