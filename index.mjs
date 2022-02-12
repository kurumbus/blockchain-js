#! /usr/bin/env node

import fs from 'fs'

async function writeFile(filename, writedata) {
    try {
        await fs.promises.writeFile(filename, JSON.stringify(writedata, null, 4), 'utf8');
        console.log('data is written successfully in the file')
    }
    catch (err) {
       console.log('not able to write data in the file ')
    }
}


import Blockchain from './Blockchain.mjs'

function init () {
    const blockchain = Blockchain.create(2); // difficulty increases exponentially with each increase
    let randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min;
    let names = ['alice', 'bob', 'john', 'doe']

    for (let i=0; i<100000; i++) {
        let from = names[Math.floor(Math.random()*names.length)]
        let to = names[Math.floor(Math.random()*names.length)]
       // if (from === to) continue


        blockchain.addBlock(from, to, randomInt(1, 1000));
        console.log(i)
      //  console.log(blockchain.chain[i])
     //   console.log(blockchain.isValid());
    }
    writeFile('blockchain.json', blockchain.chain)

    //console.log(blockchain);
    // console.log(blockchain.isValid());
   // true - since we haven't tampered with it
  //  blockchain.chain[1].data.amount = 200; // tampering with the blockchain
   // console.log(blockchain.isValid()); // false - tampered with the blockchain
}


init()
