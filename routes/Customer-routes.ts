import express from "express";
import Customer from "../model/Customer";
import {CustomerAdd,getAllCustomers,deleteCustomer} from "../database/Customer-data-store";

const router = express.Router();

router.post("/add",async (req,res)=>{
    console.log(req.body)
    const customer :Customer = req.body;
    try {
        const addedCustomer = await CustomerAdd(customer);
        res.json(addedCustomer);
    }catch (err){
        console.log(err);
        res.status(400).send("Error adding the customer");
    }
})

router.get("/get",async (req,res)=>{
    try {
        const customers = await getAllCustomers();
        res.json(customers);
    }catch (err){
        console.log("error getting customers",err);
    }
})

router.delete("/delete/:email",async (req,res)=>{
    const emailAddress :string = req.params.email;
    try {
        const customerDeleted = await deleteCustomer(emailAddress);
        res.json(customerDeleted);
    }catch (err){
        console.log(err);
    }
})



export default router;