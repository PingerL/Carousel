class Carousel{
  constructor(root){
    this.root = root
    this.panels = Array.from(root.querySelectorAll('.panels a'))
    this.dotCt = root.querySelector('.dots')
    this.dots = Array.from(root.querySelectorAll('.dots span'))
    this.pre = root.querySelector('.pre')
    this.next = root.querySelector('.next')
    this.bind()
  }

  get index(){
    return this.dots.indexOf(this.root.querySelector('.dots .active'))
  }
  get preIndex(){
    return (this.index - 1 + this.dots.length) % this.dots.length
  }
  get nextIndex(){
    return (this.index + 1 ) % this.dots.length
  }

  bind(){
    this.dotCt.onclick = e => {
      if(e.target.tagName !== 'SPAN') return // 确保是小圆点触发的事件
      // let lastIndex = this.index  // 这里的 index 是一个函数，与 get 语法相关
      let curIndex = this.dots.indexOf(e.target)

      this.showPage(curIndex)
      this.setDot(curIndex)
    }
  }

  showPage(curIndex){
    console.log('curIndex ->',curIndex)
    this.panels.forEach(panel => {panel.style.zIndex = 0})
    this.panels[curIndex].style.zIndex = 10
  }

  setDot(curIndex){
    this.dots.forEach(dot => {dot.classList.remove('active')})
    this.dots[curIndex].classList.add('active')
  }

}

const carousel = new Carousel(document.querySelector('.carousel'))