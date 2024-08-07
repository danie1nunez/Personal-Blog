const nightBtn= document.getElementById('night');
const backBtn= document.getElementById('back');

nightBtn.addEventListener('click', function(){
    const bodytag= document.body;
    console.log(bodytag.classList);
    if (bodytag.classList.length=== 0){
        bodytag.classList.add('night');
    }else{
        bodytag.classList.remove('night');
    }
});