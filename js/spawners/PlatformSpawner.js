define(["crafty", "components/Platform"], function(Crafty) {
    Crafty.c("PlatformSpawner", {
        init: function() {
            this.requires("Delay");
        }
    });
});