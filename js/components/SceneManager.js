define(["crafty", "scenes/Game"], function(Crafty) {
    Crafty.c("SceneManager", {
        init: function() {
            Crafty.bind("GameStart", this._onGameStart);
        },
        _onGameStart: function() {
            Crafty.scene("Game");
        }
    });
});