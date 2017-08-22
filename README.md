# JavaScript Code Challenge

## Objectives

+ DOM Manipulation
+ Events and Event Handlers
+ Callbacks
+ Constructors / Prototypes or ES6 Classes


## Instructions

Today we're going to build out an image-sharing application called "DIY-Gram". It's very Instagram-ish in functionality.

When users want to add a picture to their feed they will click the 'Add a picture' button and provide an image URL and a caption in a modal. When the form is submitted, we should append that image into the DOM (We included the Materialize CSS library to assist with the modal and image card styling).


DIY-Gram is anti-persistence, so we won't be making any requests to a backend. Each time we refresh, all the photos will disappear.

## Part I
![Challange Part I](./Code-Challange-Demo-Part-I.gif)

Build out the feature so that it functions in accordance with the gif above. Don't overthink your code, just get the basic functionality working with a procedural approach.

## Part II
![Challange Part II](./Code-Challange-Demo-Part-II.gif)

Congratulations on getting the core functionality working.

Now let's add some client side validations. If an image submission includes the same url or caption of an existing image display an error message to the user and do not add the image.

For this part of the challenge do your best to apply good programming practices to your solution.

## Notes on creating a modal in Materialize CSS
To open a modal using a trigger:
```
// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
$('.modal').modal();
```

The element responsable for closing the modal (likely the form submit button) should should include the `modal-close` class in order to automatically close the modal.

You can view the Materialize CSS documentation [here](http://materializecss.com/modals.html).
