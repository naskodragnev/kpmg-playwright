// Generate test data: 10 request titles "Test request 01" … "Test request 10" with priorities cycling 1–5
for(let i = 1; i <=10; i++) {
    if (i > 0 && i <= 2){
        console.log(`Test request ${i} priority: [1]`);
    } else if (i > 2 && i <= 4){
        console.log(`Test request ${i} priority: [2]`);
    } else if (i > 4 && i <= 6){
        console.log(`Test request ${i} priority: [3]`);
    } else if (i > 6 && i <= 8){
        console.log(`Test request ${i} priority: [4]`);
    } else if (i > 8 && i <= 10){
        console.log(`Test request ${i} priority: [5]`);
    } 
} 