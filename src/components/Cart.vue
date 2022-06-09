<template> 
 <Header/>

    
  <div>
    <section >

  
      <table>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>remove</th>
        </tr>
        <tr v-for='BookInfos in BookInfo' :key='BookInfos' >
          <td>
          <div class="tb">
            <img :src= '`{{BookInfos.book.bookImage}}`' :alt="BookInfos.book"   width="50px" height="50px" class="product-img" />
            <h3 class="product-name"> {{BookInfos.book.bookName}}</h3>
           </div>
          </td>
          <td >
            <h4 class="price">{{BookInfos.book.price}}</h4>
          </td>
          <td>
            <button  class="quantity-adjust" @click="decrement(BookInfos.cartId)">
              -
            </button>
            <strong> {{BookInfos.quantity}}</strong>
            <button class="quantity-adjust"  @click="increment(BookInfos.cartId)">+</button>
          </td>
          <td>{{BookInfos.book.price*BookInfos.quantity}} </td>
          <td>
            <button  class="delete-product"  @click="remove(BookInfos.cartId)">
              x
            </button>
          </td>
        </tr>

      </table>
    </section>
      </div>
      


 
            <div class="Customer">
            <h5>Please enter your details:</h5>
             <input type="text" class="input" id="firstName" 
                  name="firstName" placeholder="Name.." required>
                   <input type="text" class="input1" id="PhoneNo" 
                  name="firstName" placeholder="PhoneNumber" required>
                 <div class="box">
                  <input type="text" class="input2" id="Pincode" 
                  name="firstName" placeholder="Pincode" required>
                   <input type="text" class="input3" id="Location" 
                  name="firstName" placeholder="Locality" required>
                  </div>
                  <div class="add">
                   <textarea name="address" id="address" placeholder="Address" 
                  ></textarea></div>
                  <div class="city">
                   <input type="text" class="input4" id="city" 
                  name="firstName" placeholder="City/town" required>
                  <input type="text" class="input5" id="LandMrk" 
                  name="firstName" placeholder="Landmark" required>
                  </div>
                  <h6 class="tp">Type</h6>
                  <div class="wk">
                   <input  value="no" type="radio" id="no" />
    <label for="no"> Home</label>
    </div>
    <div class="wk1">
    <input  value="no"  type="radio" id="no" />
    <label for="no"> Work</label>
    </div>
    <div class="wk2">
    <input  value="no" type="radio" id="no" />
    <label for="no"> Other</label>
    </div>
    <div class="place-order" >
        <button type="button"  class="btn2 placeorder-button float-right" @click="" >CONTINUE</button>
      </div> 
            </div>
            <div class="container" >
    <div class="card1 mb-3">
      <h5 class="cart-heading">OrderSummery</h5>
      <div class="row g-0" >
        <div class="col-md-4" >
          <img src="../public/assets/Image 20.png" class="img-fluid rounded-start" alt="Loading...">
        </div>
       
            <div class="total">
          <div class="caption">
            <p>
              <strong>Subtotal:</strong>
            </p>
            <p>Shipping:</p>
            <p class="golden">Total:</p>
          </div>
          <div class="num">
            <p>
              <strong>{{ cartTotal | dollar }}</strong>
            </p>
            <p>Free Shipping</p>
            <p class="golden">{{ cartTotal | dollar }}</p>
          </div>
        </div>
         
         
            
        </div>
         
      
      <div class="place-order" >
        <button type="button"  class="btn2 placeorder-button float-right" @click="" >PLACEORDER</button>
      </div> 
      </div>
      
      </div>
    
            
</template>
<script>
import CartService from "../service/CartService";
import Header from './Header.vue'

export default {
  name: 'Cart',
  components: {
        Header
    },
     data() {

    return {
    
      BookInfo: [],
    }
  },
  methods: {
  remove(id){
        console.log(id)
           CartService
             .deleteContact(id)
             .then((data) => {
               console.log(data)
                    window.location.reload();
             
               });
              
           },
       
        getBookCart(){
            CartService.getAllCart().then((response) => {
              console.log(response.data.data);
                this.BookInfo = response.data.data;   
            });
        },
         increment(id) {
           const counter=this.BookInfo.quantity;
	  	counter++ ;
     console.log(counter);
    
      this.updateCartQuantity(id,counter);
	  },
    decrement(id) {
	  	// this.counter--;

	  },
    updateCartQuantity(id,quantity){
      console.log(id,quantity)
           CartService
             .updateQuantity(id,quantity)
             .then((data) => {
               console.log(data)
                  //  window.location.reload();
             
               });
              
           },
    },
          
 created() {
        this.getBookCart();
      
    },
}   





 



</script>
<style>
/*Cust*/
.Customer{
  width: 1100px;
    height: auto;
  margin-left:100px;
  margin-top:10px;
top: 373px;
left: 177px;

/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DCDCDC;
border-radius: 1px;
opacity: 1;
}
h5{
  margin-left:30px;
  
  top: 394px;
left: 213px;

height: 18px;
/* UI Properties */
text-align: left;

font-family: Verdana, Geneva, Tahoma, sans-serif;
letter-spacing: 0px;
font-size:bold;
color: #333232;
opacity: 1;
}
.input{
  margin-right:15px;
  top: 428px;
left: 213px;
width: 251px;
height: 45px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DCDCDC;
opacity: 1;
}
.input1{
  
  top: 428px;
left: 474px;
width: 251px;
height: 45px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DCDCDC;
opacity: 1;
}
.input2{
  margin-top:-90px;
  margin-right:15px;
  top: 481px;
left: 213px;
width: 251px;
height: 45px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DCDCDC;
opacity: 1;
}
.input3{
  top: 481px;
left: 474px;
width: 251px;
height: 45px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DCDCDC;
opacity: 1;
}
.input4{
   margin-right:15px;
  top: 628px;
left: 213px;
width: 251px;
height: 45px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DCDCDC;
opacity: 1;
}
.input5{
  top: 628px;
left: 474px;
width: 251px;
height: 45px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DCDCDC;
opacity: 1;
}
.box{
  margin-top:30px;
  
  
}
.tp{
  margin-left:130px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
  top: 691px;
left: 217px;
width: 26px;
height: 15px;
/* UI Properties */
text-align: left;

letter-spacing: 0px;
color: #333232;
opacity: 1;
}
.add{
   margin-top:30px;
}
.city{
  margin-top:30px;
}
.wk{
  display:flex;
  margin-left:200px;
  top: 715px;
left: 242px;
width: 32px;
height: 15px;
/* UI Properties */
text-align: left;
font: normal normal normal 12px/15px Lato;
letter-spacing: 0px;
color: #333232;
opacity: 1;
}
.wk1{
  display:flex;
  margin-left:400px;
  margin-top:-10px;
  top: 715px;
left: 384px;
width: 30px;
height: 15px;
/* UI Properties */
text-align: left;
font: normal normal normal 12px/15px Lato;
letter-spacing: 0px;
color: #333232;
opacity: 1;
}
.wk2{
  display:flex;
  margin-left:600px;
  margin-top:-10px;
  top: 715px;
left: 523px;
width: 32px;
height: 15px;
/* UI Properties */
text-align: left;
font: normal normal normal 12px/15px Lato;
letter-spacing: 0px;
color: #333232;
opacity: 1;
}
textarea{
  top: 534px;
left: 213px;
width: 512px;
height: 82px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DCDCDC;
opacity: 1;
}


/***/
.logo-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  margin-left: 150px;
}

.addressBook-text {
  font: normal normal bold 25px/27px Montserrat;
  text-align: left;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
  color: white;
  margin-left: 10px;
  margin-right: 20px;
}
.quant-text {
  display: inline-block;
  text-align: center;
  width: 140px;
  padding: 8px;
  padding: 8px;
  @extend .special;
}

.quantity {
  border: 2px solid black;
  width: 235px;
  padding-left: 3px;
  border-radius: 1000px;
  background: #fff;
  margin-left: 20px;
}




.form-inline[_ngcontent-rgt-c48] {
  display: flex;
  flex-direction: row;
  align-items: center;
}


form {
  display: contents;
  margin-top: 2.5em;
}
.form-control {
  /* display: block; */
  
  display: block;
  width: 440px;
  padding: 0.375rem 0.75rem;
  margin: 2px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

.navbar{
  background-color: #A03037;
  height: 15mm;
}
.img{
  margin-left: 3mm;
}

.container{
  background-color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.card1{
  width: 40%;
    height: 30%;
    margin-left: 200px;
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  height: auto;
  border: 2px solid lightgray;
  margin-top: 15px;
   margin-left: 100px;
  border-radius: 5px;
  
}
.row{
  height: auto;
  width: auto;
  flex:0 0 21%;
}
.card-body{
  margin: auto;
}
.card-title{
  margin-top: 30px;
}
.img-fluid{
  margin: 20px 10px 20px 20px;
 
 
}
.quantity-change{
  display: flex;
  margin-top: 40px;
}
.book-quantity{
  width: 40px;
  margin-right: 10px;
}
.quantity-button{
  font-size: 12px;
  margin-right: 10px;
  border-radius: 55%;
  font-weight: bolder;
  top: 284px;

/* UI Properties */
background: #FAFAFA 0% 0% no-repeat padding-box;
border: 1px solid #DBDBDB;
opacity: 1;
}
.remove{
  text-decoration: underline;
  color: black;
  font-weight: bolder;
  margin-left: 40px;
  cursor: pointer;
}
.customer{
  width: 1100px;
  height: auto;
  background-color: white;
  margin-top: 10px;
  padding: 40px 40px 40px 40px;
  border:1px solid lightgray;
}
.form-constrains{
  display: flex;
  flex-wrap: wrap;
}

.row-content1{
  margin-right:200ppx;
  margin-top:20px;

/* UI Properties */
text-align: left;

color: #333232;
opacity: 1;
}
.place-order{
  margin: 30px 20px 20px 750px;
 
 
  color:black;
  border-radius: 5px;
}
.btn2{
   margin-top:-30px;

  font: normal normal normal 14px/29px Roboto;
  background-color: #1073dc;
  border: none;
  color: white;
  text-align: center;
  /* font-size: 16px; */
  margin: 4px 15px;
  opacity: 1;
  transition: 0.3s;
  display: inline-flexbox;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px;
 
}
.heading{
  display: flex;
  margin-bottom: 20px;
  background-color: #a03037;
}
.search{
  margin-top: 18px;
  border-radius: 5px;
  margin-left: 100px;
  height: 30px;
  width: 450px;
  border-color:#a03037;
}
.logo{
  width: 20px;
  height: 20px;
  margin-left: 70px;
  margin-top: 20px;
}
.cart-image{
  width: 30px;
  height: 30px;
  margin: 18px 2px 10px 2px;
}
.cart-name{
  margin: 20px 2px 2px 200px;
  color: white;
}
.cart-items{
  border-radius: 50%;
  background-color: white;
  height: 20px;
  width: 12px;
  font-weight: bolder;
  margin-top: 15px;
}
.cart-heading{
  margin-left: 10px;
  
}
button{
  border-radius: 5px;
  color: black;
  font-weight: bolder;
}
.continue{
  margin-top: 20px;
  margin-left: 850px;
}
.checkout{
  margin-top: 60px;
  margin-left: 500px;
}
input{
  border-radius: 5px;
}
.col-md-4{
  margin-left:-200px;
  margin-top:50px;
}
.col-md-8{
  margin-left:200px;
  margin-top:-180px;
}
.row-content{
  top: 373px;
  margin-left:200px;
  margin-top:20px;
left: 177px;
width: 774px;
height: 60px;
/* UI Properties */
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #DCDCDC;
border-radius: 1px;
opacity: 1
}
.label text{
  top: 474px;
left: 213px;
width: 104px;
height: 18px;
/* UI Properties */
text-align: left;
font: normal normal normal 15px/18px Lato;
letter-spacing: 0px;
color: #333232;
opacity: 1;
}
/*Cust*/
top: 394px;
left: 213px;
width: 115px;
height: 18px;
/* UI Properties */
text-align: left;
font: normal normal normal 15px/18px Lato;
letter-spacing: 0px;
color: #333232;
opacity: 1;
/*&&&&&&&&&&&&&&&&&&*/
<style lang="scss" scoped>
.product-img {
  float: left;
  margin-right: 15px;
  width: 100px;
}
.total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 100px;
  margin-left:230px;
  margin-top:-170px;
}
.tb{
  display:flex;
 width:90px;
  margin-left:90px;
}
table {
  width: 100%;
  
  margin-top: 20px;
}
tr {
  text-align: center;
  width:20px;
}
th {
  padding: 10px 0;
}
td,
th {
  border-bottom: 1px solid #ccc;
}
.golden {
  background: #f2eee2;
  font-weight: bold;
  padding: 10px;
}
.product-name,
.product-size {
  text-align: left;
 
}
.product-name {
 
  margin-left:150px;
}
.product-size {
  font-weight: 100;
}

button a {
  color: white;
  transition: 0.3s all ease;
}
.delete-product,
.quantity-adjust:first-of-type,
.quantity-adjust:last-of-type {
  padding: 5px 7px;
  border: none;
}
.quantity-adjust:first-of-type {
  margin-right: 5px;
}
.quantity-adjust:last-of-type {
  margin-left: 5px;
}
.delete-product:hover {
  background-color: rgb(255, 85, 85);
  border-radius: 100%;
  border: none;
}
.delete-product:focus,
.delete-product:active {
  outline: none;
}
@media screen and (min-width: 700px) {
  .payment {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 100px;
  }
  .total {
    width: 90%;
  }
}
@media screen and (max-width: 699px) {
  .payment {
    width: 94%;
    margin-left: 2%;
  }
}
</style>