/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * this is builder design pattern for Request handling
 */

class RequestBuilder {
  private data: object | null = null;

  private method: 'post' | 'get' | null = null;

  private url: string | null = null;

  setData(data: object): this {
    this.data = data;
    return this;
  }

  setMethod(method: 'post' | 'get'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  // send() {
  //   return this;
  // }
}
