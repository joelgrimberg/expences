// noinspection JSAnnotator

//const fs = require('fs');
//const _ = require('lodash');
const yargs = require('yargs');

const expences = require('./expences.js');

const subjectOptions = {
    describe: "Subject of Business",
    demand: true,
    alias: "s"
};

const dateOptions = {
    describe: "When where the costs made",
    demand: true,
    alias: "d"
};

const amountOptions = {
    describe: "Amount",
    demand: true,
    alias: "a"
};

const declaredOptions = {
    describe: "declaired Y/N",
    demand: true,
    alias: "x"
};

const argv = yargs
    .command('add','add a new note', {
        subject: subjectOptions,
        date: dateOptions,
        amount: amountOptions,
        declared: declaredOptions
    })
    .command('edit','edit a note', {
        subject: subjectOptions,
        date: dateOptions,
        amount: amountOptions,
        declared: declaredOptions
    })
    .command('list','list all notes')
    .command('delete','delete an expense', {
        subject: subjectOptions
    })

    .help().argv;
var command = argv._[0];

if (command === 'add') {
    console.log('adding the following expense:');
    console.log('date: ' + argv.date);
    console.log('subject: ' + argv.subject);
    console.log('amount: €' + argv.amount);
    console.log('declared: ' + argv.declared);
    console.log('--------------------');
    expences.addExpense(argv.subject, argv.date, argv.amount, argv.declared);
} else if (command === 'edit') {
    console.log('edit');
} else if (command === 'list') {
    console.log('list');
} else if (command === 'delete') {
    console.log('delete an expense');
} else {
    console.log('command not recognised');
}
