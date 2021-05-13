const loadModal = (btn_id, movieDetails, modalBanner, modalTitle, modalDirector, modalWriter, modalStars, modalRating, modalExternalLink, modalDescription, modalTrailer) =>
{
    //console.log(btn_id);
    modalBanner.src = `../img/${movieDetails[btn_id - 1].image}`; 
    modalTitle.innerHTML = movieDetails[btn_id - 1].title; 
    modalDirector.innerHTML = movieDetails[btn_id - 1].director; 
    modalWriter.innerHTML = movieDetails[btn_id - 1].writers; 
    modalStars.innerHTML = movieDetails[btn_id - 1].stars; 
    modalRating.innerHTML = movieDetails[btn_id - 1].rating; 
    modalExternalLink.href = movieDetails[btn_id - 1].externalLink; 
    modalDescription.innerHTML = movieDetails[btn_id - 1].description; 
    modalTrailer.src = movieDetails[btn_id - 1].trailer; 
}

const showModal = (modal) =>
{
    modal.classList.remove("hide");
}

const hideModal = (modal) =>
{
    modal.classList.add("hide");
}

//MAIN
const main = ()=>
{
    //entry point function (Adds organization of cdoe from  a readablity perspective)
    //ARRAY OF MOVIES FOR MOVIE DETAILS MODAL
    const movieDetails = new Array();
    movieDetails[0] =
    {
        image: "poster_into_the_wild.jpg"
        , title: "Into the Wild"
        , director: "Sean Penn"
        , writers: "Sean Penn (screenplay), Jon Krakauer (book) "
        , stars: "Stars: Emile Hirsch, Vince Vaughn, Catherine Keener"
        , rating: "Rating: 10/10"
        , externalLink: "https://www.imdb.com/title/tt0758758/"
        , description: "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life"
        , trailer: "https://www.youtube.com/embed/XZG1FzyB8DI"
    }
    
    movieDetails[1] = 
    {
        image: "poster_knives_out.jpg"
        , title: "Knives Out"
        , director: "Rian Johnson"
        , writers: "Rian Johnson"
        , stars: "Daniel Craig, Chris Evans, Ana de Armas"
        , rating: "10/10"
        , externalLink: "https://www.imdb.com/title/tt8946378/"
        , description: "A detective investigates the death of a patriarch of an eccentric, combative family."
        , trailer: "https://www.youtube.com/embed/sL-9Khv7wa4"
    }
    
    movieDetails[2] =
    {
        image: "poster_toy_story_4.jpg"
        , title: "Toy Story 4"
        , director: "Josh Cooley"
        , writers: "John Lasseter (original story by), Andrew Stanton (original story by)"
        , stars: "Stars: Tom Hanks, Tim Allen, Annie Potts"
        , rating: "10/10"
        , externalLink: "https://www.imdb.com/title/tt1979376/"
        , description: 'When a new toy called "Forky" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.'
        , trailer: "https://www.youtube.com/embed/wmiIUN-7qhE"
    }
    
    movieDetails[3] =
    {
        image: "poster_gran_torino.jpg"
        , title: "Gran Torino"
        , director: "Clint Eastwood"
        , writers: "Nick Schenk (screenplay), Dave Johannson (story)"
        , stars: "Clint Eastwood, Bee Vang, Christopher Carley"
        , rating: "10/10"
        , externalLink: "https://www.imdb.com/title/tt1205489/"
        , description: "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino."
        , trailer: "https://www.youtube.com/embed/RMhbr2XQblk"
    }
    
    movieDetails[4] =
    {
        image: "poster_bohemian_rhapsody.jpg"
        , title: "Bohemian Rhapsody"
        , director: "Bryan Singer"
        , writers: "Anthony McCarten (story by), Peter Morgan (story by)"
        , stars: "Rami Malek, Lucy Boynton, Gwilym Lee"
        , rating: "10/10"
        , externalLink: "https://www.imdb.com/title/tt1727824/"
        , description: "The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid (1985)."
        , trailer: "https://www.youtube.com/embed/6S9c5nnDd_s"
    }
    
    movieDetails[5] =
    {
        image: "poster_get_out.jpg"
        , title: "Get Out!"
        , director: "Jordan Peele"
        , writers: "Jordan Peele"
        , stars: "Daniel Kaluuya, Allison Williams, Bradley Whitford"
        , rating: "10/10"
        , externalLink: "https://www.imdb.com/title/tt5052448/"
        , description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
        , trailer: "https://www.youtube.com/embed/DzfpyUB60YY"
    }
    
    movieDetails[6] =
    {
        image: "poster_the_wolf_of_wall_street.jpg"
        , title: "The Wolf of Wall Street"
        , director: "Martin Scorsese"
        , writers: "Terence Winter (screenplay), Jordan Belfort (book)"
        , stars: "Leonardo DiCaprio, Jonah Hill, Margot Robbie"
        , rating: "10/10"
        , externalLink: "https://www.imdb.com/title/tt0993846/"
        , description: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government."
        , trailer: "https://www.youtube.com/embed/iszwuX1AK6A"
    }    
   
    movieDetails[7] =
    {
        image: "poster_wonder_woman.jpg"
        , title: "Wonder Woman"
        , director: "Patty Jenkins"
        , writers: "Writers: Allan Heinberg (screenplay by), Zack Snyder (story by)"
        , stars: "Stars: Gal Gadot, Chris Pine, Robin Wright"
        , rating: "10/10"
        , externalLink: "https://www.imdb.com/title/tt0451279/"
        , description: "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny."
        , trailer: "https://www.youtube.com/embed/1Q8fG0TtVAY"
    }
    
    //REFERENCING DOM ELEMENTS TO BE MANIPULATED
    const seeMoreBtns = document.getElementsByClassName("see-more");
    const modal = document.querySelector(".modal");
    const closeButton = document.querySelector(".close-modal");

    ////form dields
    const modalBanner = document.querySelector("#modal-banner");
    const modalTitle = document.querySelector("#modal-title");
    const modalDirector = document.querySelector("#modal-director");
    const modalWriter = document.querySelector("#modal-writers");
    const modalStars = document.querySelector("#modal-stars");
    const modalRating = document.querySelector("#modal-rating");
    const modalExternalLink = document.querySelector("#modal-external-link");
    const modalDescription = document.querySelector("#modal-movie-description");
    const modalTrailer = document.querySelector("#modal-trailer");

    //console.log(seeMoreBtns);
    //console.log(modal);
    //console.log(closeButton);
    //console.log(modalBanner);
    //console.log(modalDirector);
    //console.log(modalWriter);
    //console.log(modalStars);
    //console.log(modalRating);
    //console.log(modalExternalLink);
    //console.log(modalDescription);
    //console.log(modalTrailer);

    //EVENT LISTENERS
    for (let i = 0; i < seeMoreBtns.length; i++)
    {
        seeMoreBtns[i].addEventListener('click', event => 
        {
            event.preventDefault(); //I am going to live it here as I will not delete the pages I previously did for each movie; 
            showModal(modal);
            btn_id = event.target.id;
            loadModal(btn_id, movieDetails, modalBanner, modalTitle, modalDirector, modalWriter, modalStars, modalRating, modalExternalLink, modalDescription, modalTrailer);
        });
    } 

    closeButton.addEventListener('click', event =>
    {
        hideModal(modal);
    });
} 

main();