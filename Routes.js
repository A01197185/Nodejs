const express = require('express');
const cont = require('./Controller');
const router = express.Router();

router.get('', cont.getNA);
router.get('', cont.getEU);
router.get('', cont.getAS);
router.get('', cont.getOC);

module.exports  = router;