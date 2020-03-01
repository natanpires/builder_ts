export function show() : void {
  var u: BuilderDP.Account = new BuilderDP.Builder()
                             .setName("Guest")
                             .setState("Alive")
                             .setPassword("charset")
                             .build();
    console.log(u.Name + " " + u.State + " " + u.Password);
}