ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.debug.debug',
    'game.levels.test'
)
.defines(function(){

MyGame = ig.Game.extend({

    lastMilliseconds: null,

    init: function() {
        this.loadLevel(LevelTest);
    },

    loadLevel: function(level) {
        this.parent(level);
        this.player = this.getEntitiesByType(EntityPlayer)[0];
        this.screen.x = this.player.pos.x - ig.system.width;
        this.screen.y = this.player.pos.y - ig.system.height;
    },

    update: function() {
        var date = new Date();
        var ms = date.getMilliseconds();
        if(this.lastMilliseconds !== null) {
            var diff = ms - this.lastMilliseconds;
            if(diff >= 50) {
                console.log(date.toISOString() + ': Time since last update was ' + diff + 'ms');
            }
        }
        this.lastMilliseconds = ms;

        this.parent();

        // Make the camera follow the player
        if(this.player) {
            var offsetX = (this.player.flip ? -1 : 1) * (ig.system.width / 3)/2;
            var offsetY = 0;
            var targetX = this.player.pos.x + this.player.size.x/2 - ig.system.width/2 + offsetX;
            var targetY = this.player.pos.y + this.player.size.y/2 - ig.system.height/2 + offsetY;
            this.screen.x += (targetX - this.screen.x) * 0.025;
            this.screen.y += (targetY - this.screen.y) * 0.025;
        }

    }
});

scale = 1;
var width = 240;
var height = 160;
ig.main( '#canvas', MyGame, 60, width, height, scale );

});
