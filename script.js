window.addEventListener("load",()=>{
    const sounds=document.querySelectorAll('.sound');
    const pads=document.querySelectorAll('.pads div');
    const visual=document.querySelector('.visual');
    const colors=[
        "aquamarine",
        "orangered",
        "rgb(127, 193, 255)",
        "rgb(157, 255, 127)",
        "rgb(165, 127, 255)",
        "rgb(255, 127, 227)"
    ];

    //lets play the sounds
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',()=>{
            sounds[index].currentTime=0;
            sounds[index].play();
            createBubbles(index);
        });
    });
//create a function that creates bubbles

const createBubbles=(index)=>{
    const bubble=document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor=colors[index];
    bubble.style.animation='jump 1s ease';

    bubble.addEventListener('animationend',function(){
        visual.removeChild(this);
    })
}
});