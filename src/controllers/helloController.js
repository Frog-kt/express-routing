'use strict';

exports.helloFuncion = async (req, res, next) => {
    res.status(200).send('hello');
};