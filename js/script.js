let playerState = "idle";

const dropDown = document.getElementById('animations');


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(canvas.clientHeight);

const CANVAS_WIDTH = canvas.width=canvas.clientWidth;
const CANVAS_HEIGHT = canvas.height=canvas.clientHeight;
console.log(CANVAS_WIDTH)

let imgArray = new Array();

const spriteAnimations = [];
const animationStates= [
    {
        name:'run',
        frames:13,
        src:`images/03_run/skeleton-03_run_`,
        width:1043,
        height:824,
    },
    {
        name:'idle',
        frames:21,
        src:`images/02_idle/skeleton-02_idle_`,
        width:1100,
        height:785,
    },
    {
        name:'jump',
        frames:11,
        src:`images/04_jump/skeleton-04_jump_`,
        width:834,
        height:837,
    },
    {
        name:'fall',
        frames:11,
        src:`images/05_fall/skeleton-05_fall_`,
        width:793,
        height:966,
    },
    {
        name:'ko',
        frames:31,
        src:`images/06_ko/skeleton-06_ko_`,
        width:1323,
        height:998,
    },
    {
        name:'dizzy',
        frames:21,
        src:`images/07_dizzy/skeleton-07_dizzy_`,
        width:1300,
        height:957,
    },
    {
        name:'get_hit',
        frames:11,
        src:`images/08_get_hit/skeleton-08_get_hit_`,
        width:1076,
        height:1112,
    },
    {
        name:'attack',
        frames:16,
        src:`images/09_attack/skeleton-09_attack_`,
        width:1138,
        height:794,
    },
];

animationStates.forEach((state)=>{
    spriteAnimations[state.name] = {
        frames:state.frames,
        src:state.src,
        width:state.width,
        height:state.height, 
    }
});

let gameFrame =0;
const staggerFrames = 2;


function fillupSource(animation){
    for (let index = 0; index < animation.frames; index++) {
        imgArray[index] = new Image();  
        imgArray[index].src = `${animation.src}${String(index).padStart(2,'0')}.png`;  
    }
}

dropDown.addEventListener('change',function(e){
    playerState = e.target.value; 
    fillupSource(spriteAnimations[playerState]);
})
fillupSource(spriteAnimations[playerState]);
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames)%spriteAnimations[playerState].frames;
    ctx.drawImage(imgArray[position],0,0,spriteAnimations[playerState].width,spriteAnimations[playerState].height,0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();