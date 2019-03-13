import {Observable} from 'rxjs';

export interface StorageInterface {
    storageToken(token: string): Observable<string>

    getToken(): Observable<string>

    clearToken(): Observable<void>
}
