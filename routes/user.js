
const router = require('express').Router()
const userControllers = require('../controllers/user')
const {isAuthenticatedUser, isAuthenticatedAdmin} = require('../middlewares/isAuthenticated')

router.post('/signup', userControllers.signUp)
router.post('/signin', userControllers.signIn)
router.post('/logout', userControllers.logout)

router.get('/test',  isAuthenticatedUser, (req, res)=>{
    res.send("testing ")
})


module.exports = router;