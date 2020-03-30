function concatAndSort(array1,array2){
    let concat = array1.concat(array2);
    if(concat.includes(typeof(String)) && !concat.includes(typeof(Number))){
        return concat.sort();
    }else if(!concat.includes(typeof(String)) && concat.includes(typeof(Number))){
        return concat.sort(function(a, b){return a - b})
    }else{
        let final = concat.sort();
        return final.sort(function(a , b){return a - b})
    }
}
concatAndSort(["ali",2,90] , [5 , "reza" , 6])
