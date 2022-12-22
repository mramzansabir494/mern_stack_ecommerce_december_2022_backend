
import { StatusCodes } from "http-status-codes";
import { Product } from "../models/Product.js";
import { NotFoundError } from "../utils/errors.js";

export const create = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(StatusCodes.CREATED).json({
            success: true,
            data: product,
        });
    } catch (error) {
        console.log(error);
    }
};

export const findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ _id: id });

        if (!product) {
            throw new NotFoundError(`No product with id :${id}`);
        }
        
        res.status(StatusCodes.OK).json({
            success: true,
            data: product,
        });
    } catch (error) {
    }
};

export const findAll = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(StatusCodes.OK).json({
            success: true,
            data: products,
        });
    } catch (error) {
        console.log(error);
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ _id: id });

        if (!product) {
            throw new NotFoundError(`No product with id :${id}`);
        }

        const updatedProduct = await Product.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(StatusCodes.OK).json({
            success: true,
            data: updatedProduct,
        });
    } catch (error) {

    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOne({ _id: id })

        if (!product) {
            throw new NotFoundError(`No product with id :${id}`)
        }
        await product.remove();

        res.status(StatusCodes.OK).json({
            success: true,
            message: 'Success! Product removed',
        });
    } catch (error) {

    }
}