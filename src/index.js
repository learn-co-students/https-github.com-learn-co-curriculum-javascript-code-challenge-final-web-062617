$(document).ready(function(){

	$('#new-image').modal();

})

let addNewPictureButton = document.getElementById("add-new-picture-button")
let imageURL = document.getElementById("image-url")
let captionInput = document.getElementById("caption")
let addPicture = document.getElementById("new-image-submit-button")

const pictures = []

document.addEventListener("DOMContentLoaded", function() {


	addNewPictureButton.addEventListener("click", function(event) {

		event.preventDefault()

		// console.log(newPicture)

		// console.log("hi")

	})

	addPicture.addEventListener("click", function(event) {
		event.preventDefault()

		// debugger

		newPicture = {}
		newPicture.url = imageURL.value
		newPicture.caption = captionInput.value

		pictures.push(newPicture)
		// console.log(newPicture)

		let imagesList = document.getElementById("images-container")

		imagesList.innerHTML = pictures.map(pic => `<img src="${pic.url}">${pic.caption}<br>`).join("")

		
		// debugger
		
		// make a filter that checks to see if the pictures array already includes the imageURL and captionInput.
		let filterOne = pictures.filter(pic => pic.includes(imageURL.value))
		let filterTwo = pictures.filter(pic => pic.includes(captionInput.value))

		// if it does, put out an alert/error msg and return false
		if (imageURL.value === filterOne && captionInput.value === filterTwo) {
			alert("This picture & caption already exist")
			return false
		
		// if NOT, allow them to post the picture
		} else {
			imagesList.innerHTML = pictures.map(pic => `<img src="${pic.url}">${pic.caption}<br>`).join("")
		}


	})














})
