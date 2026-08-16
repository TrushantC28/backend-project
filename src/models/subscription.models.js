import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber :[
        {
            type :Schema.Types.ObjectId,//one who is subscribing
            ref: "User"
        }
    ],
    channel :
        {
            type :Schema.Types.ObjectId,//one whom to is subsribed
            ref: "User"
        }
    ,
}, {timestamps : true});

export const Subscription = mongoose.model("Subscription", subscriptionSchema)