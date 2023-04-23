import {Component} from '@angular/core'
import {DaysOfWeekEnum, daysOfWeek} from 'app/core/constants/day.data'
import {DUMMY_DATA} from 'app/core/constants/dummy.data'
import {NeuralNetwork} from 'brain.js'

@Component({
    selector: 'neural-networks',
    templateUrl: './neural-networks.component.html',
    styleUrls: ['./neural-networks.component.scss'],
})
export class NeuralNetworksComponent {
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
        const config = {
            inputSize: this.DUMMY_DATA.length / 100000000,
            hiddenLayers: [2],
            outputSize: 1,
            learningRate: 0.9,
            activation: 'sigmoid',
        }

        const net = new NeuralNetwork(config)

        const highestValue = this.DUMMY_DATA.reduce((prev, current) => {
            return prev.value > current.value ? prev : current
        }).value

        const trainingData = this.DUMMY_DATA.map(({day, value}) => ({
            input: [day / 7],
            output: [value / highestValue],
        }))

        net.train(trainingData)

        const dayToPredict = daysOfWeek[this.day]
        const prediction = net.run([dayToPredict / 7])[0] * highestValue

        this.prediction = Number.isNaN(prediction) ? 0 : prediction
    }
}
