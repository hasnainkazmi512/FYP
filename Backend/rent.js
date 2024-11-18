import mongoose  from "mongoose";


const RentSchema = new mongoose.Schema({
    userID: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: true 
      },
    images:[
        {img1:{type:String,required:true},
        img2:{type:String},
        img3:{type:String}
    }],
    UserName:{type:String,default:"User",required:true},
    UserPhoneNumber:{type:Number,default:123,required:true},
    title:{type:String,required:true},
    desc:{type:String,required:true},
    car_make:{type:String,required:true},
    car_name:{type:String,required:true},
    driver: {type:String, required:true},
    fare:{type:String,required:true}
},{timestamp:true})

mongoose.models = {}

export default mongoose.model("Rent",RentSchema)