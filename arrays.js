//define variable
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  ["element", ...chocolateBars];
  //use spread operator to add
  //return array with added element to begginning without changing array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var arr = []
  //use .unshift (modifies original content)
  return //add element in a way that alters original array
  }

  function addElementToEndOfArray(array, element) {
    var arr = []
    [...arr, 'addthiselementtobeginning']//add element to the end without altering original
  }

  function destructivelyAddElementToEndOfArray(array, element) {
    var arr = []
    //add element to alter original .push
    return
  }

  function accessElementInArray(array, index) {
    var arr = []
    return //element in that index - lookup index definition
  }

  function destructivelyRemoveElementFromBeginningOfArray(array) { //array is the only argument
    var arr = []
    //remove first value destructively
    return //the array with first value removed. use shift
  }

  function removeElementFromBeginningOfArray(array) {
    var arr = []
    //remove element from beginning of array non-destructive
      //instructions say return ENTIRE array ???
    return
  }

  function destructivelyRemoveElementFromEndofArray(array) {
    var arr = []
    //remove last element destructively (pop)
    return //returns mutated Array - again says ENTIRE???
  }

  function removeElementFromEndOfArray(array) {
    var arr = []
    return //array without the last element - meaning we will have to assign it - //use slice then assign
  }
