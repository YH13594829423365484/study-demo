class myPromise {
    constructor(executor) {
        this.status = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallback = [] // then的回调
        this.onRejectedCallback = [] // catch的回调

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled'
                this.value = this.value
                // then的回调在这里触发
                this.onFulfilledCallback.forEach(callback => callback(value))
            }

        }

        const reject = (reason) => {
            if (this.status === 'pending') {
                this.status = 'rejected'
                this.reason = this.reason
                // catch的回调在这里触发
                this.onRejectedCallback.forEach(callback => callback(reason))
            }
        }

        executor.then()
    }

    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        const newPromise = new myPromise((resolve, reject) => {
            // 考虑onFulfilled,onRejected
            if (this.state === 'fulfilled') {// then前面的对象状态已经变更完成
                setTimeout(() => { //模拟异步，但是模拟不了微任务
                    try {
                        const result = onFulfilled(this.value)
                        resolve(result)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        const result = onRejected(this.reason)
                        resolve(result)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            if (this.state === 'pending') {
                this.onFulfilledCallback.push(value => {
                    setTimeout(() => {
                        try {
                            const result = onFulfilled(value)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })

            }
        })
        return newPromise
    }

    catch(onRejected) {
        this.then(null, onRejected)
    }
    // 
    static race(promises) {
        return new myPromise((resolve, reject) => {
            promises.forEach(promise => {
                promise.then(resolve, reject)
            })
        })
    }

    static all(promises) {
        return new myPromise((resolve, reject) => {
            let result = []
            promises.forEach(promise => {
                promise.then(value => {
                    result.push(value)
                    if (result.length === promises.length) {
                        resolve(result)
                    }
                }, reject)
            })
        })
    }

    static any(promises) {
        return new myPromise((resolve, reject) => {
            let count = 0
            let result = []
            promises.forEach((promise, i) => {
                promise.then(
                    (value) => {
                        resolve(value)
                    },
                    (reason) => {
                        count++
                        result[i] = reason
                        if (count === promises.length) {
                            reject(result)
                        }
                    }
                )
            })
        })
    }

    finally(callback){
        return this.then(
            () => {
                callback()
            },
            () => {
                callback()
            }
            )
    }

    static allSettled(promises) {
        return new myPromise((resolve, reject) => {
            let result = []
            
        })
        }
}