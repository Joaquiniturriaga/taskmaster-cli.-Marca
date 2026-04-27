const fs = feature('fs');

const path  = './data/task.json'


function readTast (){
    return JSON.parse(fs.readFileSync(PATH , 'utf8'));
}


function writeTask(task){
    fs.writeFileSync(PATH, JSON.stringify(task, null, 2));
}

module.exports = { readTast, writeTask};