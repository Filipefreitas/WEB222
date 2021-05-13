const checkWindowWidth = (heroImagesMobile, heroImagesDesktop) =>
{
    if(window.innerWidth <= 576)
    {
        heroImages = heroImagesMobile 
    }
    else
    {
        heroImages = heroImagesDesktop 
    }
}

//MAIN
const main = ()=>
{
    //entry point function (Adds organization of cdoe from  a readablity perspective)
    //ARRAY OF DESKTOP IMAGES
    const heroImagesDesktop = new Array();
    heroImagesDesktop[0] = {image: "hero_reopening_desktop.webp"}
    heroImagesDesktop[1] = {image: "hero_FLM_1936_WW84_desktop.webp"};
    heroImagesDesktop[2] = {image: "hero_FLM_1953_CROODS2_desktop.webp"};
    heroImagesDesktop[3] = {image: "hero_AMC-OnDemand_desktop.webp"};
    heroImagesDesktop[4] = {image: "hero_GodfatherCoda_desktop.jpg"};
    heroImagesDesktop[5] = {image: "hero_PTR_Holiday_desktop.webp"};
    heroImagesDesktop[6] = {image: "hero_AMC-OnDemand_desktop.webp"};

    //ARRAY OF MOBILE IMAGES
    const heroImagesMobile = new Array();
    heroImagesMobile[0] = {image: "hero_reopening_mobile.webp"}
    heroImagesMobile[1] = {image: "hero_FLM_1936_WW84_mobile.webp"};
    heroImagesMobile[2] = {image: "hero_FLM_1953_CROODS2_mobile.jpg"};
    heroImagesMobile[3] = {image: "hero_AMC-OnDemand_mobile.webp"};
    heroImagesMobile[4] = {image: "hero_GodfatherCoda_mobile.webp"};
    heroImagesMobile[5] = {image: "hero_PTR_Holiday_mobile.webp"};
    heroImagesMobile[6] = {image: "hero_AMC-OnDemand_mobile.webp"};

    //ARRAY OF HERO CONTENT
    const heroContent = new Array();
    heroContent[0] = {h3: "MOST THEATRES ARE NOW OPEN",  h1: "Welcome Back to the Movies", p:"Most theatres are now open or will reopen soon! As we welcome you back and celebrate 100 years of movies at AMC, our top priority is your health and safety."}
    heroContent[1] = {h3: "AMC STUBS® MERMBER EXCLUSIVE", h1: "You Could Win a Tiara from WW84", p:"See WONDER WOMAN 1984 at AMC 12/25-1/3 and you could win a screen-used tiara! Get tickets now and you'll be entered for a chance to win."};
    heroContent[2] = {h3: "WELCOME BACK TO THE MOVIES", h1: "A New Age of Adventure is at AMC", p:"THe world's first family is in search of a new home when they meet a rival crew, The Bettermans. See THE CROODS: A NEW AGE on the big screen now!"};
    heroContent[3] = {h3: "\u00A0", h1: "An Authentic Comedy", p:"The cast and director of the new buddy cimedy, HALF BROTHERS share now their film balances humor and authentic story of a fatherhood and family. Watch our exclusive interview and get tickets for you and your family."};
    heroContent[4] = {h3: "\u00A0", h1: "An Offer You Can't Refuse", p:"Celebrate the 30th anniversary of the trilogy`s conclusion with THE GODFATHER, CODA! This new director's cut of the third film opens 12/4 at AMC."};
    heroContent[5] = {h3: "\u00A0", h1: "Host a Private Movie Screening This Season", p:"Deck the auditoruim with up to 20 of your friends and family members or escape the holiday shuffle with a screening for one, starting at just $99+tax."};
    heroContent[6] = {h3: "AMC THEATERS ON DEMAND", h1: "Grab Your Holiday Faves on Sale", p:"Don't miss our holiday sales all December at AMC Theatres On Demand. This week, enjoy popular movies on sale or pick up select holiday favorites for just $5!"};

    //REFERENCING DOM ELEMENTS TO BE MANIPULATED
    const h1s = document.querySelector('#hero-section > div > h1');
    const h3s = document.querySelector('#hero-section > div > h3');
    const ps = document.querySelector('#hero-section > div > p');
    const btns = document.querySelectorAll('#hero-section > div > a');
    const sliderUl = document.querySelector('#carousel-nav-control > ul');
    const leftArrow = document.querySelector('#carousel-nav-left');
    const rightArrow = document.querySelector('#carousel-nav-right');
    
    //console.log(h1s);
    //console.log(h3s);
    //console.log(ps);
    //console.log(btns);
    //console.log(navControlLeft);
    //console.log(sliderUl);
    //console.log(leftArrow);
    //console.log(rightArrow);

    //EVENT LISTENERS
    window.addEventListener("resize", () =>
    {
        checkWindowWidth(heroImagesMobile, heroImagesDesktop)
    })

    window.addEventListener("load", () =>
    {
        //alert(window.innerWidth);
        checkWindowWidth(heroImagesMobile, heroImagesDesktop)
    })

    //Dinamically create nav circles
    for(let i = 1; i<= heroContent.length; i++)
    {
        sliderUl.innerHTML += '<i class=' + '"far fa-circle"' + '></i>';
    }

    //carousel arrow flow
    i = 1;
    reverse = false;
    size = heroContent.length;

    leftArrow.addEventListener('click', event => 
    {
        event.preventDefault();
        reverse = false;
    });

    rightArrow.addEventListener('click', event => 
    {
        event.preventDefault();
        reverse = true;
    });

    setInterval(()=>
    {
        checkWindowWidth(heroImagesMobile, heroImagesDesktop); //I need to add this here, since console was prompting an error message >> "heroImages" not defined, even I added an on load function
        if(i < size && reverse == false)
        {
            document.getElementById('hero-section').style.backgroundImage = `url(img/${heroImages[i].image})`; 
            h1s.innerHTML = heroContent[i].h1;
            h3s.innerHTML = heroContent[i].h3;
            ps.innerHTML = heroContent[i].p;
            i++;
        }
        else
        {
            reverse = true;            
            if(i != 0)
            {
                i--;
                document.getElementById('hero-section').style.backgroundImage = `url(img/${heroImages[i].image})`; 
                h1s.innerHTML = heroContent[i].h1;
                h3s.innerHTML = heroContent[i].h3;
                ps.innerHTML = heroContent[i].p;
            }
            else
            {
                i = 1;
                reverse = false;
            }
        }
    }, 5000)
 
} 

main();