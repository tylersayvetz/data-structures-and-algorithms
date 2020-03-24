"use strict";
//implement a hash table
Object.defineProperty(exports, "__esModule", { value: true });
//a hash table a the combination of an array and a linked list. 
//it looks like an array of linked lists... 
/*
  [
   {key, value} --> {key, value} --> {key, value} --> {key, value} --> null,
   {key, value} --> {key, value} --> {key, value} --> {key, value} --> null,
   {key, value} --> {key, value} --> {key, value} --> {key, value} --> null,
   {key, value} --> {key, value} --> {key, value} --> {key, value} --> null,
  ]
*/
const SECRET_PRIME = 599;
class HashNode {
    constructor(item, next) {
        this.item = item;
        this.next = null;
    }
}
class HashTable {
    constructor(length) {
        this.length = length;
        this.storage = (new Array(length)).fill(null);
        this.firstCollision = null;
    }
    add(item) {
        const index = this.hash(item.key);
        const newNode = new HashNode(item, null);
        //if that index is null
        if (this.storage[index] === null)
            this.storage[index] = newNode;
        else {
            let depth = 0;
            //else append to the LL
            let current = this.storage[index];
            while (current.next !== null) {
                depth++;
                current = current.next;
            }
            //there was a collision.. 
            current.next = newNode;
            if (this.firstCollision === null) {
                this.firstCollision = item.key;
            }
        }
    }
    find(key) {
        const index = this.hash(key);
        if (this.storage[index] === null)
            return null;
        else {
            let current = this.storage[index];
            while (current !== null && (current.item.key !== key)) {
                current = current.next;
            }
            if (current === null)
                return null;
            else
                return current.item;
        }
    }
    hash(key) {
        let hash = key.charCodeAt(0);
        key.split('').forEach(letter => hash *= letter.charCodeAt(0));
        console.log('pre modulo', hash);
        hash = Math.floor((hash * SECRET_PRIME) % this.length);
        console.log('finished hash', hash);
        return hash;
    }
    getDepths() {
        return this.storage.map((bucket) => {
            if (bucket !== null) {
                let current = bucket;
                let counter = 0;
                while (current.next !== null) {
                    counter++;
                    current = current.next;
                }
                return counter;
            }
            else {
                return null;
            }
        });
    }
    returnCollisions() {
        const collisions = this.getDepths();
        return this.storage.map((bucket, i) => {
            if (bucket === null)
                return null;
            return { word: bucket.item.key, collisions: collisions[i] };
        }).filter(bucket => bucket !== null && bucket.collisions !== 0);
    }
}
// export const myTable = new HashTable(1000);
// const string1 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
// const arrayOfString1 = string1.toLowerCase().split(/\s|\.|\,|\-/).filter(word => word && word !== '-')
// arrayOfString1.forEach(word => {
//   myTable.add({key: word, value: 'value'})
// })
// console.log(myTable.returnCollisions());
// console.log(myTable.firstCollision);
exports.default = HashTable;
//# sourceMappingURL=hash-table.js.map