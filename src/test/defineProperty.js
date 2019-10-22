const testObj = Object.defineProperty({}, 'testObj', {
  value: 1, // 属性值
  writable: false, // 值可写 
  enumerable: false, // 可枚举 
  configurable: false // 可配置： false时 value、writable、enumerable和configurable都不能被修改
})

Object.defineProperty(testObj, 'testObj', { writable: true }) // TypeError: Cannot redefine property: testObj
Object.defineProperty(testObj, 'testObj', { enumerable: true }) // TypeError: Cannot redefine property: testObj
Object.defineProperty(testObj, 'testObj', { configurable: true }) // TypeError: Cannot redefine property: testObj
Object.defineProperty(testObj, 'testObj', { value: 1 }) // value，只要writable和configurable有一个为true，就允许改动

/**
 * writable为false时，直接目标属性赋值，不报错，但不会成功
 */
const obj = Object.defineProperty({}, 'p', {
  value: 1,
  writable: false,
  configurable: false
})

obj.p = 2
obj.p // 1

/**
 * 可配置性决定了目标属性是否可以被删除（delete）
 */
const obj = Object.defineProperties({}, {
  p1: { value: 1, configurable: true },
  p2: { value: 2, configurable: false }
});

delete obj.p1 // true
delete obj.p2 // false

obj.p1 // undefined
obj.p2 // 2
