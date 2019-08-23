import React, { Component }  from 'react';
import BackgroundSlider from "react-background-slider";
import './Homepage.css'

class Homepage extends Component {
    constructor(props){
        super(props);     
    }

    render () {
        return (
            <div>
                <h1 className="homepage_title">Stop Dreaming Start LIVING!</h1>
                <div className="tp-bgimg">
                    <BackgroundSlider
                    images={[
                        "https://images.pexels.com/photos/449627/pexels-photo-449627.jpeg?cs=srgb&dl=beach-beautiful-bridge-449627.jpg&fm=jpg",
                        "https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?cs=srgb&dl=bay-beach-beautiful-531602.jpg&fm=jpg", 
                        "https://images.pexels.com/photos/533858/pexels-photo-533858.jpeg?cs=srgb&dl=clouds-country-dawn-533858.jpg&fm=jpg"
                    ]}
                    duration={ 3 } transition={ 1 } 
                    />
            </div>
            </div>

        );
      }
}

export default Homepage;