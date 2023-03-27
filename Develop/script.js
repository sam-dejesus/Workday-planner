// the object hours grabs the timeboxes and assigns them a key pair corresponding with their number
var hours = {
 9: document.getElementById('hour-9'),
10: document.getElementById('hour-10'),
11: document.getElementById('hour-11'),
12: document.getElementById('hour-12'),
13: document.getElementById('hour-13'),
14: document.getElementById('hour-14'),
15: document.getElementById('hour-15'),
16: document.getElementById('hour-16'),
17: document.getElementById('hour-17')
};


var today = dayjs();
var time = today.format('H')
// this updates the text of the p element with the id currentDay to the current day using dayjs
$('#currentDay').text(today.format('dddd, MMMM D'));
 
  // the var plan's value retrives the value stored in the key named plan from localstorage
  //and it is converted from json to an object
  var plan = JSON.parse(localStorage.getItem('plan'))
  //the textarea's content will be the value from plan
 $('textarea').innerText = plan

// for each of the keys from the object hours a function will take place which will
// grabs the keys from the object hours and turns it into a number value rather then a string and
//compares the key to the time var. depending on the comparison a class will be added to the to the objects key's value
Object.keys(hours).forEach(function(key){
  var hour = hours[key];
  var hourNumber = parseInt(key);
  if (hourNumber < time){
hour.classList.add("past")
  }else if (hourNumber <= time){
    hour.classList.add("present")
  }else{
    hour.classList.add("future")
  }

var plan = localStorage.getItem('plan-' + key);
if (plan){
  $(hour).find('textarea').val(plan);
}
});
//when any button is clicked the function will be called and if the value of the textarea
//matches the value in local storage it will be deleted if not it will save what is written 
// in the local storeage 
$('button').click(function(){
 var textarea = $(this).siblings('textarea');
  var key = 'plan-' + textarea.parent().attr('id').split('-')[1];
  writtenPlan = textarea.val()
  if (localStorage.getItem(key) === writtenPlan){
     localStorage.removeItem(key);
     textarea.val('')
  }else{
    localStorage.setItem(key,textarea.val());
    //notifys the user if something was saved to their local storage
    var respones = $ ('<p>', {
      text: "your items were saved to local storage",
      css:{
        color: 'red'
      }
    })
    $('#head').html(respones);
  }
  
});





