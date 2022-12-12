</header>
<main>
     <header><h3 class="slogan">You drink our coffee, we make large bucks!</h3></header>
    <p>
         <img src="images/pumpkin-spice-latte.jpg" alt="Our Pumpkin Spice Latte tastes great on a Fall Day!" id="coffee" />
        <strong class="feature">Monday's Coffee Special:</strong> Monday's daily coffee special is <strong class="feature">Pumpkin Spice Latte</strong>, which makes us wish it was always Fall, as this is one of our top sellers!</p>
    <p><span class="feature">Pumpkin Spice is </span> Gluten-free selfies normcore chillwave. Listicle 90's chambray, seitan cold-pressed try-hard Etsy authentic flexitarian vinyl. Meditation bespoke freegan, single-origin coffee cred seitan 90's gentrify brunch Williamsburg squid cold-pressed. Brooklyn readymade Tumblr wayfarers ethical.</p>
    <p><span class="feature">Enjoy Pumpkin Spice with our </span> Polaroid iPhone plaid, Pitchfork Shoreditch paleo. Hashtag keytar chia scenester Pinterest, semiotics tousled food truck. YOLO scenester deep v, taxidermy paleo quinoa McSweeney's Carles VHS mustache Williamsburg gluten-free readymade cold-pressed. Truffaut Thundercats Schlitz, listicle organic Brooklyn paleo squid asymmetrical readymade migas gluten-free Austin.</p>
     <p>
     <b>At LargeBuck$ we aspire to: </b>Aesthetic gentrify YOLO McSweeney's typewriter single-origin coffee. Slow-carb hella listicle lomo, Helvetica single-origin coffee butcher stumptown. Chambray try-hard church-key mumblecore, tote bag PBR cardigan. Retro Austin Brooklyn, blog Intelligentsia gentrify jean shorts sartorial bicycle rights gastropub. Aesthetic wayfarers Pitchfork, tattooed Carles quinoa meh leggings distillery pork belly banjo. Umami cred lumbersexual skateboard, pork belly Tumblr vegan letterpress. Fixie bicycle rights butcher chillwave, gluten-free health goth Echo Park locavore whatever.

     </p>
   <div id="coffee-template"></div>
     <!--
    <p>
    Gluten-free selfies normcore chillwave. Listicle 90's chambray, seitan cold-pressed try-hard Etsy authentic flexitarian vinyl. Meditation bespoke freegan, single-origin coffee cred seitan 90's gentrify brunch Williamsburg squid cold-pressed. Brooklyn readymade Tumblr wayfarers ethical. Biodiesel VHS Godard High Life, tousled Banksy craft beer. Mlkshk direct trade locavore, mumblecore keytar artisan hashtag fap. Cred cronut Brooklyn, locavore art party small batch PBR semiotics ennui kitsch taxidermy mlkshk stumptown.
         <img src="images/pumpkin-spice-latte.jpg" alt="Our Pumpkin Spice Latte tastes great on a Fall Day!" id="coffee" />
        <strong>Monday's Coffee Special:</strong> Monday's daily coffee special is <strong >Pumpkin Spice Latte</strong>, which makes us wish it was always Fall, as this is one of our top sellers!
    </p>
    <p>
    Polaroid iPhone plaid, Pitchfork Shoreditch paleo. Hashtag keytar chia scenester Pinterest, semiotics tousled food truck. YOLO scenester deep v, taxidermy paleo quinoa McSweeney's Carles VHS mustache Williamsburg gluten-free readymade cold-pressed. Truffaut Thundercats Schlitz, listicle organic Brooklyn paleo squid asymmetrical readymade migas gluten-free Austin. Etsy Wes Anderson 8-bit retro, polaroid synth paleo banh mi before they sold out Vice. Bushwick fap Intelligentsia, whatever Etsy High Life Kickstarter migas retro Banksy YOLO Carles yr raw denim. Gluten-free fixie taxidermy pop-up, actually Kickstarter flannel put a bird on it master cleanse.
    -->
    <h3>Click below to see specials for other days</h3>
    <p><a href="?day=0">Sunday</a></p>
    <p><a href="?day=1">Monday</a></p>
    <p><a href="?day=2">Tuesday</a></p>
    <p><a href="?day=3">Wednesday</a></p>
    <p><a href="?day=4">Thursday</a></p>
    <p><a href="?day=5">Friday</a></p>
    <p><a href="?day=6">Saturday</a></p>


    <p><span class="feature">Pumpkin Spice is </span> Gluten-free selfies normcore chillwave. Listicle 90's chambray, seitan cold-pressed try-hard Etsy authentic flexitarian vinyl. Meditation bespoke freegan, single-origin coffee cred seitan 90's gentrify brunch Williamsburg squid cold-pressed. Brooklyn readymade Tumblr wayfarers ethical.
    </p>

    <p><span class="feature">Enjoy Pumpkin Spice with our </span> Polaroid iPhone plaid, Pitchfork Shoreditch paleo. Hashtag keytar chia scenester Pinterest, semiotics tousled food truck. YOLO scenester deep v, taxidermy paleo quinoa McSweeney's Carles VHS mustache Williamsburg gluten-free readymade cold-pressed. Truffaut Thundercats Schlitz, listicle organic Brooklyn paleo squid asymmetrical readymade migas gluten-free Austin.
    </p>

    <p>
    Text provided by <a href="http://hipsum.co/" target="_blank">Hipster Ipsum</a>
        Hi, my name is <strong>Sovanny</strong>, on this website I am ultizing HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content includes:

        <ul>
        <li>One unique image, with appropriate and matching content in the alt tag.  </li>
        <li>A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)</li>
        <li>A unique color that supports the image and paragraph of content</li>
        <li>Created a querystring for each day of the week </li>
    </p>
 </main>
 <footer>
    <p><small>&copy; 2022 by 
        YOUR NAME HERE, All Rights Reserved ~ 
        Sovanny Seng, All Rights Reserved ~ 
        <a id="html-checker" href="#">Check HTML</a> ~ 
        <a id="css-checker" href="#">Check CSS</a></small>
   </p>
@@ -92,5 +106,8 @@ <h1 class="masthead">LARGEBUCK$ COFFEE</h1>

    document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);  
</script>	
<script src="js/main.js">

</script>
</body>
</html>
143  
js/main.js
@@ -0,0 +1,143 @@
//alert("hola!");

/*
Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page
that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
One unique image, with appropriate and matching content in the alt tag.  
A paragraph or two of content that describes the daily item (paragraph 
must include the name of the highlighted weekday)
A unique color that supports the image and paragraph of content
The items we need are:
image( a pic of the coffee)
alt ( a descrption of the img for people who can't see it)
description ( a note about the coffee)
weekday 
color ( to support the coffee)
The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.
*/

function coffeeTemplate(coffee){
return `<p>
        <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
        <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong >${coffee.name}</strong>, ${coffee.desc}
        </p>`;
}

let myDate = new Date();
let today = myDate.getDay();
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;

//output to console    
console.log(queryString);

//separate querystring parameters
const urlParams = new URLSearchParams(queryString);


if(urlParams.has("day")){//from querystring
today = urlParams.get("day");
}
//convert the string to an interger
today= parseInt (today);

switch(today){

case 0: 
    today = "Sunday"
    coffee = {
        color:"tan",
        name:"Caramel Latte",
        pic:"caramel-latte.jpg",
        alt:"A picture of a caramel latte ",
        day:"Sunday",
        desc:`Caramel lattes are sweet !`
    };
break;

case 1: 
    today = "Monday"
    coffee ={   
        color:"pink",
        name:"Bubble Tea",
        pic:"bubble-tea.jpg",
        alt:"A picture of a bubble tea",
        day:"Monday",
        desc:`I love bubble tea!`
    };
break;

case 2: 
    today = "Tuesday"
    coffee = {
        color:"brown",
        name:"Cold Brew",
        pic:"cold-brew.jpg",
        alt:"A picture of cold brew",
        day:"Tuesday",
        desc:`I don't like cold brew!`
    };
break;

case 3: 
    today = "Wednesday"
    coffee = {
        color:"black",
        name:"Drip",
        pic:"drip.jpg",
        alt:"A picture of drip coffee",
        day:"Wednesday",
        desc:`Drip coffee is cool!`
    };
break;

case 4: 
    today = "Thrusday"
    coffee = {
        color:"gold",
        name:"Frappaccino",
        pic:"frappaccino.jpg",
        alt:"A picture of a frappaccino drink ",
        day:"Thrusday",
        desc:`I love frappaccino drinks !`
    };
break;

case 5: 
    today = "Friday"
    coffee = {
        color:"purple",
        name:"Pumpkin Spice Latte",
        pic:"pumpkin-spice-latte.jpg",
        alt:"A picture of pumpkin spice latte",
        day:"Friday",
        desc:`Pumpkin Spice Lattes are the best !`
    };
break;

case 6: 
    today = "Saturday"
    coffee = {
        color:"red",
        name:"Mocha",
        pic:"mocha.jpg",
        alt:"A picture of a mocha ",
        day:"Saturday",
        desc:`Mochas are so yummy !`
    };
break;

default:
    alert("Something went wrong");

}

console.log(coffee);
document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee)
document.querySelector("html").style.backgroundColor = coffee.color;
