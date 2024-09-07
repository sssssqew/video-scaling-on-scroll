import { lerp } from "./utils.js"

const video = document.querySelector('video')
const videoSection = document.querySelector('#video')

window.addEventListener('scroll', () => {
    animateVideo()
})

function animateVideo(){
    let {bottom} = videoSection.getBoundingClientRect()
    // console.log(bottom) // 브라우저 상단과 요소 하단까지의 거리. 스크롤 내리면 요소가 올라오면서 bottom 값은 점점 작아짐
    let diff = bottom - window.innerHeight
    // console.log(diff) // 스크롤 내리다가 더이상 스크롤 내리지 못하고 바닥이면 0. 스크롤 내리는동안 양수값이면서 점점 작아짐.
    // console.log(diff * 0.0005)
    let scale = 1 - diff * 0.0005 // diff 는 양수값(1 -> 0)이면서 점점 작아지므로 scale 값은 점점 커지면서 1에 가까워짐.
    // console.log(scale)
    scale = scale < .2 ? .2 : scale > 1 ? 1 : scale // scale 값을 0.2와 1사이로 제한
    console.log(scale)
    video.style.transform = `scale(${scale})`
}