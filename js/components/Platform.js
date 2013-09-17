define(["crafty"], function(Crafty) {
    Crafty.c("Platform", {
        _speed: 0,
        init: function() {
            this.requires("2D, Canvas, Color")
                .color("rgb(139,69,19)");
        },
        platform: function(x, y, width, height, speed) {
            this.attr({x: x, y: y, w: width, h: height});
            this._speed = speed * -1;

            this.bind("EnterFrame", this._move);
        },
        _move: function() {
            this.shift(0, this._speed);
        }
    });
});