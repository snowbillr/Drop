define(["crafty"], function(Crafty) {
    Crafty.c("Player", {
        _width: 30,
        _height: 30,
        _speed: 4,
        _alive: true,
        _onPlatform: false,
        init: function() {
            this.requires("2D, Canvas, Color, Collision, Twoway")
                .attr({x: 175 - this._width / 2, y: 100, w: this._width, h: this._height})
                .color("rgb(139,69,19)")
                .twoway(3);
            this.bind("EnterFrame", this._fall);
            this.onHit("Platform", this._moveWithPlatform, this._offPlatform);
        },
        _moveWithPlatform: function(collisionList) {
            if (this._alive) {
                this._onPlatform = true;
                var platform = collisionList[0].obj;
                var platformSpeed = platform._speed;
                this.shift(0, platformSpeed);
            }
        },
        _offPlatform: function() {
            this._onPlatform = false;
        },
        _fall: function() {
            if (this._alive && !this._onPlatform) {
                this.shift(0, this._speed);
                if (this.y < STAGE_BOUNDS.y) {
                    this._alive = false;
                }
            }
        }
    });
});