const router = require('express').Router();
const controller = require('../controllers/v1.js');

router.get('/', controller.get);
router.post('/', controller.add);
router.patch('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
