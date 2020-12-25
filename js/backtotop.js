(function(){
    let backtotop = document.getElementById('backtotop')
    let timer;
    backtotop.onclick = function(){
        clearInterval(timer)
       timer = setInterval(() => {
        document.documentElement.scrollTop -= 100
        if(document.documentElement.scrollTop <= 0){
            clearInterval(timer)
        }
        }, 10);
    }

    window.onscroll = function(){
        let scrollTop = document.documentElement.scrollTop ||  window.scrollY

        if(scrollTop > 1000){
            backtotop.style.display = 'block'
            backtotop.style.bottom = '80px'
        }else{
            backtotop.style.display = 'none'
        }
    }
})()