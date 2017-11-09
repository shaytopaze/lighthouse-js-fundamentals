function range(start, end, step) {
  var array = [];
  if (start === null || end === null || step === null || start > end || step < 0) {
    return [];
  }
  else {
  for (var i = start; i <= end; i += step) {
    array.push(i);
  }
}

  return array;
}


