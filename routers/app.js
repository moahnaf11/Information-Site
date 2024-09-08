const express = require("express");
const router = express.Router();
const path = require("path");

router.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, '../views/index.html')
    res.sendFile(filePath);
})

router.get('/about', (req, res) => {
    const filePath = path.resolve(__dirname, '../views/about.html')
    res.sendFile(filePath);
})

router.get('/contact-me', (req, res) => {
    const filePath = path.resolve(__dirname, '../views/contact-me.html')
    res.sendFile(filePath);
})

router.get('*', (req, res) => {
    const filePath = path.resolve(__dirname, '../views/404.html')
    res.sendFile(filePath);
})





module.exports = router;
