const router = require('express').Router();
const { isLoggedIn } = require('../../middlewares/auth');
const UserModel = require('../../models/User.model');

router.post('/products/:productId/wishList', isLoggedIn, async (req, res) => {
    try {
        const { productId } = req.params;
        const userId = req.user._id;

        const user = await UserModel.findById(userId);
        const isExist = user.wishList.includes(productId);

        if (isExist) {
            const existingProductIndex = user.wishList.findIndex(itemId => itemId == productId)
            user.wishList.splice(existingProductIndex, 1);
        }
        else {
            user.wishList.push(productId);
        }

        await user.save();
        res.status(200).json({
            success: true,
            msg: "User wishlist updated"
        })
    } 
    catch (err) {
        res.status(500).json({
            success: false,
            msg: "Something went wrong"
        })
    }

})


module.exports = router;