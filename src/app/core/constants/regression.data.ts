import {DUMMY_DATA} from './dummy.data'

export const REGRESSION_DATA = [
    ...DUMMY_DATA.map((dummy) => [dummy.day, dummy.value]),
]
