class Que {
    constructor() {
        this.frontIndex = 0;
        this.backIndex = 0;
        this.list = {};
    }
    enque(value) {
        this.list[this.backIndex] = value;
        this.backIndex ++;
    }
    deque() {
        delete this.list[this.frontIndex];
        this.frontIndex ++;
    }
    print() {
        return this.list;
    }
}

const que = new Que();
que.enque(22);
que.enque(57);
que.enque(74);
que.enque(11);
que.deque()
que.deque();
console.log(que.print());