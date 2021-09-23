const rev_alpha = string => string.split('').sort().reverse().join('');
console.log(`The alphabetically reversed string is: ${rev_alpha('supercalifragilisticexpialidocious')}`);