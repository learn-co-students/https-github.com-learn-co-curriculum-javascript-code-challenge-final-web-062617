$(document).ready(function(){
  
	$("#new-image").modal()

	let allImages = []

	const imageUrl = document.getElementById("image-url") 
	const imageCaption = document.getElementById("caption")
	const submitImage = document.getElementById("new-image-submit-button")
	const imagesContainer = document.getElementById("images-container")

	submitImage.addEventListener('click', function() {
		event.preventDefault()
		createNewImage();
		updateForm()
		imagesContainer.innerHTML = allImages.map(image => renderImages(image))
	})

	function updateForm() {
		imageUrl.value = ""
		imageCaption.value = ""
		$("#new-image").modal('close')
	}

	function createNewImage() {
		let newUrl = imageUrl.value
		let newCaption = imageCaption.value
		let newImage = {}
		newImage["url"] = newUrl
		newImage["caption"] = newCaption
		allImages.push(newImage)
	}

	function renderImages(image) {
		return `
		<div id="wrapper" style="width:100%; text-align:center">
			<img src="${image.url}"/>
			<p>${image.caption}</p>
		</div>`
	}

})
