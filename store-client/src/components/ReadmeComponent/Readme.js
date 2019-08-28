import React, { Component }  from 'react';

class Readme extends Component {
    constructor(props){
        super(props);     
    }

    render() {
      return (
        <div>
          <h1>Amit Ofry</h1>
          <h3>Store name</h3>
          <p>YOLO travel agency</p>

          <h3>What are you selling?</h3>
          <p>We are selling vacations to special and unique locations suited for the younger generation (16-30). We handpicked our locations and build cool online widgets to help find cool things to do in the locations (find music concerts for example)</p>

          <h3>What additional page(s) did you add? How to operate them</h3>
          <p>Vacations - a page where you can see all of our vacations and choose your next vacation
          Favorites page - You can mark each vacation as favorite and then it would appear in this favorites page. This can help the user to keep track of the locations he likes the most.
          Cart page - Here you can see what vacations you added to your cart and purchase them :)</p>

          <h3>What was hard to do?</h3>
          <p>Well, there was a few things:
          1) Getting started - It was really hard for me to understand how to start this project. I wasn't sure what to look for online or what online tutorial should I take.
          2) Connect client and server - It wasn't easy to understand how to make both parts talk with each other in a smooth way.
          3) Scaling the project - Once I had too much logic in one class it became messy and I wasn't sure how to create a good architecture for this project.
          4) Debugging - I found the hard way that debugging consistently is the key to develop quickly and don't get caught in huge bugs. How to do it good is extremely important</p>

          <h3>Who is your partner?  name and id. What did you do? What did your partner do?</h3>
          <p>Guy Assif 204332134
          We started the project together and then I started building the backend and Guy worked on the additional pages. But during most of the time, we worked simultaneously on the project.</p>

          <h3>
          Specify all the different route your app supports</h3>
          <ul>
            <li>'/'</li>
            <li>'/SignupUser'</li>
            <li>'/DeleteUser'</li>
            <li>'/GetProducts'</li>
            <li>'/AddProductToFavorites'</li>
            <li>'/AddProductToCart'</li>
            <li>'/getUserFavorites/:userName'</li>
            <li>'/getUserCart/:userName'</li>
            <li>'/purchaseCart/:userName'</li>
            <li>'/getUsers'</li>
          </ul>

          <h3>Did you implement the store using react.js?
          </h3>
          <p>Yes</p>

          <h1>Guy Assif</h1>

          <h3>Store name</h3>
          <p>YOLO travel agency</p>

          <h3>What are you selling?</h3>
          <p>Cheap vacation packages for young people who are looking to see the world in a different way. Combining low-cost flights and cool concerts and events around the globe.</p>

          <h3>What additional page(s) did you add? How to operate them</h3>
          <p>Find a concert - This page is for people who are getting ready for their vacation. with a search of a location and a date, the page displays all relevant concerts on that date, pulling the information from songkick.com, using its open-source API, that can be added to the cart.
          Upcoming events - This page is for people who are already on vacation. by choosing a location, the page displays all upcoming events today, tomorrow and in 2 days, pulling the information from songkick.com, using its open-source API, that can be added to the cart.</p>

          <h3>What was hard to do?</h3>
          <p>It was not easy at all. Learning to code in a language that we haven't really coded in before was a challenging task, in addition to the project logic and creativity that was needed. It took as a while and a lot of hours of hard work but we did it eventually. 
          Sometimes we distributed the work between us, and managing the margins wasn't easy at all, considering all the clashed, etc.</p>

          <h3>Who is your partner?  name and id. What did you do? What did your partner do?
          </h3>
          <p>Amit Ofry, 204166938. We did the framework of the whole project together, along with the logic and the ideas of the store. The whole process was done together.
          I personally was more into the additional pages and the client-side, while my partner was handling the server-side and the other pages.</p>

          <h3>
          Specify all the different route your app supports</h3>
          <ul>
            <li>'/'</li>
            <li>'/SignupUser'</li>
            <li>'/DeleteUser'</li>
            <li>'/GetProducts'</li>
            <li>'/AddProductToFavorites'</li>
            <li>'/AddProductToCart'</li>
            <li>'/getUserFavorites/:userName'</li>
            <li>'/getUserCart/:userName'</li>
            <li>'/purchaseCart/:userName'</li>
            <li>'/getUsers'</li>
          </ul>

          <h3>Did you implement the store using react.js?
          </h3>
          <p>Yes</p>
        </div>


      );
    }
}

export default Readme;
