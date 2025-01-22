export class History {
  prev: string = '';
  current: string = '';
  op: string = '';
  equaliz: string = '';

  constructor(prev: string, current: string, op: string, equaliz: string) {
    this.prev = prev;
    this.current = current;
    this.op = op;
    this.equaliz = equaliz;
  }
}
