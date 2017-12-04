var addButton = document.querySelector(".addButton");
var nameInput = document.querySelector(".className");
var emailInput = document.querySelector(".emailClass");
var contactInput = document.querySelector(".contactClass");
var displayTable = document.querySelector(".displayTable");



var myTemplate = document.getElementById("myTemplate");
var template = Handlebars.compile(myTemplate.innerHTML)

// ajax call function
addButton.addEventListener("click",function(){
$.ajax({
  url: "api/plumbers",
  type: "post",
  data: {
    name : nameInput.value,
    email: emailInput.value,
    contact: contactInput.value
  },
  success:function(data){
    console.log(data);
  }
})
});

$.ajax({
  url: "api/plumbers",
  type: "get",
  success:function(data){
    console.log(data);
    displayTeble.innerHTML = template({
      plumbers: data
    })
  }
})



















// function buyAjaxCall(url, cb) {
//     var ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.open('POST', "api/plumber");
//     ajaxRequest.onload = function() {
//         var data = JSON.parse('ajaxRequest.responseText');
//         console.log(data);
//         cb(data);
//     };
//     ajaxRequest.send();
// }
