class Queuee {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }
    dequeue() {
        let remove = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return remove
    }
}
let out = new Queuee()
out.enqueue(100)
out.enqueue(200)
out.enqueue(300)
console.log(out)
// 
// console.log(out)