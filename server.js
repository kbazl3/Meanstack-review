const express = require("express"),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      foodCtrl = require('./controllers/foodCtrl'),
      cors = require("cors"),
      port = 8090,
      app = express(),
      mongoUri = "mongodb://localhost:27017/menu";



app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));
mongoose.Promise = global.Promise;

app.post('/api/food', foodCtrl.addFood);
app.post('/api/food/reviews', foodCtrl.addReview);
app.get('/api/food', foodCtrl.getFood);
app.get('/api/food/review', foodCtrl.getOneReview);


app.listen(port, function() {
    console.log("listening on ", + port);
})


mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('connected to MongoDB at ', mongoUri);
})
