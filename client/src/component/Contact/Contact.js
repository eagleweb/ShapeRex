import React, { Component } from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {googleMapURL} from '../../../../config'
import s from './contact.module.css'

const MyMapComponent = compose(
    withProps({
        googleMapURL: googleMapURL,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div className={s.map_container} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => (
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 49.2336106, lng: 28.4704685 }}
        scrollwheel={false}
    >
        {props.isMarkerShown && <Marker position={{ lat: 49.2336106, lng: 28.4704685 }} />}
    </GoogleMap>
));

class Contact extends Component {
    render () {
        return (
            <div className={s.container}>
                <div className={s.contact}>
                    <h1>Contact to ShapeRex</h1>
                    <p>We respond within an hour daytime on the weekdays.</p>
                    <address>
                        <p>Address: Vinnytsia, Soborna 54</p>
                        <p>Tell: <a href="tel:+1234567890">+1234567890</a></p>
                    </address>
                    <form className={s.contact_form} action="#" method="post">
                        <p>GOT QUESTIONS?</p>
                        <fieldset>
                            <input placeholder="Your name" type="text" tabIndex="1" required autoFocus />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Email Address" type="email" tabIndex="2" required />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Phone Number (optional)" type="tel" tabIndex="3" required />
                        </fieldset>
                        <fieldset>
                            <input placeholder="Your Web Site (optional)" type="url" tabIndex="4" required />
                        </fieldset>
                        <fieldset>
                            <textarea placeholder="Type your message here...." tabIndex="5" required />
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" data-submit="...Sending">Submit</button>
                        </fieldset>
                    </form>
                </div>
                <MyMapComponent isMarkerShown />
            </div>
            )
    }
}

export default Contact