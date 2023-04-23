import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'percentageDifference',
})
export class PercentageDifferencePipe implements PipeTransform {
    transform(nowValue: number, lastValue: number): number {
        const percentageDifference = ((nowValue - lastValue) / lastValue) * 100
        return percentageDifference
    }
}
