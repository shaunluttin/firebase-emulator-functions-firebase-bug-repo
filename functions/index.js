// const { config } = require('firebase-functions');
// const admin = require('firebase-admin');

// const firebaseConfig = config();
// admin.initializeApp(firebaseConfig.firebase);
// admin.firestore();

"use strict";

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _firebaseFunctions = require("firebase-functions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const firebaseConfig = (0, _firebaseFunctions.config)();

_firebaseAdmin.default.initializeApp(firebaseConfig.firebase);

_firebaseAdmin.default.firestore();

