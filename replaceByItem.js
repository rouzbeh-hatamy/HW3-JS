function replaceByItem(array,currentItem,newItem) {
    let current = array.indexOf(currentItem);
    array.splice(current, 1, newItem)
    return array
}
replaceByItem(["a", "b", "c", "d", "e", "f"], "e", "t")