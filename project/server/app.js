const express = require("express");
const PORT = 3001;
const app = express();

const products = [];

app.use(express.json());

app.get("/products", (req, res) => {
    res.status(200);
    res.json(products);
})

app.get("/product/:id", (req, res) => {
    try {
        let productId = req.params.id;
        let prod = products.find((prod) => prod.id == productId);
        console.log(prod);
        return res.status(200).json({
            status: 200,
            data: prod
        });
    } catch (error) {
        return res.status(400).json("Product not")
    }
})

app.post("/product", (req, res) => {
    const { title, price, quantity } = req.body;
    try {
        if (!title || !price || !quantity) {
            res.status(400).json({
                "status": "fail",
                message: "All specific fields must contain a value",
            })
        };
        let newId = products.length > 1 ? products[products.length - 1].id + 1 : 1001;
        let newProducts = {
            id: newId,
            title,
            price,
            quantity
        };
        products.push(newProducts);
        res.status(201).json({
            status: "Success",
            "message": "Product created successfully",
        });

    } catch (error) {
        return res.status(401).json({
            stauts: "fail",
            message: "Product could not be created",
        });
    }
});

app.patch("/edit/product/:id", (req, res) => {
    const pid = req.params.id;
    const { title, price, quantity } = req.body;
    if (!title || !price || !quantity) {
        res.status(400).json({
            "stauts": "fail",
            message: "All specified fields must have a specific value",
        });
    }
    const index = products.findIndex(index => index.id == pid);
    if (index != -1) {
        products[index].title = title;
        products[index].price = price;
        products[index].quantity = quantity;
        res.status(200).json({
            status: "Success",
            message: "Product data edited successfully",
            data: products[index]
        });
    }
    else {
        res.status(400).json({
            status: "fail",
            message: "Product not found",
        })
    }
});

app.delete("/delete/product/:id", (req, res) => {
    try {
        const productID = req.params.id;
        let index = products.findIndex((prod) => {
            return prod.id == productID;
            // console.log(prod.id);
            // console.log(productID)
        });
        if (index == -1) {
            res.status(401).json({
                status: "fail",
                message: "Product not found",
            });
        }
        else {
            const deletedProductsArray = products.splice(index, 1);
            return res.status(201).json({
                status: 200,
                message: "Product deleted successfully",
                data: deletedProductsArray,
            });
        }
    } catch (error) {
        return res.status(400).json({
            status: fail,
            message: "Product could not be deleted",
        });
    }

})

app.listen(PORT, (err) => {
    try {
        if (err) throw err;
        console.log(`Server is running on PORT: ${PORT}`);
    } catch (error) {
        console.log(error.message)
    }
})