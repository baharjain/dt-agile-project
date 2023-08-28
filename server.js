const  express = require('express')




dotenv.config()
//rest object
const app = express()
//use of middlewares
app.use(cors())
app.use(express.json())



//rouutes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoute)
app.use('/api/v1/product', productRoutes)
//rest api calling
const PORT = process.env.PORT || 8080
app.use('*', function (req, res) {
    res.sendFile('index.html')
})
app.listen(PORT, () => {
    console.log("server setup done".bgGreen.black)
})