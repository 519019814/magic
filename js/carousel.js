(function(){
    //得到轮播ul
    let carousel_list = document.getElementById('carousel_list')
    let left_btn = document.getElementById('left_btn')
    let right_btn = document.getElementById('right_btn')
    let circel_ol = document.getElementById('circel_ol')
    let circel_lis = circel_ol.getElementsByTagName('li')
    let banner = document.getElementById('banner')
    //克隆第一张li
    let clone_li = carousel_list.firstElementChild.cloneNode(true)
    carousel_list.appendChild(clone_li)
    let idx = 0

    let lock = true

    right_btn.onclick = right_btn_handler
    function right_btn_handler(){
        if(!lock) return
        lock = false

        carousel_list.style.transition = "transform .5s ease 0s"
        idx++
        carousel_list.style.transform = 'translateX(' + -16.66*idx +'%)'

        if(idx>4){
            setTimeout(() => {
                carousel_list.style.transition = 'none'
                carousel_list.style.transform = 'none'
                idx = 0
            }, 500);
        }
        setCircles()
        setTimeout(()=>{
            lock = true
        },500)
    }
    left_btn.onclick = function (){
        if(!lock) return
        lock = false
        if(idx == 0){
            carousel_list.style.transition = 'none'
            carousel_list.style.transform = 'translateX(' + -16.66*5 +'%)'
            idx = 4
            setTimeout(() => {
                carousel_list.style.transition = "transform .5s ease 0s"
                carousel_list.style.transform = 'translateX(' + -16.66*4 +'%)'
                
            }, 0);
        }else{
            idx--   
            carousel_list.style.transform = 'translateX(' + -16.66*idx +'%)'
        }
        setCircles()
        setTimeout(()=>{
            lock = true
        },500)
    
    }
    function setCircles(){
        for(let i in circel_lis){
            if(i == idx % 5){
                circel_lis[i].className = 'current'
            }else{
                circel_lis[i].className=''
            }
        }
    }

    //事件委托
    circel_ol.onclick = function(e){
        if(e.target.tagName.toLowerCase() == 'li'){
            let n = Number(e.target.getAttribute('data-n'))
            idx = n
            carousel_list.style.transform = 'translateX(' + -16.66*idx +'%)'
            setCircles()
        }
    }

    //自动轮播
    let timer = setInterval(right_btn_handler, 1000);

    //鼠标进入轮播暂停
    banner.onmouseenter = function(){
        clearInterval(timer)
    }
    banner.onmouseleave = function(){
        clearInterval(timer)
        timer = setInterval(right_btn_handler, 1000);
    }
})()