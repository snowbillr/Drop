define(["crafty"], function(Crafty) {
    Crafty.c("Player", {
        _width: 30,
        _height: 30,
        _speed: 5,
        _alive: true,
        init: function() {
            this.requires("2D, Canvas, Color, Collision")
                .attr({x: 175 - this._width / 2, y: 100, w: this._width, h: this._height})
                .color("rgb(139,69,19)")


            this.bind("EnterFrame", this._move);
        },
        _move: function() {
            if (this._alive) {
                this.shift(0, this._speed);

                if (this.y < STAGE_BOUNDS.y) {
                    this._alive = false;
                }
            }
        }
    });
});