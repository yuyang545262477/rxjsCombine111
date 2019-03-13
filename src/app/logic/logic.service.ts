import {Injectable} from '@angular/core';
import {LogicInterface} from './logic.interface';
import {forkJoin, of, timer} from 'rxjs';
import {StorageService} from '../storage/storage.service';
import {combineLatest, map, withLatestFrom} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LogicService implements LogicInterface {

    constructor(private storageService: StorageService) {
    }

    testCombineLast() {
        // return of('combineLast this is ')
        //     .pipe(
        //         combineLatest(this.storageService.getToken()),
        //         map(
        //             ([demo, token]: [string, string]) => {
        //                 console.log(token);
        //                 return demo;
        //             }
        //         )
        //     );
        // return combineLatest(
        //     of('combineLast this is'),
        //     this.storageService.getToken()
        // ).pipe(
        //
        // );
    }

    testWithLastForm() {
        return timer(1, 1000)
            .pipe(
                combineLatest(this.storageService.getToken()),
                map(
                    ([demo, token]: [number, string]) => {
                        console.log(token);
                        return demo;
                    }
                )
            );
    }

    testForkJoin() {
        return forkJoin(
            of('forkJoin this is'),
            this.storageService.getToken()
        ).pipe(
            map(
                ([demo, token]: [string, string]) => {
                    console.log(token);
                    return demo;
                }
            )
        );
    }


}
