const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
require("dotenv").config();

const transporter = nodemailer.createTransport({
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          secure: false,
          auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
          }
});

const sendLowStockAlert = async (product) =>{
    try{
       const templatePath = path.join(__dirname, '../views/alert.ejs');
       const html = await ejs.renderFile(templatePath, {
        productName: product.name,
        sku: product.sku,
        stock: product.stock,
        threshold: product.threshold
       });
       
       await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: 'admin@authapp.dev',
        subject: `Low Stock Alert: ${product.name}`,
        html
       });
       console.log(`Low stock alert sent for product: ${product.name}`);

    }catch (error){
          console.error("Error sending low stock alert:" , error);
    }
}

module.exports = {
    sendLowStockAlert
};