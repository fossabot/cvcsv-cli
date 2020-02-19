import { bgBlue } from "kleur";

export class ProgressBar {
  private size: number;
  private current: number = 0;
  private total: number = 0;

  constructor() {
    this.size = process.stdout.columns - 30;
  }

  public start(total: number) {
    this.total = total;
    this.current = 0;
    this.update(this.current);
  }

  public update(current: number) {
    this.current = current;
    const currentProgress = this.current / this.total;
    this.draw(currentProgress);
  }

  private draw(progress: number) {
    const filledLength = parseInt((progress * this.size).toFixed(0));
    const emptyLength = this.size - filledLength;
    const filledBar = this.bar(filledLength, " ", bgBlue);
    const emptyBar = this.bar(emptyLength, "*");
    const progressPercent = (progress * 100).toFixed(2);
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(
      `Current progress: [${filledBar}${emptyBar}] | ${progressPercent}%`
    );
  }

  private bar(length: number, char: string, colour = (a: any) => a) {
    let str = "";
    for (let i = 0; i < length; i++) {
      str += char;
    }
    return colour(str);
  }
}
