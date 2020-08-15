'use strict';

const PORT = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const connectDatabase = require('./config/database');

const app = express();

// サーバーの起動
app.listen(PORT, console.log(`Server listening on port ${PORT}`));

// DBに接続
connectDatabase();

// ミドルウェアの設定
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'this is secret keyword' }));

// ルーティング
const hello = require('./routes/hello');
const example = require('./routes/example');

app.use(hello); // => /hello
app.use(example); // => /example