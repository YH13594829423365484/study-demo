let obj = {
    a: 1,
    b: {
        n: 2
    },
    c: [1, 2, 3, 4]
}

// const obj2=structuredClone(obj) 
// 无法兼容symbol 和function

function deepCLone(obj) {
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel();
        port1.postMessage(obj)
        port2.onmessage = (msg) => {
            resolve(msg.data)
        }
    })
}

deepCLone(obj).then((res) => {
    // console.log(res)
    obj2 = res
    console.log(obj2);
})
