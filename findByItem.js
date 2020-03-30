function findByItem(array , item){
    let index = array.indexOf(item)
    return "item : " + item + "  index : " + index
}
findByItem([5,6,8,4] , 8)