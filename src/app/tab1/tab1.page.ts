import {Component, OnDestroy, OnInit} from '@angular/core';
import {StorageService} from '../storage/storage.service';
import {takeWhile} from 'rxjs/operators';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy {
    private isAlive: boolean = true;

    constructor(private storageService: StorageService) {
    }

    ngOnDestroy(): void {
        this.isAlive = true;
    }

    ngOnInit(): void {
        this.isAlive = false;
    }


    StorageToken() {
        this.storageService.storageToken()
            .pipe(
                takeWhile(() => this.isAlive)
            ).subscribe(
            value => console.log(value),
            err => console.log(err)
        );
    }


    ClearToken() {
        this.storageService.clearToken()
            .pipe(
                takeWhile(() => this.isAlive)
            ).subscribe(
            value => console.log(value),
            err => console.log(err)
        );
    }
}
