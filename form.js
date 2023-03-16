const btn = document.getElementById('button');

window.onload = init;

function init(){
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_6bh6ini';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Sent!');
    }, (err) => {
      alert(JSON.stringify(err));
    });
})};
