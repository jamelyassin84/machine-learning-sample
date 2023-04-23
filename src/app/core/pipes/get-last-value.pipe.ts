import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'getLastValue',
})
export class GetLastValuePipe implements PipeTransform {
    transform(data: number[][], dayOfWeek: number): number {
        const latestDataForDay = data.find(([day, value]) => day === dayOfWeek)

        return latestDataForDay![1] ?? 0
    }
}
