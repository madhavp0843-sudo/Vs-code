
router.put('/update_product_api/:id', (req, res) => {
    const productId = req.params.id;
    const { name, description, price } = req.body;


    const product = new Product({ name, description, price });
    const validationError = product.validateSync();



    if (validationError) {
        const errors = {
            name: validationError.errors.name ? validationError.errors.name.properties.message : undefined,
            description: validationError.errors.description ? validationError.errors.description.properties.message : undefined,
            price: validationError.errors.price ? validationError.errors.price.properties.message : undefined,
        };
        return res.status(400).json({ errors });
    }



    Product.findByIdAndUpdate(productId, { name, description, price })
        .then(() => {
            res.status(200).json({ message: 'Product updated successfully' });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        });
});