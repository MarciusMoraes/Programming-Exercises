/* Quicksort usually has a running time of n x log(n), but is there an algorithm that can sort even faster? In general, this is not possible.
 Most sorting algorithms are comparison sorts, i.e. they sort a list just by comparing the elements to one another. 
 A comparison sort algorithm cannot beat n x log(n) (worst-case) running time, since  n x log(n)represents the minimum number of comparisons 
 needed to know where to place each element. */

 function countingSort(arr) {
    let frequencyArray = new Array(100).fill(0);
        for(let num of arr){
            frequencyArray[num]++
        }
    return frequencyArray;
    }