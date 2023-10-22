function letterCombinations(digits: string): string[] {
  const mapping = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'v', 'u'],
    '9': ['w', 'x', 'y', 'z']
  }

  if (digits.length === 0) {
    return []
  }

  let results = mapping[digits[0]];

  for (let i = 1; i < digits.length; i++) {
    const newResults: string[] = [];
    for (let smallerString of results) {
      for (let letter of mapping[digits[i]]) {
        newResults.push(smallerString + letter);
      }
    }
    results = newResults
  }

  return results;
};