const { readTasks, writeTask} = require('./tasks');
const [,, cmd ] = process.argv;

if (!cmd) {
    console.log('TaskMaster  CLI - Usa: node index.js <comando>');
}


