function flatArray(array){
    let merged = array.flat(Infinity);
    return merged
}
flatArray([[2,3],5,[[[2,9],4],4],1,0])


function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }

  flatten([[2,3],5,[[[2,9],4],4],1,0])