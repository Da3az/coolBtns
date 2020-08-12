console.log('on script')

var bgUrls = {
  'btn1' : 'https://images.unsplash.com/photo-1588856005291-986101a095e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'btn2' : 'https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1073&q=80',
  'btn3' : 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'btn4' : 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'btn5' : 'https://images.unsplash.com/photo-1523942839745-7848c839b661?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'btn6' : 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80',
  'btn7' : 'https://images.unsplash.com/photo-1526721940322-10fb6e3ae94a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
  'btn8' : 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
}


var btns = document.getElementsByClassName('oneBtn')
var body = document.getElementsByTagName('body')[0]
console.log(body)

for (var i = 0; i < btns.length; i++) {
  // btns[i].addEventListener('mouseenter',function (e){
  //   this.style.opacity = '1'
  // })
  btns[i].addEventListener('click',function (e){
    console.log(this.id)
    console.log(bgUrls[this.id])
    body.style.backgroundImage = `url(${bgUrls[this.id]})`
    for (var i = 0; i < btns.length; i++) {
      btns[i].style.opacity = '0.2'
      this.style.opacity = '1'
    }
  })
}
