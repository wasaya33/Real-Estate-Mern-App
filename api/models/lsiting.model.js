import mongoose from 'mongoose';


const listingSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        adress : {
            type : String,
            required : true
        },
        regularPrice : {
            type : Number,
            required : true
        },
        discountPrice : {
            type : String,
            required : true
        },
        bathRooms : {
            type : String,
            required : true
        },
        bedRooms : {
            type : String,
            required : true
        },
        furnished : {
            type : Boolean,
            required : true
        },
        parking : {
            type : Boolean,
            required : true
        },
        type : {
            type : String,
            required : true
        },
        offer : {
            type : Boolean,
            required : true
        },
        imageUrls : {
            type : Array,
            required : true
        },
        userRef : {
            type : String,
            required : true
        }
    },{timestamps : true}
)


const Listing = mongoose.model('Listing' , listingSchema);

export default Listing;