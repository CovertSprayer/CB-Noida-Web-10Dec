

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('like-btn')){
        const btn = e.target;
        const productId = btn.getAttribute('product-Id');
        toggleWishlist(productId, btn)
    }
})

async function toggleWishlist(productId, btn){
    try {
        const res = await axios.post(`/products/${productId}/wishList`,{},{
            headers: {'X-Requested-With': 'XMLHttpRequest'}
        });
    
        // const res1 = axios({
        //     method: 'post',
        //     url: `/products/${productId}/wishList`,
        //     headers: {'X-Requested-With': 'XMLHttpRequest'},
        // });
        console.log(res);  
        if(btn.classList.contains('fa-regular')){
            btn.classList.remove('fa-regular');
            btn.classList.add('fa-solid');
        }
        else{
            btn.classList.remove('fa-solid');
            btn.classList.add('fa-regular');
        }
    } 
    catch (err) {
        window.location.replace('/login');
    }
}

