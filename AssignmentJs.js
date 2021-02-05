function billingFunction()
{
 var billingName, billingZip,shippingName, shippingZip;

 billingName = document.getElementById('billingName');

 billingZip = document.getElementById('billingZip');

 if (document.getElementById('same').checked)
{
   shippingName = document.getElementById('shippingName').value;
   shippingZip= document.getElementById('shippingZip').value;

   billingName.value = shippingName;
   billingZip.value = shippingZip;
 } 
else 
{
   billingName.value = '';
   billingZip.value = '';
 }
}
