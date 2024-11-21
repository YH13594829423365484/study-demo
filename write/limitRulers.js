class limitRulers {
    constructor(max) {
        this.maxRulers = max;
        this.runningNumber = 0;
        this.running = [];
        this.waitingQueue = [];
    }

    addTask(task) {
        if (this.runningNumber < this.maxRulers) {
            this.runningNumber++;
            this.runningTask(task);
        } else {
            this.waitingQueue.push(task);
        }
    }

    runningTask(task) {
        this.running.push(task);
        task().then(() => {
            this.runningNumber--;
            this.running = this.running.filter(t => t!== task);
            if (this.waitingQueue.length > 0) {
                const nextTask = this.waitingQueue.shift();
                this.addTask(nextTask);
            }
        });
    }

    getRunningTasks() {
        return this.running;
    }
}