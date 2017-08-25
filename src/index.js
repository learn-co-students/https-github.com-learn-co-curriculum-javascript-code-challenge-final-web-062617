$(document).ready(function(){
  const Post = createPostClass()
  // your code here!
  let newButton = document.getElementById('add-new-picture-button')
  newButton.addEventListener('click', function(){
    // alert('clicked')
    $('#new-image').modal();
  })
  let newPicture = document.getElementById('photo-form')
  newPicture.addEventListener('click', function(){
    event.preventDefault()
    //get the value of the url
    urlEl = document.getElementById('image-url')
    //let url = something.value
    //get the value of the caption
    captionEl = document.getElementById('caption')

    //create handle on the submit button (within the modal)
    let submitButton = document.getElementById('new-image-submit-button')
    //then add an event listener to that handle (the button)
    //when the event listener is triggered it creates a new Post object via the Post constructor, passing in the urlEl.value and commentEl.value
    //presuming I have a post object- then:
    //create a handle on the <div> where I want to place the new posts
    //write a render function of the Post class mapping over all array elements- creating code to be joined
    //using the handle on the approppriate div- assign the .innerHTML to be the new HTML made by the process of mapp9ing over the Post.all array

    let pict_post = new Post(urlEl.value, captionEl.value)
  })
  //create a new Thing class with an all function...  done
  //create a new 'thing' object with the url and caption values as arguments
})
  let flower = document.getElementById('flower')
  flower.innerHTML = `<img src = "https://goo.gl/jyLF6f">`


function createPostClass(){

  const all = []

  return class Post {

    constructor(url, comment){
      this.url = url
      this.comment = comment
      all.push(this)
      console.log('new post')
    }

    static all (){
      return all
    }

    render(){

      return(`
      <h5> ${this.name} </h5>
      `)

    }
    static renderAll(){
      const allPostsHTML = this.all().map(post=> post.render()).join("")

      return(`
      <div>
      ${allPostsHTML}
      </div>
      `)
    }
  }
}
