class Node {
    payload;
    next;
    constructor(payload, next = undefined) {
        if (!payload) {
            throw error("payload");
        }

        this.payload = payload;
        this.next = next;
    }
}

class SinglyLinkedList {
    firstNode;
    constructor(node = undefined) {
        this.firstNode = node;
    }

    print() {

        let currentNode = this.firstNode;
        if (currentNode === undefined) {
            return;
        }

        do {
            console.log(currentNode.payload);
            currentNode = currentNode.next;
        }
        while (currentNode !== undefined)
    }

    reverse() {

        if (this.firstNode === undefined) {
            return;
        }

        let currentNode = this.firstNode;
        let nextNode = currentNode.next;
        currentNode.next = undefined;

        while (nextNode !== undefined) {

            var nextNodeAfterNext = nextNode.next;
            nextNode.next = currentNode;
            currentNode = nextNode;
            nextNode = nextNodeAfterNext;
        }

        this.firstNode = currentNode;
    }
}

const node5th = new Node(5);
const node4th = new Node(4, node5th);
const node3rd = new Node(3, node4th);
const node2nd = new Node(2, node3rd);
const node1st = new Node(1, node2nd);
const list = new SinglyLinkedList(node1st);

list.print();
list.reverse();
list.print();
