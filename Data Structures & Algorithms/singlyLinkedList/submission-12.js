class LinkedList {


    
    constructor() {
        this.size=-1;
        this.internalList=[];



    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(this.size<index)
            return -1;
        return this.internalList[index]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
       this.internalList.unshift(val)
       this.size++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
       this.internalList.push(val)
       this.size++
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(index > this.size)
            return false;
        for(let i=index;i<this.size;i++){
            this.internalList[i] = this.internalList[i+1]
        }    
        this.internalList.pop()
        this.size--;  
        return true  
    }

    /**
     * @return {number[]}
     */
    getValues() {
        return this.internalList;        
    }
}
