const fs = require('fs');
const chalk = require('chalk');
const getNotes = (text) => {
    console.log(text);
    return text
}

const addNote =  (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.find(note => note.title === title)
    if (!duplicateNotes) {
    notes.push({
        title:title,
        body:body,
    })
    saveNotes(notes)
    console.log(chalk.inverse.green('New note added!'))
}else{
    console.log(chalk.inverse.red('Duplicate notes'))
}  
}

const removeNote = (title) => {
    const notes = loadNotes();
    const deleteNotes = notes.filter(note => note.title !== title)
    if (deleteNotes.length > 0) {
        saveNotes(notes)
        console.log(chalk.inverse.green('note deleted successfully'))
    }else{
        console.log(chalk.inverse.red('No entry found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const getNoteList = () => {
    const notes = loadNotes(); 
    console.log(chalk.inverse.green('Your notes'))
    notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes(); 
    const note = notes.findIndex(note => console.log(note.title))
    
    if(note !== -1){
        console.log(chalk.inverse.green('Your note is'))
        console.log(notes[note].title)
        console.log(notes[note].body)
    }
    else{
        console.log(chalk.inverse.red('Not found'))
    }
    
}
const loadNotes = () => {
    try{
        const dataFile = fs.readFileSync('notes.json');
        const dataJSON = dataFile.toString();
        const data = JSON.parse(dataJSON)
        return data
    }
    catch(e){
        return []
    }
}
module.exports = {
    getNotes: getNotes,
    addNote:addNote,
    removeNote:removeNote,
    getNoteList:getNoteList,
    readNote:readNote,
}