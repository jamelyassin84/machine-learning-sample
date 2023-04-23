import {Component} from '@angular/core'
import {DaysOfWeekEnum, daysOfWeek} from 'app/core/constants/day.data'
import {DUMMY_DATA} from 'app/core/constants/dummy.data'
import {DecisionTreeRegression} from 'ml-cart'

@Component({
    selector: 'decision-trees',
    templateUrl: './decision-trees.component.html',
    styleUrls: ['./decision-trees.component.scss'],
})
export class DecisionTreesComponent {
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
        const targets: number[] = this.DUMMY_DATA.map((dummy) => dummy.value)

        const maxDepth = 3

        const decisionTree = new DecisionTreeRegression(maxDepth)

        decisionTree.train(this.DUMMY_DATA as any, targets)

        const day: any = [daysOfWeek[this.day], 2]

        const prediction = decisionTree.predict(day)

        this.prediction = Number.isNaN(prediction[1]) ? 0 : prediction[1]
    }
}
