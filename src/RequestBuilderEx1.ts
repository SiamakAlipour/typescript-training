class RequestBuilderExOne {
  protected data: object | null = null;
  protected method: 'post' | 'get' | null = null;
  protected url: string | null = null;

  setMethod(method: 'post' | 'get'): RequestBuilderWithMethod {
    return new RequestBuilderWithMethod().setMethod(method).setData(this.data);
  }
  setData(data: object | null): this {
    this.data = data;
    return this;
  }
}
class RequestBuilderWithMethod extends RequestBuilderExOne {
  setMethod(method: 'post' | 'get' | null): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): RequestBuilderWithMethodAndUrl {
    return new RequestBuilderWithMethodAndUrl()
      .setMethod(this.method)
      .setUrl(url)
      .setData(this.data);
  }
}
class RequestBuilderWithMethodAndUrl extends RequestBuilderWithMethod {
  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send() {
    console.log({ method: this.method, data: this.data, url: this.url });
  }
}
new RequestBuilderExOne()
  .setData({ name: 'siamak' })
  .setMethod('post')
  .setUrl('https://test.com')
  .send();
