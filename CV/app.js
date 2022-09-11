const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length
for (let i = 0; i<menuLength; i++){
    if(menuItem[i].href === currentLocation) {
        menuItem[i].className = "active"
    }
}


var copyEmailBtn = document.querySelector('.js-phonecopybtn');  
copyEmailBtn.addEventListener('click', function(event) {  
  // Select the email link anchor text  
  var emailLink = document.querySelector('.js-phone');  
  var range = document.createRange();  
  range.selectNode(emailLink);  
  window.getSelection().addRange(range);  

  try {  
    // Now that we've selected the anchor text, execute the copy command  
    var successful = document.execCommand('copy');  
    var msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy phone command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy'); 
  }  

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported  
  window.getSelection().removeAllRanges();  
});




let button = document.querySelector("#mobile");
button.addEventListener("click",()=>{
  const span = document.querySelector("#mobileBtn")
})