import {Pipe, PipeTransform} from '@angular/core'
import {DaysOfWeekEnum} from '../constants/day.data'

@Pipe({name: 'day_of_week'})
export class DayOfWeekPipe implements PipeTransform {
    transform(value: number): DaysOfWeekEnum {
        switch (value) {
            case 0:
                return DaysOfWeekEnum.SUNDAY
            case 1:
                return DaysOfWeekEnum.MONDAY
            case 2:
                return DaysOfWeekEnum.TUESDAY
            case 3:
                return DaysOfWeekEnum.WEDNESDAY
            case 4:
                return DaysOfWeekEnum.THURSDAY
            case 5:
                return DaysOfWeekEnum.FRIDAY
            case 6:
                return DaysOfWeekEnum.SATURDAY
            default:
                return DaysOfWeekEnum.SUNDAY
        }
    }
}
