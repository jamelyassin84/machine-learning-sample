export const DUMMY_DATA = [...randomizeValues(5)]

// * 4 * 12 * 20

function randomizeValues(days: number): {day: number; value: number}[] {
    const daysOfWeekArray: any[] = []

    for (let i = 0; i < days; i++) {
        const randomDayOfWeek = Math.floor(Math.random() * 7)

        daysOfWeekArray.push({
            day: randomDayOfWeek,
            value: Math.floor(Math.random() * (1000 - 200000 + 1)) + 200000,
        })
    }

    return daysOfWeekArray
}
