class LinkedList {


    
    constructor() {
        this.size=0;
        this.internalList=[];



    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(this.size<=index || this.size == 0)
            return -1;
        return this.internalList[index]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
       this.internalList = [val].concat(this.internalList) 
       this.size++
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
       this.internalList = this.internalList.concat([val]) 
       this.size++
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(index >= this.size || this.size == 0)
            return false;
        let initialArray =[];
        for(let i=0;i<this.size;i++){
            if(i != index)
            initialArray.push(this.internalList[i])
        }    
        this.internalList = initialArray;
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
