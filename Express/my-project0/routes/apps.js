const Product = require('../models/productsModel')

  router.post('/create_product_api', (req, res) => {
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

    product.save()
        .then(() => {
            res.status(201).json({ message: 'Product created successfully' });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        });
});