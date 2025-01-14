$(document).ready(function () {
    const carousel = $(".carousel");
    const accordion = $("#accordion");

    //Example JSON Data for the Photo Album
    let albumData = [
        {"src": "Images/image1.jpg","title": "Madam Fiza","date":"2024-01-01" },
        {"src": "Images/image2.jpg","title": "Alipa","date":"2024-01-01" },
        {"src": "Images/image3.jpg","title": "Nurin","date":"2024-01-01" }
    ];

    //Populate Slick Carousel
    albumData.forEach(photo => {
        carousel.append(`<img src = "${photo.src}" alt="${photo.title}">`);
    });

    //Initialize Slick Carousel for creating image slider
    carousel.slick({
        dots:true,
        autoplay:true,
        autoplaySpeed: 3000
    });

    //Populate Accordion with Image Information
    albumData.forEach((photo, index) => {
        accordion.append(`
            <h3>${photo.title}</h3>
            <div>
                <p>Date Taken:<input type = "text" id="date-${index}" class="datepciker" value="${photo.date}"></p>
                <p>Title: <input type="text" id="title-${index}" value="${photo.title}"></p>
            </div>
            `)
    });

    //Initialize Accordion
    accordion.accordion({ heightStyle: "content" });
})