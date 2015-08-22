ig.module('game.entities.player')
.requires('impact.entity')
.defines(function(){

    EntityPlayer = ig.Entity.extend({

        size: { x: 16, y: 16 },
        animSheet: new ig.AnimationSheet( 'media/player.png', 16, 16 ),
        sound: new ig.Sound('media/sounds/Blood Squirting-SoundBible.com-528509651-part4.*'),
        timer: new ig.Timer(0.25),
        flip: false,

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('default', 1, [0]);
            this.friction.x = 400;
            this.maxVel.x = 60;
        },

        handleMovementTrace: function(res) {
            if(res.collision.x) {
                this.flip = !this.flip;
            }
            this.parent(res);
        },

        update: function() {
            this.accel.x = (this.flip ? -1 : 1) * 400;
            if(this.timer.delta() > 0) {
                this.sound.play();
                this.timer.reset();
            }
            this.parent();
        }
    });
});