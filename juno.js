let SlidePosition=0;
const sliders=document.querySelectorAll('.slider-items');
const totalSlider=sliders.length;
const btnPrev=document.querySelector('#btn-pre');
const btnNext=document.querySelector('#btn-next');

btnPrev.addEventListener('click',function(){
    PrevSlide();
});
btnNext.addEventListener('click',function(){
    NextSlide();
});
function updatePosition(){
    sliders.forEach(slide=>{
        slide.classList.remove('active');
        slide.classList.add('hidden');
        
    })
    sliders[SlidePosition].classList.add('active');
}

function PrevSlide(){
    if(SlidePosition==0){
        SlidePosition=totalSlider-1;
    }else{
        SlidePosition--;
    }
    updatePosition();
}
function NextSlide(){
    if(SlidePosition==totalSlider-1){
        SlidePosition=0;
    }else{
        SlidePosition++;
    }
    updatePosition();
    
}
const days=document.querySelector('#days');
const hours=document.querySelector('#hours');
const minutes=document.querySelector('#minutes');
const seconds=document.querySelector('#seconds');
function updateTime(){
    const currentYear=new Date().getFullYear();
const newYear=new Date('October 18 2025 00:00:00');
const currentDate=new Date();
const diff=newYear-currentDate;
const d=Math.floor(diff/1000/60/60/24);
const h=Math.floor((diff/1000/60/60)%24);
const m=Math.floor((diff/1000/60)%60);
const s=Math.floor((diff/1000)%60);

days.innerHTML=d<10?"0"+d:d;
hours.innerHTML=h<10?"0"+h:h;
minutes.innerHTML=m<10?"0"+m:m;
seconds.innerHTML=s<10?"0"+s:s;

}

  

