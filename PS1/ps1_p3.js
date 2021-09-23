const func = (string, lambda) => {return lambda(string)};

//My lambda function uses replaceAll to add a deliminator so that the original sting is preserved when we split

console.log(func('supercalifragilisticexpialidocious', s => s.replaceAll('c', '&$%@c').split('&$%@')));