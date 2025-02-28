import { PrismaClient } from "@prisma/client";
import Customer from "../model/Customer";

const prisma = new PrismaClient();

export async function CustomerAdd(c: Omit<Customer, 'customerId'>){
    try {
        const newCustomer =  await prisma.customer.create({
            data:{
                name:c.name,
                email:c.email,
                telephone:c.telephone,
                city:c.city
            }
        })
        console.log("customer added:",newCustomer);
        return newCustomer;
    }catch (err){
        console.log(err);
    }
}
export async function getAllCustomers(){
    try {
        return await prisma.customer.findMany();
    }catch (err){
        console.log(err);
    }
}

export async function deleteCustomer(emailAddress: string){
    try {
        const findCustomer = await prisma.customer.findUnique({
            where:{email:emailAddress}
        });
        if(!findCustomer){
            console.log("customer not found");
            return null;
        }
        const deletedCustomer = await prisma.customer.delete({
            where:{email:emailAddress}
        })
        console.log("Customer deleted:", emailAddress);
        return deletedCustomer;
    }catch (err){
        console.log(err);
    }
}
