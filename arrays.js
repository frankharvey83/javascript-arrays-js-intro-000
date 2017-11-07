//define variable


function addElementToBeginningOfArray(arr, elementtoadd) {
  var array = ['foo', 'bar'];
  ['addthiselementtobeginning', ...arr];
  //use spread operator to add
  addElementToBeginningOfArray();//return array with added element to begginning without changing array
}

function destructivelyAddElementToBeginningOfArray(arr, elementtoadd) {
  var arr = []
  //use .unshift (modifies original content)
  return //add element in a way that alters original array
  }

  function addElementToEndOfArray(arr, elementtoadd) {
    var arr = []
    [...arr, 'addthiselementtobeginning']//add element to the end without altering original
  }

  function destructivelyAddElementToEndOfArray(arr, elementtoadd) {
    var arr = []
    //add element to alter original .push
    return
  }

  function accessElementInArray(arr, index) {
    var arr = []
    return //element in that index - lookup index definition
  }

  function destructivelyRemoveElementFromBeginningOfArray(arr) { //array is the only argument
    var arr = []
    //remove first value destructively
    return //the array with first value removed. use shift
  }

  function removeElementFromBeginningOfArray(arr) {
    var arr = []
    //remove element from beginning of array non-destructive
      //instructions say return ENTIRE array ???
    return
  }

  function destructivelyRemoveElementFromEndofArray(arr) {
    var arr = []
    //remove last element destructively (pop)
    return //returns mutated Array - again says ENTIRE???
  }

  function removeElementFromEndOfArray(arr) {
    var arr = []
    return //array without the last element - meaning we will have to assign it - //use slice then assign 
  }
