// const video = document.querySelector('video');
// console.log(video);

const aScene = document.querySelector('a-scene');

// const a = document.querySelector('a');
// console.log(a);
// a.click();
// if(video){
//     video.play();
// }
// video.pause();
// setTimeout(()=>{
//     video.play();
// },3000)

// video.addEventListener('ended',(e)=>{
//     console.log(e);
// })
// video.addEventListener('error',(e)=>{
//     console.log(e,"error!!!!!!!!!!!");
// })
const video1 = document.createElement('video')
video1.src="./assets/images/Countdown2_00001.mp4";
video1.autoplay="true";
video1.setAttribute("id","clockVideo");
const aAsset = document.querySelector('a-asset').appendChild(video1);
// const a = document.querySelector('a');
// aScene.appendChild(a);
const sT = setInterval(()=>{
    video1.load();
    video1.autoplay;
    // video1.pause();
    // a.click();
    // video1.play();
    console.log('interval 1');
    
},1000)
video1.addEventListener('playing',(e)=>{
    console.log(e);
    if(sT){
        clearInterval(sT);
    }
})
video1.addEventListener('ended',(e)=>{
    video1.load();
    video1.autoplay;
    // console.log(e,"error!!!!!!!!!!!");
    // const sT = setInterval(()=>{
    //     video1.load();
    //     video1.autoplay;
    //     // video1.pause();
    //     // a.click();
    //     // video1.play();
    //     console.log('interval 2');
    // },1000)
})
video1.addEventListener('error',(e)=>{
    console.log(e,"error!!!!!!!!!!!");
    video1.load();
})
document.body.addEventListener('click',(e)=>{
    console.log(e,"click")
    // if(!video1.play){
    //     video1.load();
    // }
    // video1.load();
    video1.play();
    video1.autoplay;
})


    
    // <a-video src="#clockVideo" width="8" height="6" position="0 3 -7"></a-video> 
    
    const aVideo = document.createElement('a-video');
    aVideo.setAttribute("src","#clockVideo");
    aVideo.setAttribute("width","8");
    aVideo.setAttribute("height","6");
    aVideo.setAttribute("position","0 3 -7");
    // aVideo.src="#clockVideo";
    // aVideo.position="0 3 -7";
    // aVideo.width="8";
    // aVideo.height="6";
    aScene.appendChild(aVideo);