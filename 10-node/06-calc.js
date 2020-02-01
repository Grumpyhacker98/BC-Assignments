if(process.argv[2]==="add"){
    console.log(parseFloat(process.argv[3]) + parseFloat(process.argv[4]))
}else if(process.argv[2]==="subtract"){
    console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]))
}else if(process.argv[2]==="multiply"){
    console.log(parseFloat(process.argv[3]) * parseFloat(process.argv[4]))
}else if(process.argv[2]==="divide"){
    console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]))
}else if(process.argv[2]==="remainder"){
    console.log(parseFloat(process.argv[3]) % parseFloat(process.argv[4]))
}else{
    console.log("error")
}