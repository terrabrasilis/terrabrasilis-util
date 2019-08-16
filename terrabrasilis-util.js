var Stack, Queue

Stack = (function () {
  // FIFO = first in, first out
  var list = []

  const insert = function (obj) {
    if (obj === 'undefined' || obj === null) { return }

    let exists = false
    for (let index = 0; index < list.length; index++) {
      if (list[index].zoom === obj.zoom) {
        exists = true
      }
    }

    if (!exists) {
      // console.log("Stack -> ");
      // console.log(obj);
      list[list.length] = obj
    }

    /* if (exists) {
                console.log("Stack exists -> ");
                console.log(obj);
            } */
  }

  const remove = function () {
    if (list.length > 0) {
      var obj = list[list.length - 1]
      list.splice(list.length - 1, 1)
      return obj
    } else {
      alert('Do not exist more value!')
    }
  }

  const getLast = function () {
    if (list.length > 0) {
      return list[list.length - 1]
    } else {
      alert('Do not exist more value!')
    }
  }

  const getLength = function () {
    return list.length
  }

  const reset = function () {
    while (list.length > 0) {
      remove()
    }
    // console.log("All list content removed. List size rigth now is [" + list.length + "]");
  }

  return {
    insert: insert,
    remove: remove,
    getLast: getLast,
    getLength: getLength,
    reset: reset
  }
})(Stack || {})

Queue = (function () {
  // FILO = first in, last out
  var list = []

  const insert = function (obj) {
    if (obj === 'undefined' || obj === null) { return }

    let exists = false
    for (let index = 0; index < list.length; index++) {
      if (list[index].zoom === obj.zoom) {
        exists = true
        // console.log("The object already exists -> ");
        // console.log(obj);
      }
    }

    if (!exists) {
      // console.log("Queue -> ");
      // console.log(obj);
      list[list.length] = obj
    }

    /* if (exists) {
                console.log("Queue exists -> ");
                console.log(obj);
            } */
  }

  const remove = function () {
    if (list.length > 0) {
      var obj = list[0]
      list.splice(0, 1)
      return obj
    } else {
      alert('Do not exist more value!')
    }
  }

  const getFirst = function () {
    if (list.length > 0) {
      return list[0]
    } else {
      alert('Do not exist more value!')
    }
  }

  const getLength = function () {
    return list.length
  }

  const reset = function () {
    while (list.length > 0) {
      remove()
    }
    // console.log("All list content removed. List size rigth now is [" + list.length + "]");
  }

  return {
    insert: insert,
    remove: remove,
    getFirst: getFirst,
    getLength: getLength,
    reset: reset
  }
})(Queue || {})

module.exports = { Stack, Queue }
