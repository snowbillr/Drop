require.config({
    paths: {
        crafty: "libs/crafty",
        lodash: "libs/lodash"
    }
});

STAGE_BOUNDS = {x: 0, y: 0, w: 350, h: 500, left: 0, right: 350, top: 0, bottom: 500};

require(["crafty", "components/SceneManager"], function(Crafty) {
    Crafty.init(350, 500);

    Crafty.e("SceneManager");

    Crafty.trigger("GameStart");
});