class DynamicArray {

    internalArray=[];
    capacity=0;
    size=0;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.internalArray[i]
    }


    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.internalArray[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if(this.size >= this.capacity){
            this.resize();
        }
        this.internalArray.push(n)
        this.size++;
    }

    /**
     * @returns {number}
     */
    popback() {
        this.size--;
        return this.internalArray.pop()

    }

    /**
     * @returns {void}
     */
    resize() {
        this.internalArray.concat(new Array(this.capacity));
        this.capacity *=2;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
        // return this.internalArray.reduce((accumulator,currentValue)=>{
        //     return currentValue ? accumulator+1 : accumulator
        // },0)
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
