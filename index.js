var getDate = function() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date = date.getDate();
    document.getElementById("date").innerHTML=(`${year}-${month}-${date}`);
}

var imgs = document.getElementsByTagName("img");
for( var x=0; x < imgs.length; x++ ) {
 imgs[x].onclick = function(){
    window.location.href='info/profile.html';
 };
}

var profiletxt = document.getElementById("profile");
 profiletxt.onclick = function(){
    window.location.href='info/sungho0205.html';
 };

Array.from(document.querySelectorAll('.pill')).forEach(el => {
    el.addEventListener('click', e => {
        let bg = e.target.style.backgroundColor, color = e.target.style.color
        document.querySelector('.about-skilled h2').classList.add('active')
        document.querySelector('.about-skilled h2').innerHTML = e.target.getAttribute('data-lang')
        switch (e.target.getAttribute('data-lang')) {
            case 'JavaScript':
                document.querySelector('.about-skilled .desc').innerHTML = '목표 숙련도<div class="progress" data-percent="85.7"></div><br>자바스크립트는 웹 브라우저 내에서 주로 사용되는 스크립트 프로그래밍 언어입니다. <a href="https://ko.wikipedia.org/wiki/자바스크립트" target="_blank">위키백과</a>'
                break
            case 'HTML':
                document.querySelector('.about-skilled .desc').innerHTML = '목표 숙련도<div class="progress" data-percent="99.8"></div><br>HTML 초보입니다. <a href="https://ko.wikipedia.org/wiki/HTML" target="_blank">위키백과</a>'
                break
            case 'CSS':
                document.querySelector('.about-skilled .desc').innerHTML = '목표 숙련도<div class="progress" data-percent="84.8"></div><br>CSS는 마크업 언어가 실제 표시되는 방법을 기술하는 언어입니다. <a href="https://ko.wikipedia.org/wiki/종속형_시트" target="_blank">위키백과</a>'
                break
            case 'Entry':
                document.querySelector('.about-skilled .desc').innerHTML = '목표 숙련도<div class="progress" data-percent="100"></div><br>엔트리는 기본이죠!<a href="entry.html" target="_blank"> 엔트리에 대하여  </a><a href="scratch.html" target="_blank"> 스크래치</a>'
                break
            default:
                document.querySelector('.about-skilled h2').classList.remove('active')
                document.querySelector('.about-skilled h2').innerHTML = '언어를 클릭해서 자세히 알아보세요!'
                break
        }
        document.querySelector('.about-skilled .desc .progress').innerHTML = `<div class="progress-bar" style="background-color: ${bg}; color: ${color};"><div class="number">${document.querySelector('.about-skilled .desc .progress').getAttribute('data-percent')}%</div></div>`
        setTimeout(() => {
            document.querySelector('.about-skilled .desc .progress .progress-bar').style.width = `${document.querySelector('.about-skilled .desc .progress').getAttribute('data-percent')}%`
        }, 100)
    })
})
getDate();
playAlert = setInterval(function() {
    getDate();
 }, 10000);


