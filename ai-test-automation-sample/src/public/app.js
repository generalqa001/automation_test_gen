const getCart=()=>JSON.parse(localStorage.getItem('cart')||'[]');
const saveCart=c=>{localStorage.setItem('cart',JSON.stringify(c));updateCartCount()};
const updateCartCount=()=>{const el=document.querySelector('#cart-count');if(el)el.textContent=getCart().length};
document.addEventListener('DOMContentLoaded',()=>{updateCartCount();document.querySelector('#logout')?.addEventListener('click',()=>{sessionStorage.removeItem('token');sessionStorage.removeItem('user');location.href='/';});});