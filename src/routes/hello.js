'use strict';

const express = require('express');
const router = express.Router();

// Controllerの読み込み
const {
    helloFunction,
} = require('../controllers/helloController');

// ルーティング処理
router.route('/hello').get(helloFunction);

module.exports = router;