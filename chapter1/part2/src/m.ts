export const hi = '你好'

function fn(a: number, b: number){
    return a + b
}

function fn2(this: Window){
    alert(this)
}

let box1 = document.getElementById('box1')

box1?.addEventListener('click', function(){
    alert('hello')
})