import Phaser from 'phaser';

import logoImg from '../assets/logo.png';

class BootScene extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image("logo", logoImg);
    }
      
    create ()
    {
        const logo = this.add.image(400, 150, "logo");
      
        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}

export default BootScene;