// app.js
// include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
//const bodyParser = require('body-parser')
const generatePassword = require('./generate_password')



// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting body-parser
//不管從哪個路由發送過來的請求，都先經過 bodyParser 進行前置處理
//由於 body-parser 已經是 Express 內建的一部分了，因此我們其實可以直接呼叫 express，就能取得 body-parser 提供的方法
//app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))


// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  //console.log('get form POST request')
  //取得在 POST 路由裡表單資料: req.body =>名稱都是根據我們<form> 表單中根據每一個<input> 欄位所設定的 <name> 屬性而來
  //console.log('req.body', req.body)
  //根據使用者傳送的表單資料產生隨機密碼
  //console.log('random password is: ', generatePassword(req.body))
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password: password, options: options })
})

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})