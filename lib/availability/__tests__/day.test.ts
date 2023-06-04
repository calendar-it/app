import { boolean } from "zod"
import Day from "../../day"
import type { DateTimeInterval } from "../../types"
import getAvailability from "../getAvailability"

describe("day.ts", () => {
  it("Creates a new Day when not given an options object", () => {
    const year = 2022
    const month = 3
    const day = 13 
    const someDay = new Day(year, month, day)
    const validated = Day.validateYearMonthDay(year, month, day)
    const isInstanceOf = someDay instanceof Day
    expect(validated).toBe(undefined)
    expect(isInstanceOf).toBe(true)
  })

  // it("new Day() can accept a timeZone", () => {
  //   const day = new Day(1, 2, 3)
  //   console.log(day)
  //   expect(false).toBe(true)
  // })

  // it("rejects invalid timeZones", () => {
  //   expect(false).toBe(true)
  // })

  // it("returns the day before when timeZone calls for that", () => {
  //   expect(false).toBe(true)
  // })
})
