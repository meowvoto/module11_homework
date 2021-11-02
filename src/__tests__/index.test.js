import { getPercents } from "../index.js"
// Успешное выполнение функции: функция возвращает число, равное заданному проценту от заданного числа
// Неуспешное выполнение функции: функция вычисляет неверное число
// 1 результат должен быть дробным числом, failed (0.6000000000000001), в функцию необходимо добавить округление результата
// 2 corner case, ok
// 3 corner case, ok
// 4 результат должен быть целым числом, ok
describe('test getPercents function', () => {
  it ('№1. 3% from 2 equal 0.06', () => {
    const result = getPercents(3, 20);
    expect(result).toBe(0.6)
  }),
  it ('№2. 0% from 20 equal 0', () => { 
    const result = getPercents(0, 20);
    expect(result).toBe(0)
  }),
  it ('№3 150% form 10 equal 15', () => {
    const result = getPercents(150, 10);
    expect(result).toBe(15)
  })
  it ('№4 20% from 80 equal 16', () => {
    const result = getPercents(20, 80);
    expect(result).toBe(16)
  })
});
