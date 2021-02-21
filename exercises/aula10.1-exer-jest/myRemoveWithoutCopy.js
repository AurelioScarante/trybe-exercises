// A função myRemoveWithoutCopy(arr, item) recebe um array arr
// e retorna o próprio array sem o elemento item, caso ele exista no array

const myRemoveWithoutCopy = (arr, item) => arr.filter((element => element !==item))

module.exports = myRemoveWithoutCopy;