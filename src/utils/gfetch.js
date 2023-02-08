
const prods =[
  {id:0,name:"Masajes",description:"",stock:1 , photo :"https://img.freepik.com/free-psd/skincare-tube-mockup-psd-box-beauty-brands_53876-115961.jpg?w=740&t=st=1675745931~exp=1675746531~hmac=22179da6252ccb2fe5a6fdba64ba5735b3e7d4ad41a3bd10ec568f592254ca8d", precio:10, categoria :"Masajes"},
  {id:1,name:"Masajes",description:"",stock:1 , photo :"https://img.freepik.com/free-psd/skincare-tube-mockup-psd-box-beauty-brands_53876-115961.jpg?w=740&t=st=1675745931~exp=1675746531~hmac=22179da6252ccb2fe5a6fdba64ba5735b3e7d4ad41a3bd10ec568f592254ca8d", precio:10, categoria :"Masajes"},
  {id:2,name:"Masajes",description:"",stock:1 , photo :"https://img.freepik.com/free-psd/skincare-tube-mockup-psd-box-beauty-brands_53876-115961.jpg?w=740&t=st=1675745931~exp=1675746531~hmac=22179da6252ccb2fe5a6fdba64ba5735b3e7d4ad41a3bd10ec568f592254ca8d", precio:10, categoria :"Masajes"},

  {id:3,name:"Depilacion",description:"",stock:3 , photo :"https://img.freepik.com/free-psd/hand-with-cosmetic-pod-mockup_53876-98643.jpg?w=740&t=st=1675745946~exp=1675746546~hmac=41257250841670ec7115430f9be935131c3a5a4ca616daea092c9276f21254ab",precio:50, categoria :"Depilacion"},
  {id:4,name:"Depilacion",description:"",stock:3 , photo :"https://img.freepik.com/free-psd/hand-with-cosmetic-pod-mockup_53876-98643.jpg?w=740&t=st=1675745946~exp=1675746546~hmac=41257250841670ec7115430f9be935131c3a5a4ca616daea092c9276f21254ab",precio:50, categoria :"Depilacion"},
  {id:5,name:"Depilacion",description:"",stock:3 , photo :"https://img.freepik.com/free-psd/hand-with-cosmetic-pod-mockup_53876-98643.jpg?w=740&t=st=1675745946~exp=1675746546~hmac=41257250841670ec7115430f9be935131c3a5a4ca616daea092c9276f21254ab",precio:50, categoria :"Depilacion"},
   
  {id:6,name:"Spa",description:"",stock:2, photo:"https://img.freepik.com/free-psd/glossy-plastic-cosmetic-pump-bottle-branding-mockup_47987-6759.jpg?w=740&t=st=1675745955~exp=1675746555~hmac=49b95ad851a56510b10a2e6917e0ca536f5365c2030ed32549e04f6c6ee94bed",precio:30, categoria : "Spa"},
  {id:7,name:"Spa",description:"",stock:2, photo:"https://img.freepik.com/free-psd/glossy-plastic-cosmetic-pump-bottle-branding-mockup_47987-6759.jpg?w=740&t=st=1675745955~exp=1675746555~hmac=49b95ad851a56510b10a2e6917e0ca536f5365c2030ed32549e04f6c6ee94bed",precio:30, categoria : "Spa"},
  {id:8,name:"Spa",description:"",stock:2, photo:"https://img.freepik.com/free-psd/glossy-plastic-cosmetic-pump-bottle-branding-mockup_47987-6759.jpg?w=740&t=st=1675745955~exp=1675746555~hmac=49b95ad851a56510b10a2e6917e0ca536f5365c2030ed32549e04f6c6ee94bed",precio:30, categoria : "Spa"}
  
]
  
   export const getFetch = ()=>{
  
    return new Promise((resolve, reject) => {
      if (true){
       setTimeout( resolve(prods), 2000 )
      }
      
      
    })
  
   }
   export const getPorductOnly = ( id)=>{
  
    return new Promise((resolve, reject) => {
      if (true){
       setTimeout( resolve(prods[id]), 5000 )
      }
      
      
    })
  
   }
