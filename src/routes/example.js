'use strict';

const express = require('express');
const router = express.Router();

// Controllerの読み込み
const {
    getFunction,
    postFunction,
    putFunction,
    deleteFunction,
} = require('../controllers/exampleController');

// ルーティング処理
router.route('/example').get(getFunction);
router.route('/example').post(postFunction);
router.route('/example').put(putFunction);
router.route('/example').delete(deleteFunction);

module.exports = router;