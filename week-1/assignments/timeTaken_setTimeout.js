// calculate the time it takes between a settimeout call and inner function actually running

console.time('Execution Time');

setTimeout(() => {
    console.timeEnd('Execution Time');
}, 1000);