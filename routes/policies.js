const express = require('express');
const { getPolicies, calculatePolicy } = require('../controllers/policyController');
const router = express.Router();

router.get('/', getPolicies);
router.post('/calculate', calculatePolicy);

module.exports = router;
