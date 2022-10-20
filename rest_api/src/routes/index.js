// definimos las rutas 
const {Router} = require('express');
const router = Router();

const { getUsers, createUsers, getUsersbyid, DeleteUsers, UpdateUsers } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUsersbyid);
router.post('/users',createUsers);
router.delete('/users/:id', DeleteUsers);
router.put('/users/:id', UpdateUsers);

module.exports = router; 

