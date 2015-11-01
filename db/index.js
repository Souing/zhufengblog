var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.connect("mongodb://123.57.143.189:27017/zhufengblog");
mongoose.model('User',new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true}
}));
global.M = function(modelName){
    return mongoose.model(modelName);
}