const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
	res.send(200).json({ message: 'Users works' });
});

module.exports = router;
