function deleteByIndex(array , index){
    if (index > -1 &&  !index>array.length) {
        array.splice(index, 1);
        return array;
      }else{
           console.log("wrong index !!");
          
      }
}
deleteByIndex([2,3,5] , 1)