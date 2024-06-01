
const buyButton = document.getElementById('buy-now-btn');

buyButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const productId = buyButton.getAttribute('product-Id')
    const res = await axios.post(`/products/${productId}/order`, {}, {
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
    });

    const options = {
        "key": "rzp_test_T1lfALYFXdfpoG", // Enter the Key ID generated from the Dashboard
        "amount": parseFloat(res.data.order.amount) * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "E-commerce",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": res.data.order._id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "/verify-payment",
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
})