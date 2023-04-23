import {Component} from '@angular/core'
import {DaysOfWeekEnum, daysOfWeek} from 'app/core/constants/day.data'
import {DUMMY_DATA} from 'app/core/constants/dummy.data'

@Component({
    selector: 'random-forest',
    templateUrl: './random-forest.component.html',
    styleUrls: ['./random-forest.component.scss'],
})
export class RandomForestComponent {
    readonly daysOfWeek = daysOfWeek

    readonly WEEK_DAYS = Object.values(DaysOfWeekEnum).reverse()

    DUMMY_DATA = DUMMY_DATA

    day = DaysOfWeekEnum.MONDAY

    numberToAdd = 0

    prediction: number = 0

    ngOnInit(): void {
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
        const x = this.DUMMY_DATA.map(({day}) => day)
        const y = this.DUMMY_DATA.map(({value}) => value)

        const options = {
            seed: 3, // Set the seed for reproducibility
            maxFeatures: 1, // Only consider one feature at each split
            replacement: true, // Sample with replacement
            nEstimators: 10, // Use 10 decision trees in the random forest
        }

        // const randomForest = new RandomForestRegression(options)
        // randomForest.train([x], y)

        // // Predict the value for a new data point
        // const day = daysOfWeek[this.day]

        // const prediction = randomForest.predict([[day]])

        // this.prediction = Number.isNaN(prediction[1]) ? 0 : prediction[1]
    }
}
