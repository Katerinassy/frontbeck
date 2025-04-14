const Router = require('express');
const router = new Router();

const userRoutes = require('./userRoutes'); // Убедитесь, что путь правильный
// const productRoutes = require('./productRoutes');
// const basketRoutes = require('./basketRoutes');
// const orderRoutes = require('./orderRoutes');

router.use('/users', userRoutes);
// router.use('/products', productRoutes);
// router.use('/basket', basketRoutes);
// router.use('/orders', orderRoutes);

module.exports = router;
