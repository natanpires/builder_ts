"use strict";
exports.__esModule = true;
function show() {
    var u = new BuilderDP.Builder()
        .setName("Guest")
        .setState("Alive")
        .setPassword("charset")
        .build();
    console.log(u.Name + " " + u.State + " " + u.Password);
}
exports.show = show;
