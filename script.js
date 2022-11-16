
let note = document.querySelector('.nowplaying')
let keys = document.querySelectorAll('.key')
let hints = document.querySelectorAll('.hints')

window.addEventListener('keydown' , function(e){
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`)
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    if (! key) return;
    const keyNote = key.getAttribute('data-note')

    key.classList.add('playing')
    note.innerHTML = keyNote;
    
    audio.currentTime = 0;
    audio.play()
})

//To stop transition mode
keys.forEach(key => {
    key.addEventListener('transitionend' , function(e){
        key.classList.remove('playing')
    })
});


//add the transition to keys
hints.forEach((elem , index) => {
    elem.style = `transition-delay : ${index * 50}ms`
});