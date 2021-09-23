const s = 'supercalifragilisticexpialidocious';

const rev_alpha = string => string.split('').sort().reverse().join('');

console.log(`The alphabetically reversed string of ${s} is : ${rev_alpha(s)}`);