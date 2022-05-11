var content = document.getElementsByTagName('body')[0];
var darkMood =document.getElementById('darkmood');
darkMood.addEventListener('click',function(){
    darkMood.classList.toggle('active');
    content.classList.toggle('night')
})