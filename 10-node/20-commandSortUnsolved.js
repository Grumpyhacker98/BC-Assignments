// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

// java sort
console.log(process.argv)
sortArr = process.argv.splice(2).sort()
console.log(sortArr)

// bubble sort
unSorted = process.argv.splice(2)
console.log(unSorted)
for(var i=0;i<unSorted.length;i++){
    for(var t=0;t<unSorted.length;t++){
        if(unSorted[t]>unSorted[t+1]){
            temp = unSorted[t+1]
            unSorted[t+1] = unSorted[t]
            unSorted[t] = temp
        }
    }
    console.log(unSorted)
}

