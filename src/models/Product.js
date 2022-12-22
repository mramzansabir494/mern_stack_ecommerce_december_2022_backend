import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product title is required"],
      minLength: 3,
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      minLength: 3,
    },
    price: {
        type:Number,
        required:[true, "Product price is required"],
        maxLength: [8, "Product price cannot exceed 8 digits"]
    },
    rating: {
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category: {
        type:String,
        required:[true, "Product category is required"]
    },
    stock:{
        type:Number,
        required:[true, "Product stock is required"],
        maxLength:[6, "Product stock cannot exceed 6 digits"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,
            },
            comment:{
                type:String,
                 required:true,
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
  },
  
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
