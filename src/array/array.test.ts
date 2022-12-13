import { sum } from './array.js'

describe('summing numbers', () => {
  describe('using array built-in', () => {
    test('sums natural numbers', () => {
      expect([0, 1, 2, 3, 4, 5].sum()).toBe(15)
    })

    test('sums integers', () => {
      expect([1, -2, 3, -4, 5].sum()).toBe(3)
    })

    test('handles empty list', () => {
      expect([].sum()).toBe(0)
    })
  })
  
  describe('using standalone function', () => {
    test('sums natural numbers', () => {
      expect(sum([0, 1, 2, 3, 4, 5])).toBe(15)
    })

    test('sums integers', () => {
      expect(sum([1, -2, 3, -4, 5])).toBe(3)
    })

    test('handles empty list', () => {
      expect(sum([])).toBe(0)
    })
  })
})

