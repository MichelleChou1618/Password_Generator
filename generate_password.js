// generate_password.js

// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// define generatePassword function
function generatePassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // define dummy data
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '123456'
  // }
  // console.log('options', options)

  // create a collection to store things user picked up
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  console.log('collection', collection)


  // remove things user do not need
  if (options.excludeCharacters) {
    console.log(`exclude characters: ${options.excludeCharacters}`)
    // collection = collection.filter(character => {
    //   // if the character includes in 'excludeCharacters',
    //   // return false to remove the character in the collection
    //   if (options.excludeCharacters.includes(character) === true) {
    //     return false
    //     // otherwise, return true  to keep the character in the collection
    //   } else {
    //     return true
    //   }
    // })

    //refactor 1: if / else 的邏輯與有可能的狀態
    // collection = collection.filter(character => {
    //   return !options.excludeCharacters.includes(character)
    // })

    //refactor 2: 在箭頭函式中，如果只要回傳一個值的話，就可以把要回傳的內容直接放到 => 後面，而不用寫 return
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }
  console.log('collection', collection)

  // return error notice if collection is empty
  if (collection.length === 0 || options.length === '') {
    return 'There is no valid character in your selection.'
  }


  // start generating password
  //console.log('sample(collection)', sample(collection))
  let password = ''
  for (let i = 0; i < Number(options.length); i++) {
    password += sample(collection)
  }

  // return the generated password
  //console.log('This function will generate password')
  //console.log('password', password)
  return password
}

// invoke generatePassword function 
//generatePassword()

// export generatePassword function for other files to use
module.exports = generatePassword