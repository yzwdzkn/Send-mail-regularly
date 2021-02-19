module.exports = function(){
    const express = require('express')
    const app = express()
    const port = 3000
    const router = require('./router')
    const schedule = require('./schedule')
    app.use(express.static('public'))
    app.use(router)
    setTimeout(() => {
        schedule.haha();
      }, 1000 * 30);
    app.listen(port,'0.0.0.0', () => console.log(`Example app listening on port ${port}!`))
}
