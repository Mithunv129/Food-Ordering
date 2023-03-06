document.addEventListener('DOMContentLoaded',loadfood);

function loadfood()
{
    loadcontent();
}
function loadcontent()
{
    //remove
    let btnremove=document.querySelectorAll('.cart-remove');
    btnremove.forEach((btn)=>{
        btn.addEventListener('click',removeitem);
    });
 
    //quantity
    let changequan=document.querySelectorAll('.cart-quality');
    changequan.forEach((input)=>{
        input.addEventListener('change',quantitychange);
    });

    let cartitem=document.querySelectorAll('.cart-add');
    cartitem.forEach((btn)=>{
        btn.addEventListener('click',addcart);
    })
    
}

function removeitem()
{ 
    if(confirm("Are you sure to remove!!!")){
       this.parentElement.remove();
   }
}

function quantitychange()
{
    if(isNaN(this.value)||this.value<1)
    {
        this.value=1;
    }
}

function addcart()
{
    let food=this.parentElement;
    let title=food.querySelector('.card-title').innerHTML;
    let price=food.querySelector('.card-text').innerHTML;
    let img=food.querySelector('.card-img-top').src;


    let newproductElement= createcart(title,price,img);
    let element=document.createElement('div');
    element.innerHTML=newproductElement;
    let cartbasket=document.querySelector('.content');
    if(confirm('Are you want to add'))
       cartbasket.append(element);
}

function createcart(title,price,img)
{
    return `
    <div class="cart-box">
                    <img src="${img}" class="cartim" alt="...">
                    <div class="detail-box">
                        <div class="food-title">${title}</div>
                        <div class="price-box">
                            <div class="food-price">${price}</div>
                            <div class="cart-price">${price}</div>
                        </div>
                        <input type="number" value="1" class="cart-quality">
                    </div>
                    <ion-icon name='trash' class="cart-remove"></ion-icon>
                </div>
    `;
    
    
}

