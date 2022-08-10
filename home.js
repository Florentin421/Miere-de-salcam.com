  
      //slide

      var slider_img = document.querySelector('.slider-img')
      var images = ['images/borcan.jpg', 'images/galeata.jpg']
      var i = 0

      function prev(){
        if(i <= 0) i =images.length
        i--
        return setImg()
    }

    function next() {
        if(i >= images.length-1) i =-1
        i++
        return setImg()
    }

    function setImg() {
        return slider_img.setAttribute('src', '' + images[i])
    }