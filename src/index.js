import Phaser from 'phaser';

import BootScene from './scenes/Boot';

import config from './config';

const gameConfig = Object.assign(config, {
    scene: [BootScene]
});

const game = new Phaser.Game(gameConfig);
