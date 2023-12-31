import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

// Router
app.get("/", (_, res) => {
    res.render("home");
});

app.get("/*", (_, res) => {
    res.redirect("/");
});



















app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
})