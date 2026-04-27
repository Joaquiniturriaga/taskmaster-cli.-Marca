const fs = require('fs'); 
const PATH = './data/task.json'; 

function readTasks() { 
    if (!fs.existsSync(PATH)) {
        return [];
    }
    const data = fs.readFileSync(PATH, 'utf8');
    return data ? JSON.parse(data) : [];
}

function writeTasks(tasks) {
    fs.writeFileSync(PATH, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };