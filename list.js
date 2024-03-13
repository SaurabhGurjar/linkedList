class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class List {
    constructor() {
        this.list = null;
    }

    append(value) {
        if(!value && value !== 0) return;
        if(!this.list) {
            this.list = new Node(value);
        } else {
            let listNode = this.list;
            while(listNode) {
                if (!listNode.nextNode) {
                    listNode.nextNode = new Node(value);
                    listNode = null;
                } else {
                    listNode = listNode.nextNode;
                }
            }
        }
    }

    prepend(value) {
        if(!value && value !== 0) return;
        const newNode = new Node(value, this.list);
        this.list = newNode;   
    }

    get size() {
        let count = 0;
        let listNode = this.list;
        while(listNode) {
            count++
            listNode = listNode.nextNode;
        }
        return count;
    }
    
    get head() {
        return this.list.value;
    }

    get tail() {
        let listNode = this.list;
        while (listNode) {
            if(listNode.nextNode === null) return listNode;
            listNode = listNode.nextNode;
        }
    }

    at(index) {
        if(!index && index !== 0) return;
        if(typeof index !== "number") throw new Error("Invalid index!");
        if (index >= this.size || index < 0) throw new Error("Index is out of range!");

        let listNode = this.list;
        if(index >= this.size) return undefined;
        for(let i = 0; i <= index; i++) {
            if(i === index) {
                return listNode;
            } else {
                listNode = listNode.nextNode;
            }
        }
    }

    pop() {
        if(!this.list) return undefined; // empty list
        let poppedVal; 
        let listNode = this.list;
        if(!this.list.nextNode) {
            poppedVal = this.list.value;
            this.list = null;
            return poppedVal;
        }
        while(listNode.nextNode.nextNode) {
            listNode = listNode.nextNode;
        }
        poppedVal = listNode.nextNode.value;
        listNode.nextNode = null;
        return poppedVal;
    }

    contains(value) {
        if(!value && value !== 0) return;
        let listNode = this.list;
        while(listNode) {
            if(listNode.value === value) return true;
            listNode = listNode.nextNode; 
        }
        return false;
    }

    find(value) {
        if(!value && value !== 0) return;
        let listNode = this.list;
        for(let i = 0; i < this.size; i++) {
            if(listNode.value === value) return i;
            listNode = listNode.nextNode;
        }
        return null;
    }

    toString() {
        let listNode = this.list;
        let listString = "";
        while(listNode) {
            listString += `( ${listNode.value} ) -> `;
            listNode = listNode.nextNode;
        }
        listString += "null";
        return listString;
    }

    insertAt(value, index) {
        if(!index && index !== 0) return;
        if(typeof index !== "number") throw new Error("Invalid index!");
        if (index >= this.size || index < 0) throw new Error("Index is out of range!");

        if(index === 0) {
            this.prepend(value);
        } else if(index === this.size) {
            this.append(value)
        } else {
            const prev = this.at(index - 1);
            const current = prev.nextNode;
            prev.nextNode = new Node(value, current);
        }
    }

    removeAt(index) {
        if(!index && index !== 0) return;
        if(typeof index !== "number") throw new Error("Invalid index!");
        if (index >= this.size || index < 0) throw new Error("Index is out of range!");
        if(index === 0) {
            this.list = this.list.nextNode;
        } else {
            const prev = this.at(index - 1)
            prev.nextNode = prev.nextNode.nextNode;
        }
    }
}

const linkedList = new List();

linkedList.append("Saurabh");
linkedList.append("Amit");
linkedList.append("John");
linkedList.prepend("Rajat");
linkedList.prepend("Hemant");

console.log(linkedList.size);
console.log(linkedList.pop());
console.log(linkedList.at(2));

linkedList.append("Nilam");

console.log(linkedList.contains("Nilam"));
console.log(linkedList.find("Nlam"));

linkedList.insertAt("Bob", 1);
linkedList.insertAt("Alice", 0);
linkedList.insertAt("Charlie", 7);
linkedList.removeAt(0);

console.log(linkedList.toString());
