const express = require('express');
const cont = require('./Controller');
const router = express.Router();

router.get('/getNA', cont.getNA);
router.get('/getEU', cont.getEU);
router.get('/getAS', cont.getAS);
router.get('/getOC', cont.getOC);

module.exports  = router;