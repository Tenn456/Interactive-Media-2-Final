import { Actor, Color } from "excalibur";

export class Player extends Actor {
  constructor() {
    super({
      x: 400,
      y: 300,
      width: 20,
      height: 20,
      color: Color.Green,
    });
  }
}
