function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
        const delay = Math.random() * 1000; // Випадкова затримка від 0 до 1 секунди (в мілісекундах)
        
        setTimeout(() => {
            process.stdout.write(message[i]); // Виводимо літеру без переносу рядка
            if (i === message.length - 1) {
                console.log(); // Додаємо новий рядок після останньої літери
            }
        }, delay);
    }
}

// Приклад використання
randomDelayPrint("Hello"); 
