//define variable
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
  }
  //use spread operator to add
  //return array with added element to begginning without changing array}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
  }

  function addElementToEndOfArray(array, element) {
    return [...array, element]
  }

  function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
  }

  function accessElementInArray(array, index) {
    return array[index]
  //element in that index - lookup index definition
  }

  function destructivelyRemoveElementFromBeginningOfArray(array) { //array is the only argument
    return array.shift()
  }

  function removeElementFromBeginningOfArray(array) {

  }

  function destructivelyRemoveElementFromEndofArray(array) {
    array.pop()
    //remove last element destructively (pop)
    //returns mutated Array - again says ENTIRE???
  }

  function removeElementFromEndOfArray(array) {
     array.slice(0, array.length, -1)//array without the last element - meaning we will have to assign it - //use slice then assign
  }
