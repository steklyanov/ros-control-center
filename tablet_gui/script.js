let lid_action = false;

let videos = [
    "1.mp4",
    "2.mp4",
    "3.mp4"
];
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let lid = document.getElementById('lid_control');
let video_container = document.getElementById('first_video');
let video_frame = document.getElementById('first_video_div');
lid.style.display='none';
function disable_buttons_enable_video(src) {
    btn1.style.display='none';
    btn2.style.display='none';
    btn3.style.display='none';
    video_frame.style.display='block';
    video_container.setAttribute("src", src);
}

function enable_buttons_disable_video() {
    video_frame.style.display='none';
    btn1.style.display='block';
    btn2.style.display='block';
    btn3.style.display='block';
}
disable_buttons_enable_video(videos[0]);

function play_video() {
    video_container.play();
    video_container.addEventListener("ended", first_answer)
}

function first_answer() {
    enable_buttons_disable_video()
}

function second_stage() {
    disable_buttons_enable_video(videos[1]);
    video_container.play();
    video_container.addEventListener("ended", second_answer)
}

function second_answer() {
    btn1.setAttribute("onclick", 'third_stage()');
    btn2.setAttribute("onclick", 'third_stage()');
    btn3.setAttribute("onclick", 'third_stage()');
    btn1.innerHTML = 'Живых устриц';
    btn2.innerHTML = 'Вареную собаку';
    btn3.innerHTML = 'Жареных тараканов';
    enable_buttons_disable_video();
}

function third_stage() {
    disable_buttons_enable_video(videos[2]);
    video_container.play();
    video_container.addEventListener("ended", third_answer)
}

function third_answer() {
    enable_buttons_disable_video();
    btn1.setAttribute("onclick", 'final()');
    btn2.setAttribute("onclick", 'final()');
    btn3.setAttribute("onclick", 'final()');
    btn1.innerHTML = 'Убью её';
    btn2.innerHTML = 'Позволю себя укусить';
    btn3.innerHTML = 'Замру';
}

function final() {
    btn1.style.display='none';
    btn2.style.display='none';
    btn3.style.display='none';
    lid.style.display='block';
}

document.onkeypress = function (event) {
    console.log(event);
    if (event.key == '1') {
        play_video();
    }
};
