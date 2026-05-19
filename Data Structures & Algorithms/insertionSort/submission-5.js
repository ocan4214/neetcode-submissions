/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
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
