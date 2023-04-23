import {Component} from '@angular/core'
import {DaysOfWeekEnum, daysOfWeek} from 'app/core/constants/day.data'
import {REGRESSION_DATA} from 'app/core/constants/regression.data'
import * as regression from 'regression'

@Component({
    selector: 'linear-regression',
    templateUrl: './linear-regression.component.html',
    styleUrls: ['./linear-regression.component.scss'],
})
export class LinearRegressionComponent {
    readonly daysOfWeek = daysOfWeek

    readonly WEEK_DAYS = Object.values(DaysOfWeekEnum).reverse()

    REGRESSION_DATA = REGRESSION_DATA

    day = DaysOfWeekEnum.MONDAY

    numberToAdd = 0

    prediction: number = 0

    ngOnInit(): void {
        this.predict()
    }

    remove(index: number) {
        this.REGRESSION_DATA.splice(index, 1)
        this.predict()
    }

    add() {
        this.REGRESSION_DATA.unshift([daysOfWeek[this.day], this.numberToAdd])
        this.predict()
    }

    predict() {
        let results = regression.linear(this.REGRESSION_DATA as any)

        const prediction = results.predict(daysOfWeek[this.day])

        this.prediction = Number.isNaN(prediction[1]) ? 0 : prediction[1]
    }
}
