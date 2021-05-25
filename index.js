const findAllPermutations = string => {
  const array = []
  backtrack(string, array, [])
  return array
}

const backtrack = (string, array, temp) => {
  const remaining = getRemaining(string, temp)

  if (temp.length === string.length) {
    array.push(temp.join(''))
    return
  }

  for(let i = 0; i < remaining.length; i++) {
    temp.push(remaining[i])
    backtrack(string, array, temp)
    temp.pop()
  }
}

const getRemaining = (string, temp) => {
  for(let i = 0; i < temp.length; i++) {
    string = string.replace(temp[i], "")
  }
  
  return string
}