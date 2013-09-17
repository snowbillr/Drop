define(["crafty", "components/Player", "components/Platform"], function(Crafty) {
    Crafty.scene("Game", function() {
        Crafty.e("2D, Canvas, Color")
            .attr({x: STAGE_BOUNDS.x, y: STAGE_BOUNDS.y, w: STAGE_BOUNDS.w, h: STAGE_BOUNDS.h})
            .color("rgb(139, 69, 19)")
            ;

        Crafty.e("2D, Canvas, Color")
            .attr({x: STAGE_BOUNDS.x + 10, y: STAGE_BOUNDS.y + 10, w: STAGE_BOUNDS.w - 20, h: STAGE_BOUNDS.h - 20})
            .color("rgb(255, 253, 208)");

        Crafty.e("Player");

        Crafty.e("Platform").platform(10, 400, 200, 10, 1);
    });
});