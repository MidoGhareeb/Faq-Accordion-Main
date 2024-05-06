//variables
let p1 =document.getElementById("p1")
let p2 =document.getElementById("p2")
let p3 =document.getElementById("p3")
let p4 =document.getElementById("p4")
let pl1 =document.getElementById("pl1")
let pl2 =document.getElementById("pl2")
let pl3 =document.getElementById("pl3")
let pl4 =document.getElementById("pl4")
let m1 =document.getElementById("minus1")
let m2 =document.getElementById("minus2")
let m3 =document.getElementById("minus3")
let m4 =document.getElementById("minus4")
let head1 =document.getElementById("head1")
let head2 =document.getElementById("head2")
let head3 =document.getElementById("head3")
let head4 =document.getElementById("head4")
//mouse function
pl1.onclick =function(){
    p1.classList.remove("hide")
    m1.classList.remove("hide")
    pl1.classList.add('hide')
}
m1.onclick =function(){
    p1.classList.add("hide")
    m1.classList.add("hide")
    pl1.classList.remove('hide')
}
head1.onclick=function(){
    p1.classList.toggle('hide')
    m1.classList.toggle("hide")
    pl1.classList.toggle('hide')
}


pl2.onclick =function(){
    p2.classList.remove("hide")
    m2.classList.remove("hide")
    pl2.classList.add('hide')
}
m2.onclick =function(){
    p2.classList.add("hide")
    m2.classList.add("hide")
    pl2.classList.remove('hide')
}
head2.onclick=function(){
    p2.classList.toggle('hide')
    m2.classList.toggle("hide")
    pl2.classList.toggle('hide')
}


pl3.onclick =function(){
    p3.classList.remove("hide")
    m3.classList.remove("hide")
    pl3.classList.add('hide')
}
m3.onclick =function(){
    p3.classList.add("hide")
    m3.classList.add("hide")
    pl3.classList.remove('hide')
}
head3.onclick=function(){
    p3.classList.toggle('hide')
    m3.classList.toggle("hide")
    pl3.classList.toggle('hide')
}


pl4.onclick =function(){
    p4.classList.remove("hide")
    m4.classList.remove("hide")
    pl4.classList.add('hide')
}
m4.onclick =function(){
    p4.classList.add("hide")
    m4.classList.add("hide")
    pl4.classList.remove('hide')
}
head4.onclick=function(){
    p4.classList.toggle('hide')
    m4.classList.toggle("hide")
    pl4.classList.toggle('hide')
}