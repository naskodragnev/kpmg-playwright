const fixTitle: string = ' broken STREET light ';
//Here we start printin'.
console.log(fixTitle.trim()); // Trimmed.
console.log(fixTitle.trim().toLowerCase()); // In lower case.
console.log(fixTitle.trim().toUpperCase()); // In upper case.
console.log(fixTitle.trim().toLowerCase().replace('broken', 'Broken')); // Could not find how to upper case the first letter. Tried with charAt(0) but did not work.
console.log('Includes the word "Light"?: ' + fixTitle.includes('light'));
console.log(fixTitle.trim().toLowerCase().replace('street', 'road'));
