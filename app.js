const yargs = require('yargs');
const notes = require('./notes');

yargs.command({
    command: 'add',
    describe: 'adding  notes',
    builder: {
        title : {
            describe: 'title of notes',
            demandOption: true,
            type: 'string',
        },
        body : {
            describe: 'title of notes',
            demandOption: true,
            type: 'string',
        }
    },
    handler: (args) => {
        console.log('Title: ', args.title)
        console.log('Body :', args.body)
        notes.addNote(args.title, args.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove notes',
    builder: {
        title : {
            describe: 'title of notes',
            demandOption: true,
            type: 'string',
        },
    },
    handler: (args) => {
        console.log('remove notes')
        notes.removeNote(args.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: () => {
        console.log('list notes');
        notes.getNoteList()
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title : {
            describe: 'title of notes',
            demandOption: true,
            type: 'string',
        },
    },
    handler: (args) => {
        notes.readNote(args.title)
    }
})

//console.log(yargs.argv)
yargs.parse();