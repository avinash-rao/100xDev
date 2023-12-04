// Create a terminal clock (HH:MM:SS)

setInterval(() => {
    console.clear();
    const date = new Date();
    const [hr, min, sec] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ]
    console.log(`${hr}:${min}:${sec}`);
}, 1000)