export class DateValueObject {
  constructor(
    public day: number,
    public month: number,
    public year?: number,
  ) { }

  // 1970-01-01
  toString() {
    const d = this.day || new Date().getDate(); // 1-31
    const m = this.month || new Date().getMonth() + 1; // 0-11
    const yyyy = this.year || new Date().getFullYear();

    const dd = d < 10 ? `0${d}` : d;
    const mm = m < 10 ? `0${m}` : m;

    return `${yyyy}-${mm}-${dd}`;
  }
}