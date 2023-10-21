class LRUCache {
    store: Record<number, number> = {}
    cacheAge: Record<number, number> = {}
    counter = 0
    capacity = 0

    constructor(capacity: number) {
        this.store = {}
        this.cacheAge = {}
        this.counter = 0
        this.capacity = capacity
    }

    get(key: number): number {
        if (this.store[key] !== undefined) {
            this.counter++; 
            this.cacheAge[key] = this.counter
            return this.store[key]
        }
        return -1
    }

    put(key: number, value: number): void {
        this.counter++;
        if (this.store[key] !== undefined || Object.keys(this.store).length < this.capacity) {
            this.store[key] = value
            this.cacheAge[key] = this.counter;
            return;
        }

        const counters = Object.values(this.cacheAge)
        let min = Number.MAX_SAFE_INTEGER
        let removingKey;
        for (let k in this.cacheAge) {
            if (this.cacheAge[k] < min) {
                min = this.cacheAge[k]
                removingKey = k
            }
        }

        delete this.store[removingKey]
        delete this.cacheAge[removingKey]

        this.store[key] = value
        this.cacheAge[key] = this.counter
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */