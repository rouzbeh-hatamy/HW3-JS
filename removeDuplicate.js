function removeDuplicate(array){
let unique = new Set(array)
let backToArray = [...unique]
return backToArray    
}

removeDuplicate([1,1,4,5,3,5,3,9])