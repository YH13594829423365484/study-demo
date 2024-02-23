function* generator() {
    console.log('Start');
    yield 1;
    console.log('Middle');
    yield 2;
    console.log('End');
    yield 3;
    return 4;
}

let item = generator();
console.log(item.next()); // 输出 Star { value: 1, done: false }
console.log(item.next()); // 输出 Middle  { value: 2, done: false }
console.log(item.next()); // 输出 End  { value: 3, done: true }
console.log(item.next()); // 输出 { value: 4, done: true }  
console.log(item.next()); // 输出 { value: undefined, done: true }