// A função myRemove(arr, item) recebe um array arr
// e retorna uma cópia desse array sem o elemento item, caso ele exista no array

const myRemove = (arr, item) => arr.filter((element) => element !== item)

module.exports = myRemove;