const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
// const googleRoutes = require("./google");
const axios = require("axios");
// Book routes
router.use("/books", bookRoutes);
// router.use('/')

// Google Routes
// router.use("/google", googleRoutes);

// router.get("/google",(req, res) => {
//   axios
//     .get("https://www.googleapis.com/books/v1/volumes", { params: req.q})
//     .then(({ data:{items} }) => res.json( items ))
//     .catch(err=> res.status(422).json(err));
// })

// For anything else, render the html page
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;