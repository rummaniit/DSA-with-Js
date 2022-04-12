class Stack {
    constructor(storage) {
        this.storage = {}
        this.size = 0
    }
    push(element) {
        this.size++
        this.storage[this.size - 1] = element
    }
    pop() {
        let remove = this.storage[this.size - 1]
        delete this.storage[this.size - 1]
        this.size--
        return remove
    }
    peek() {
        return this.storage[this.size]
    }
}
let out = new Stack()
out.push(100)
out.push(200)
out.push(300)
out.push(300)

out.pop()
out.peek()
console.log(out)