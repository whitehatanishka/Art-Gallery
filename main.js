var img =["https://5.imimg.com/data5/SELLER/Default/2021/4/QS/SD/WJ/127684348/whatsapp-image-2021-04-23-at-1-51-33-pm-jpeg-500x500.jpeg","https://rukminim1.flixcart.com/image/416/416/kiow6fk0-0/painting/d/1/l/black-framed-painting-25-target-publications-original-imafyf92hcedryxt.jpeg?q=70","https://s3.ap-south-1.amazonaws.com/rzp-prod-merchant-assets/payment-link/description/dood_fggir9q3atbadb","https://i.pinimg.com/736x/08/1a/1e/081a1ee2e7ab733074b3ab785a9fc59c.jpg"];
var Name =["Fluid Art","Sketch","Doodle Art","Acrylic Panting"];
var number=0
function update() {
    document.getElementById("image").src=img[number];
    document.getElementById("Paintings_n").innerHTML=Name[number];
  number++;
  if(number==4){
  number=0;
  }
}