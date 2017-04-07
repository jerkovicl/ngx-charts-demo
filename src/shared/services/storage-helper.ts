import { SessionService } from './session.service';
export class StorageHelper<T extends SessionService> {
  constructor(private storage: T) {
  }

  public setExp(exp: number) {
    this.storage.setItem('exp', exp.toString());
  }

  /**
   * Gets token expiration.
   *
   * @return Token expiration in milliseconds
   */
  public getExp(): number {
    return parseInt(this.storage.getItem('exp'), 10) || undefined;
  }

  /**
   * Returns true if token is not expired
   * Token needs to exits and have expired date > new Date().valueof()
   * @param name {String} token name to get from storage
   */
  public tokenNotExpired(): boolean {
    let token: string = this.storage.getItem('id_token');
    return token !== undefined && (this.storage.getItem('exp') > new Date().valueOf());
  }
}
