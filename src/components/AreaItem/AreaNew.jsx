import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import {API} from 'aws-amplify'

function AreaNew(params) {
    const [timestamp, setTimestamp] = useState("false")
    const [sensor_id, setSensor_id] = useState("false")
    const [sensor_type, setSensor_type] = useState("false")
    const [location, setLocation] = useState("Location is Lviv region")
    const [humidity, setHumidity] = useState("Humidity is 15%")
    const [lux, setLux] = useState("Lux is 30%")
    const [apiKey, setApiKey] = useState("04012002")

    return (<>

        <div style={{ }}>
            <div className="header-secret">
                <div style={{display: "flex", margin: "1rem 0rem", paddingLeft :"30px", fontFamily : ""}}>
                        <h1 className="heder-text-secret">Plots of land of the farmer</h1>

                    </div>

                <h2 style={{
                    textDecoration: "no",
                    cursor: "pointer",
                    display: "flex",
                    margin: "0rem 1rem 0rem 0rem",
                    fontFamily: "'Courier New', Courier, monospace",
                    alignItems: "center"
                }}>
                    <Link to="/" style={{color: "black", fontFamily: "'Courier New', Courier, monospace"}}>Go to story
                        list</Link></h2>

            </div>


            <div className="main-section-secret-second"
                style={{height: "550px", marginLeft : '430px', display: "flex", flexDirection: "column", alignItems: "center", backgroundImage: `url("https://prd-webrepository.firabarcelona.com/wp-content/uploads/sites/9/2019/07/08084955/20190422.jpg")`, paddingTop : "60px" }}>

                <span style={{color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900", background: 'rgba(255, 255, 255, 0.7)'}}>
                    Timestamp
                </span>
                <TextField onChange={(e) => setTimestamp(e.target.value)}
                           style={{margin: "0rem 0rem 1.5rem 0rem", width: "20%"}} type="text"/>

                <span style={{color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900", background: 'rgba(255, 255, 255, 0.7)'}}>
                    Sensor ID
                </span>
                <TextField onChange={(e) => setSensor_id(e.target.value)}
                           style={{margin: "0rem 0rem 1.5rem 0rem", width: "20%"}} type="text"/>

                <span style={{color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900", background: 'rgba(255, 255, 255, 0.7)'}}>
                    Sensor_type
                </span>
                <TextField onChange={(e) => setSensor_type(e.target.value)}
                           style={{margin: "0rem 0rem 1.5rem 0rem", width: "20%"}} type="text"/>

                <span style={{color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900", background: 'rgba(255, 255, 255, 0.7)'}}>
                    Enter location coordinates
                </span>
                <TextField onChange={(e) => setLocation(e.target.value)}
                           style={{margin: "0rem 0rem 1.5rem 0rem", width: "20%"}} type="text"/>
                <span style={{color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900", background: 'rgba(255, 255, 255, 0.7)'}}>
                Enter humidity level of soil
                </span>
                <TextField onChange={(e) => setHumidity(e.target.value)} multiline="true"
                           style={{margin: "0rem 0rem 1.5rem 0rem", width: "20%"}} type="text"/>

<span style={{color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900", background: 'rgba(255, 255, 255, 0.7)'}}> Enter lighting with reference to geolocation</span>
                <TextField onChange={(e) => setLux(e.target.value)} multiline="true"
                           style={{margin: "0rem 0rem 1.5rem 0rem", width: "20%"}} type="text"/>

                <span style={{color: "black", fontFamily: "'Courier New', Courier, monospace", fontWeight: "900", background: 'rgba(255, 255, 255, 0.7)'}}> Api key</span>
                <TextField onChange={(e) => setApiKey(e.target.value)} multiline="true"
                           style={{margin: "0rem 0rem 1.5rem 0rem", width: "20%"}} type="text"/>



                <Link
                    to="/"
                    onClick={() => SaveArea(timestamp, sensor_id, sensor_type ,location, humidity, lux, apiKey)}
                    class="link-protocol-secret create_template_button_t-secret btn-background-slide row "
                    style={{width: '7%'}}
                >
                    <span className="text_decoration" style={{display: "flex"}}>Save</span>
                </Link>
            </div>

            <div></div>

        </div>


    </>)
}

async function SaveArea(timestamp, sensor_id, sensor_type ,location, humidity, lux, apiKey) {

    const data = await API.post('area', '/area', {
        body: {
            timestamp: timestamp,
            sensor_id: sensor_id,
            sensor_type: sensor_type,
            location: location,
            humidity: humidity,
            lux: lux,
            API_KEY: apiKey

        }
    })

    console.log(data)

}

export default AreaNew