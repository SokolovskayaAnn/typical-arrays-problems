
exports.min = function min (array) {
  if (typeof array != "undefined" && array != null && array.length != null
  && array.length > 0) {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minNumber) {
        minNumber = array[i]; 
      }
    }
    return minNumber;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (typeof array !== "undefined" && array !== null && array.length !== null
  && array.length > 0) {
    let maxNumber = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maxNumber) {
        maxNumber = array[i]; 
      }
    }
    return maxNumber;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (typeof array !== "undefined" && array !== null && array.length !== null
  && array.length > 0) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  } else {
    return 0;
  }
}
