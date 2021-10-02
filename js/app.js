/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//add new section
const newsec = document.querySelector('main');             //selecting the main tag to add a child section to it
const sec = document.createElement('section');                 //create a new section 
sec.setAttribute('id', 'section4');                            //set the id 
sec.setAttribute('data-nav', 'Section 4');                      //set the data attribute
const di = document.createElement('div');                        //create a div tag like a container for the head and paragraph
di.setAttribute('class', "landing__container");                  //set the class to the div     
const head = document.createElement('h2');                         //create head 
head.innerHTML = "Setion 4";                                       //create the text for the head
const para1 = document.createElement('p');                        //create paragrah
para1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
const para2 = document.createElement('p');                           // create second paragraph
para2.innerHTML = "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
di.appendChild(head);                                     //make the head and then the 1st paragraph and then the second paragraph as child to div tag
di.appendChild(para1);
di.appendChild(para2);
sec.appendChild(di);                                         //make the div as child to the section
newsec.appendChild(sec);                                        //and the section as child to the main tag
//create nav bar
const numberOfSection = document.querySelectorAll('section');          //selecting all sections
const df = document.createDocumentFragment();                          //create a document fragment to add all the item in it
for (let i = 1; i <= numberOfSection.length; i++) {                       //making for loop on the sections to create the item in the navbar   
    const navbar = document.createElement('li');
    const butt = document.createElement('a');
    navbar.appendChild(butt);
    const y = document.querySelector('#section' + i);
    butt.innerHTML = y.getAttribute('data-nav');
    butt.style.color="white";
    butt.classList.add('menu__link');
    butt.setAttribute('id', 'section' + i);
    df.append(navbar);
    butt.addEventListener('click', function () {                            //make an event listener when clicking in any item in the nav bar to smooth scroll on it 
        y.scrollIntoView({ behavior: 'smooth' });
    });
}
const ulist = document.querySelector('ul');
ulist.append(df);                                                  //add the document fragment to the unordered lidt (ul tag)

document.querySelector('nav').style.backgroundColor='cadetBlue';
//make sections collapsible
const hidepar = document.querySelectorAll('p');
const heads = document.querySelectorAll('h2');
const divs = document.querySelectorAll('div');
for (let c = 0; c < heads.length; c++) {
    numberOfSection[c].style.minHeight = '0vh';       
    hidepar[c + c].style.display = 'none';
    hidepar[c + c + 1].style.display = 'none';
    divs[c].style.padding = '0em';
    const g = document.createElement('button');      //create a button to click on it to view content
    g.innerHTML = "+";
    g.style.cssText = 'color:white;cursor:pointer;background:none;border:none;position:center;font-size:30;width:100%;'
    if (c % 2 === 0) {
        g.style.textAlign = "right"
    }
    else {
        g.style.textAlign = "left"
    }
    heads[c].append(g);

    g.addEventListener('click', function () {            //make an event when clicking on the button
        if (g.innerHTML === '+') {
            divs[c].style.padding = '2em';
            numberOfSection[c].style.minHeight = '80vh';
            hidepar[c + c].style.display = 'block';
            hidepar[c + c + 1].style.display = 'block';
            g.innerHTML = '-';

        }
        else {
            divs[c].style.padding = '0em';
            numberOfSection[c].style.minHeight = '0vh';
            hidepar[c + c].style.display ='none';
            hidepar[c + c + 1].style.display = 'none';
            g.innerHTML = '+';
        }
    }
    );

}


//remove and add active class from sections and list item  //and hide the nav bar when no scrolling and add a scroll button
window.onscroll = whenScroll;
const s = document.querySelectorAll('a');


//create a scroll to top button
const b = document.createElement('button');
b.innerHTML = 'Scroll to top';
newsec.appendChild(b);
b.style.cssText = 'color:black;background-color:yellow;border:none;border-radius:20px;font-size:25;cursor:pointer;display:none;position:fixed;bottom:20px;right:0px;';
b.addEventListener('click', function () {
    window.scrollTo({ top: '0', behavior: 'smooth' });
});

    
function whenScroll() {
 //hide nav bar when no scrolling
 window.addEventListener('scroll',function(){ document.querySelector('.page__header').style.display = 'block';});
         window.setTimeout(function () {
             if(document.body.scrollTop>20)
             document.querySelector('.page__header').style.display = 'none';
         }, 5000);    

    //create if condition for the button to appear when scrolling 
    if (document.body.scrollTop > 20) {
        b.style.display = "block";
    } else {
        b.style.display = "none";
    }
    //create for loop to add an active class to the section on screen and to the item in nav bar
    for (let v = 0; v < numberOfSection.length; v++) {

        if (numberOfSection[v].getBoundingClientRect().top >= -500 && numberOfSection[v].getBoundingClientRect().top <= 200) {
            numberOfSection[v].classList.add("your-active-class");
        }
        else {
            numberOfSection[v].classList.remove("your-active-class");
        }
        if (numberOfSection[v].getAttribute('class') === 'your-active-class' && numberOfSection[v].getAttribute('id') === s[v].getAttribute('id')) {
            s[v].classList.add('activeList');
            s[v].classList.remove('menu__link');
        }
        else {

            s[v].classList.remove('activeList');
            s[v].classList.add('menu__link');

        }
    }
}

