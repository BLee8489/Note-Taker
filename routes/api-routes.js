const router = require("express").Router();
const fs = require("fs");
const { nanoid } = require("nanoid");

router.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    return res.json(JSON.parse(data));
  });
});
router.post("/notes", (req, res) => {
  console.log(req.body);
  let obj = {
    id: nanoid(5),
    title: req.body.title,
    text: req.body.text,
  };
  console.log(obj);
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    let db = JSON.parse(data);
    db.push(obj);
    console.log(db);
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
      return res.json(db);
    });
    // return res.json(JSON.parse(data));
  });
});

// router.get("notes/find/:routename", (req, res) => {
//     fs.readFile("./data.json", "utf8", (err, data) => {
//         if (err) throw err;
//         const allCharacters = JSON.parse(data);
//         const search = req.params.routename;
//         for (let i = 0; i < allCharacters.length; i == ) {
//             if (allCharacters[i].routeName === search) {
//                 return res.json(allCharacters[i]);
//             }
//         }
//     })
// })

module.exports = router;
