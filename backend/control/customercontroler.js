const mongoose = require('mongoose');
const { CustomerModel } = require('../model/model');
const cloudinary = require('cloudinary');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { sendmail } = require('../mailer');
require('dotenv').config()


const regist = (req, res) => {
    const information = req.body;
    let useremail = req.body.email;
    CustomerModel.create(information, (err) => {
        if (err) {
            res.send({ message: "Email already used", status: false })
        } else {
            sendmail(useremail)
            res.send({ message: "saved", status: true })
        }
    })
}

const login = (req, res) => {
    const { email, password } = req.body;
    CustomerModel.findOne({ email }, async (err, message) => {
        if (err) {
            res.send(err)
            console.log(err);
        } else {
            if (!message) {
                res.send({ status: false, message: "Email not found" })
            }
            else {
                const validPassword = await bcrypt.compare(password, message.password);
                if (validPassword) {
                    const token = jwt.sign({ _id: message._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
                    res.send({ token, message: "Token generated", status: true });
                } else {
                    res.send({ status: false, message: "Invaild password" })
                }
            }
        }
    })
}
const display = (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.send({ status: false, message: "Invalid Token" })
        } else {
            let id = decoded._id;
            CustomerModel.find({ _id: id }, (err, result) => {
                if (err) {
                    res.send(err);
                } else {
                    if (result.length > 0) {
                        res.send({ result, status: true, message: "Valid Token" })
                    }
                    else {
                        console.log(result);
                        res.send({ message: "empty array" })
                    }
                }
            })
        }
    })

}

const getTodo = (req, res) => {
    let userId = req.body.userId;
    UserModel.find({ userId }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send({ result })
        }
    })
}

const del = (req, res) => {
    let { id } = req.body;
    UserModel.findByIdAndDelete({ _id: id }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
}

const addtocart = (req, res) => {
    let { id } = req.body;
    UserModel.findByIdAndDelete({ _id: id }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
}



module.exports = { display, del, login, regist, getTodo, addtocart };