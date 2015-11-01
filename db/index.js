var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var settings = require('../settings');
var ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect(settings.url);
mongoose.model('User',new Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    email:{type:String,required:true}
}));

mongoose.model('Article',new Schema({
    user:{type:ObjectId,ref:'User'},
    title:{type:String,required:true},
    content:{type:String,required:true},
    createAt:{type:Date,default:Date.now}
}));

global.M = function(modelName){
    return mongoose.model(modelName);
}