var getDate = function() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var date = date.getDate();
    document.getElementById("date").innerHTML=(`${year}-${month}-${date}`);
}

Array.from(document.querySelectorAll('.pill')).forEach(el => {
    el.addEventListener('click', e => {
        let bg = e.target.style.backgroundColor, color = e.target.style.color
        document.querySelector('.about-skilled h2').classList.add('active')
        document.querySelector('.about-skilled h2').innerHTML = e.target.getAttribute('data-lang')
        switch (e.target.getAttribute('data-lang')) {
            case 'Python':
                document.querySelector('.about-skilled .desc').innerHTML = 'Target Skill Level<div class="progress" data-percent="90"></div><br>Python is a platform independent, interpreted, object-oriented, dynamic typing interactive language. <a href="https://en.wikipedia.org/wiki/Python" target="_blank">Wikipedia</a>'
                break
            case 'C/C++':
                document.querySelector('.about-skilled .desc').innerHTML = 'Target Skill Level<div class="progress" data-percent="70"></div><br>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. <a href="https://en.wikipedia.org/wiki/C_(programming_language) target="_blank">Wikipedia</a>'
                break
            case 'JavaScript':
                document.querySelector('.about-skilled .desc').innerHTML = 'Target Skill Level<div class="progress" data-percent="65"></div><br>JavaScript, often abbreviated as JS, is a scripting programming language commonly used within web browsers. <a href="https://en.wikipedia.org/wiki/Javascript" target="_blank">Wikipedia</a>'
                break
            case 'HTML':
                document.querySelector('.about-skilled .desc').innerHTML = 'Target Skill Level<div class="progress" data-percent="85"></div><br>Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">Wikipedia</a>'
                break
            case 'CSS':
                document.querySelector('.about-skilled .desc').innerHTML = 'Target Skill Level<div class="progress" data-percent="80"></div><br>CSS is a language that describes how the markup language is actually displayed. <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">Wikipedia</a>'
                break
            case 'Go':
                document.querySelector('.about-skilled .desc').innerHTML = 'Target Skill Level<div class="progress" data-percent="60"></div><br>Go is a statically typed, compiled programming language designed at Google. <a href="https://en.wikipedia.org/wiki/Go_(programming_language)" target="_blank">Wikipedia</a>'
                break
            default:
                document.querySelector('.about-skilled h2').classList.remove('active')
                document.querySelector('.about-skilled h2').innerHTML = 'Click the Language!'
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


