const express = require('express')
const router = express.Router()

// const shorturlRouter = require('./shorturl') - uncomment after module done

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// router.use("/shorturl",shorturlRouter) - uncomment after module done

module.exports = router