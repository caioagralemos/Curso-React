import fruits from "./foods";
import { choice, remove } from "./helpers";

var fruta = choice(fruits)

console.log(`I'd like one ${fruta}, please`)
console.log(`Here you go: ${fruta}`)
console.log('Delicious! May I have another?')
remove(fruits, fruta)
console.log(`I’m sorry, we’re all out. We have ${fruits.length} left.`)