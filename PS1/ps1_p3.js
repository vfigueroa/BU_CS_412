const func = (string, lambda) => {return lambda(string)};

// Part 1
console.log(func('supercalifragilisticexpialidocious', s => s.replaceAll('c', '&$%@c').split('&$%@')));

// Part 2
console.table(func('supercalifragilisticexpialidocious',  s => {
    let object = {
        originalString: s,
        modifiedString: s.replaceAll('a', 'A'),
        numberReplaced: s.replaceAll('a', 'A').split('A').length - 1,
        length: s.replaceAll('a', 'A').length
    }
    return object
}));