import { Engine, DisplayMode, Random } from "excalibur";
import { loader } from "./loader";
import { Player } from "./player";
import { Enemy } from "./enemy";

const rand = new Random();

class MainGame extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: DisplayMode.FillScreen,
    });
  }

  initialize() {
    const player = new Player();
    const enemy1 = new Enemy({
      x: rand.floating(100, 700),
      y: rand.floating(100, 500),
    });
    const enemy2 = new Enemy({
      x: rand.floating(100, 700),
      y: rand.floating(100, 500),
    });
    const enemy3 = new Enemy({
      x: rand.floating(100, 700),
      y: rand.floating(100, 500),
    });

    this.add(player);
    this.add(enemy1);
    this.add(enemy2);
    this.add(enemy3);
    this.start(loader);
  }
}

export const game = new MainGame();

game.initialize();
