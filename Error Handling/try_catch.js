try {
    console.log('Program Start');
    throw new Error('Kesalahan: Program mengalami kesalahan, terpaksa berhenti');
    console.log('Program Ended');
} catch (err) {
    console.log('Error detected: Block will be executed');
}

