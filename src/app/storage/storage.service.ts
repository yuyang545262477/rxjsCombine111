import {Injectable} from '@angular/core';
import {StorageInterface} from './storage.interface';
import {Observable} from 'rxjs';
import {Storage} from '@ionic/storage';
import {fromPromise} from 'rxjs/internal-compatibility';

@Injectable({
    providedIn: 'root'
})
export class StorageService implements StorageInterface {

    constructor(private storage: Storage) {
    }

    clearToken(): Observable<void> {
        return fromPromise(this.storage.clear());
    }

    getToken(): Observable<string> {
        return fromPromise(this.storage.get('token'));
    }

    storageToken(): Observable<string> {
        return fromPromise(this.storage.set('token', '*(&(*&(*&(*&(*&(*&(*124331243&*T*&^&*^*&^*&^&*^'));
    }

}
