const express = require("express");
const router = express.Router();

router.get("/about", (req, res)=>{
res.status(201).send("<script>location.href='https://portfolio.soumikmahato.xyz/about';</script>")
});

module.exports = router;