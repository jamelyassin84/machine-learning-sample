import {Component} from '@angular/core'
import {DaysOfWeekEnum, daysOfWeek} from 'app/core/constants/day.data'
import {DUMMY_DATA} from 'app/core/constants/dummy.data'
import * as SVM from 'ml-svm'

@Component({
    selector: 'svm',
    templateUrl: './svm.component.html',
    styleUrls: ['./svm.component.scss'],
})
export class SvmComponent {
    readonly daysOfWeek = daysOfWeek
    readonly WEEK_DAYS = Object.values(DaysOfWeekEnum).reverse()
    DUMMY_DATA: any[] = DUMMY_DATA
    day = DaysOfWeekEnum.MONDAY
    numberToAdd = 0
    prediction = 0

    ngOnInit(): void {
        this.predict()
    }

    ngOnChanges(changes: any): void {
        this.predict()
    }

    remove(index: number) {
        this.DUMMY_DATA.splice(index, 1)
        this.predict()
    }

    add() {
        this.DUMMY_DATA.unshift({
            day: daysOfWeek[this.day],
            value: this.numberToAdd,
        })
        this.predict()
    }

    predict() {
        const trainingData = this.DUMMY_DATA.map(({day}) =>
            this.WEEK_DAYS.indexOf(day),
        )

        const labels = this.DUMMY_DATA.map(({value}) => {
            const threshold = this.getDynamicallyAdjustedThreshold()
            return value >= threshold ? 1 : -1
        })

        const options = {C: 1, kernel: 'linear'}
        const svm = new SVM(options)
        svm.train(trainingData, labels)

        const prediction = svm.predict(daysOfWeek[this.day])

        const threshold = this.getDynamicallyAdjustedThreshold()

        this.prediction = Math.abs(
            (-1 * Math.round((threshold - prediction) * 10)) / 10.3,
        )
    }

    private getDynamicallyAdjustedThreshold() {
        const values = this.DUMMY_DATA.map(({value}) => value)
        const median = this.getMedian(values)
        const standardDeviation = this.getStandardDeviation(values)
        const threshold = median + standardDeviation
        return threshold
    }

    private getMedian(values: number[]) {
        const sortedValues = values.sort((a, b) => a - b)
        const mid = Math.floor(sortedValues.length / 2)
        return sortedValues.length % 2 === 0
            ? (sortedValues[mid - 1] + sortedValues[mid]) / 2
            : sortedValues[mid]
    }

    private getStandardDeviation(values: number[]) {
        const n = values.length
        const mean = values.reduce((sum, value) => sum + value, 0) / n
        const variance =
            values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / n
        return Math.sqrt(variance)
    }
}
