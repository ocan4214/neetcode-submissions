class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    

    insertionSort(pairs) {
        const sortedPairs = pairs?.length ? [[...pairs]] : [];
        //0. index sorted kabul edilecek.
        for(let i=1;i<pairs.length;i++){
            let unsortedKey = pairs[i]
            let j = i-1;
            while(j>=0 && pairs[j].key > unsortedKey.key ){
                pairs[j+1] = pairs[j]
                j--;
            }
            pairs[j+1]  = unsortedKey
            sortedPairs.push([...pairs]);
        }
        return sortedPairs
    }
}