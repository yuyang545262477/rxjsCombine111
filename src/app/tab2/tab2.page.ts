import {Component, OnDestroy, OnInit} from '@angular/core';
import {LogicService} from '../logic/logic.service';
import {takeWhile} from 'rxjs/operators';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit, OnDestroy {
    private isAlive: boolean = true;

    constructor(private logicService: LogicService) {
        this.logicService.testWithLastForm()
            .pipe(
                takeWhile(() => this.isAlive)
            ).subscribe(
            value => console.log(value),
            err => console.log(err)
        );
    }

    ngOnInit(): void {
        this.isAlive = true;
    }

    testWithLastFrom() {

    }


    testCombineLast() {
        this.logicService.testCombineLast()
            .pipe(
                takeWhile(() => this.isAlive)
            ).subscribe(
            value => console.log(value),
            err => console.log(err)
        );
    }


    ngOnDestroy(): void {
        this.isAlive = false;
    }

    testForkJoin() {
        this.logicService.testForkJoin()
            .pipe(
                takeWhile(() => this.isAlive)
            ).subscribe(
            value => console.log(value),
            err => console.log(err)
        );
    }
}
