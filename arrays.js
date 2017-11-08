//define variable
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
  }
  //use spread operator to add
  //return array with added element to begginning without changing array}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
  }

  function addElementToEndOfArray(array, element) {
  //add element to the end without altering original
  }

  function destructivelyAddElementToEndOfArray(array, element) {
    newArray = chocolateBars.push("element");
    //add element to alter original .push
    return newArray
  }

  function accessElementInArray(array, index) {
    var arr = []
    return //element in that index - lookup index definition
  }

  function destructivelyRemoveElementFromBeginningOfArray(array) { //array is the only argument
    //remove first value destructively
    //the array with first value removed. use shift
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
