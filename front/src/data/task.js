export class Task {
    id;
    title;
    tags;
    text;
    date;
    status;
    constructor(id = 0, title = '', tags = [], text = '', date = '') {
        this.id = parseInt(Math.random() * 1_000_000_000, 10);
        this.title = title;
        this.tags = tags;
        this.text = text;
        this.status = 'todo';
    }
}
