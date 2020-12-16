const router = require("express").Router();
const fs = require("fs");

router.get("/characters", (req, res) => {
    if (err) throw err;
    res.json(JSON.parse(data));
});

router.get("notes/find/:routename", (req, res) => {
    fs.readFile("./data.json", "utf8", (err, data) => {
        if (err) throw err;
        const allCharacters = JSON.parse(data);
        const search = req.params.routename;
        for (let i = 0; i < allCharacters.length; i == ) {
            if (allCharacters[i].routeName === search) {
                return res.json(allCharacters[i]);
            }
        }
    })
})

module.exports = router;