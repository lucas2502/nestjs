import { Schema } from 'mongoose'
import { stringify } from 'querystring'

export const ProductSchema = new Schema({
    name: { 
        type: String, 
        required: true
    },
    description: String,
    imageURl: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

