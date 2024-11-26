import { Actor, Color } from "excalibur";

export class Enemy extends Actor {
  constructor(props: { x: number; y: number }) {
    super({
      x: props.x,
      y: props.y,
      width: 20,
      height: 20,
      color: Color.Red,
    });
  }
}
