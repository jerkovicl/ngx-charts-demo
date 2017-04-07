/**
 * This is the base http service, unsed in other services to call REST API methods
 */
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

export class BaseService {

  protected baseUrl = '';
  protected itemsName = '';
  protected itemName = '';
  public headers: Headers;
  public options: RequestOptions;

  constructor(public http: Http) {
    // creates header for post requests.
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  /**
   * Gets all entities from the API.
   * @return server response in JSON
   */
  public getAll(): Observable<Response> {
    // sends an authenticated request.
    return this.http.get(this.baseUrl, this.options)
      .map(this.extractData)
      .do(data => console.log(`typeOf=` + typeof (data) + ` get${this.itemsName}:` + JSON.stringify(data)))
      .catch(this.handleError);
  }

  /**
   * Calls Http.get(url, options?)
   * @param {id} id of the number you want to get
   * @return server response in JSON
   */
  public get(id: number): Observable<Response> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .map(this.extractData)
      .do(data => console.log(`get${this.itemName}: ` + JSON.stringify(data)))
      .catch(this.handleError);
  }

  /**
   * Sends the entity to the server
   * @param {model} model as an object
   * @return if the model doesn't have an ID it returns the create method
   * @return else the model does have and ID returns update method
   */
  public save(model: any): Observable<Response> {
    if (model.id === 0) {
      return this.create(model);
    }
    return this.update(model);
  }

  /**
   * Calls Http.delete(url, options?)
   * @param {id} id of the number you want to delete
   * @return server response in JSON
   */
  public delete(id: number): Observable<Response> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, this.options)
      .do(data => console.log(`delete${this.itemsName}: ` + JSON.stringify(data)))
      .catch(this.handleError);
  }
  /**
   * Calls Http.post(url, body, options?)
   * Stringifies the model before sending it to the server
   * The server does not have the [FromBody] tag so we need to stringify the input
   * @param {model} model as an object
   * @return server response in JSON
   */
  private create(model: any): Observable<Response> {
    model.id = undefined;
    const body: string = JSON.stringify(model);
    return this.http.post(this.baseUrl, body, this.options)
      .map(this.extractData)
      .do(data => console.log(`create${this.itemsName}: ` + JSON.stringify(data)))
      .catch(this.handleError);
  }

  /**
   *  Calls Http.post(url, body, options?)
   *  @param {model} model as an object
   *  @return server response in JSON
   */
  private update(model: any): Observable<Response> {
    const url = `${this.baseUrl}/${model.id}`;
    return this.http.put(url, model, this.options)
      .map(() => model)
      .do(data => console.log(`update${this.itemsName}: ` + JSON.stringify(data)))
      .catch(this.handleError);
  }

  /**
   * Parses data returned from the server
   * @param {response} as an object from server
   * @return server response as JSON
   */
  protected extractData(response: Response) {
    const body = response.json();
    return body || {};
  }

  /**
   * Handles errors that come from the server
   * Does a console.log(error);
   * @param {error}
   * @return Observable of the error or 'Server error';
   */
  protected handleError(error: Response): Observable<Response> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.log(error);
    return Observable.throw(error || 'Server error');
  }
}
