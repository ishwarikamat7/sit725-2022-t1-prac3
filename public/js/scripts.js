const cardList = [
    {
        title: "puppy 2",
        image: "images/puppy2.jpg",
        link: "About puppy 2",
        description: "Demo desciption about puppy 2"
    },
    {
        title: "puppy 3",
        image: "images/puppy3.jpg",
        link: "About puppy 3",
        description: "Demo desciption about puppy 3"
    }
]

const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}
const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text grey-text text-darken-4">' + item.description + '</p>' +
            '</div></div></div>';
    $("#card-section").append(itemToAppend)
 });

}

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
     submitForm();
    })
    addCards(cardList);
    $('.modal').modal();
});