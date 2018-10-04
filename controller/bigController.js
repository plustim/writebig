var router = require("express").Router();

var Word = require("../model/Word.js");

// send the page
router.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "../view/index.html"));
})

// enter a word, see what happen
router.post("/try", function(req, res) {
	Word.findOneAndUpdate({key :req.body.key}, {$inc : {'hits' : 1}})
		.then((model) => {
			res.json({id: model._id, do: model.action});
		})
		.catch(err => res.status(422).json(err));
});

module.exports = router;