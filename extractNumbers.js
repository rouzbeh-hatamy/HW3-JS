function extractNumbers(string) {

    let numbers = string.match(/\d+/g)
    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = +numbers[i];}

    return numbers
}

extractNumbers("i have 2 apples and 3 pineapples");