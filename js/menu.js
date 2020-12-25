(function () {
    let bannerNavUl = document.getElementById('banner-nav-ul')
    let bannerNav = document.getElementById('banner-nav')
    let menus = document.querySelectorAll('.menus-box .menu')
    let bannerLis = document.querySelectorAll('#banner-nav-ul li')
    bannerNavUl.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            let t = e.target.getAttribute('data-t')
            console.log(bannerLis[6]);
            for(let i = 0;i<bannerLis.length;i++){
                
                bannerLis[i].className = bannerLis[i].getAttribute('data-t')
            }
            e.target.className += ' current'
            let theMenu = document.querySelector('.menus-box .menu[data-t=' + t + ']')
            console.log(menus);
            for (let i in menus) {
                menus[i].className = 'menu'
            }
            theMenu.className = 'menu current'
        }
    }
    bannerNav.onmouseleave = function(){
        for(let i = 0;i<bannerLis.length;i++){
            bannerLis[i].className = bannerLis[i].getAttribute('data-t')
            menus[i].className = 'menu'
        }
    }
})()