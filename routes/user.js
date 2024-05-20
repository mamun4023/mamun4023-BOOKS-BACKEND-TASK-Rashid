
const router = require('express').Router()
const userControllers = require('../controllers/user')
const {isAuthenticated} = require('../middlewares/isAuthenticated')

router.post('/signup', userControllers.signUp)
router.post('/signin', userControllers.signIn)
router.post('/logout', userControllers.logout)

router.get('/test',  isAuthenticated, (req, res)=>{
    res.send("testing ")
})


module.exports = router;