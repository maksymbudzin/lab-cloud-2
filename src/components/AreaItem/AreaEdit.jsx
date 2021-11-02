import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import {API} from 'aws-amplify'

function AreaEdit(params) {
    const [location, setLocation] = useState("Lviv region")
    const [humidity, setHumidity] = useState("Humidity is 18%")
    const [lighting, setLighting] = useState("Lighting is 30%")

    return (<>

        <div style={{margin: "0rem 2rem"}}>
            <div className="header-secret">
                 
                <div style={{display: "flex", margin: "1rem 0rem"}}>
                    <div style={{display: "flex", margin: "1rem 0rem", paddingLeft :"30px", fontFamily : ""}}>
                            <h1 className="heder-text-secret">Plots of land of the farmer</h1>

                        </div>
                    
                </div>

                <h2 style={{
                    textDecoration: "no",
                    cursor: "pointer",
                    display: "flex",
                    margin: "0rem 1rem 0rem 0rem",
                    fontFamily: "'Courier New', Courier, monospace",
                    alignItems: "center"
                }}>
                    <Link to="/" style={{color: "black", fontFamily: "'Courier New', Courier, monospace"}}>Go to items</Link></h2>

            </div>


            <div className="main-section-secret-second"
                 style={{height: "440px", marginLeft : '430px', display: "flex", flexDirection: "column", alignItems: "center", backgroundImage: `url("https://prd-webrepository.firabarcelona.com/wp-content/uploads/sites/9/2019/07/08084955/20190422.jpg")`, paddingTop : "60px" }}>



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
                <TextField onChange={(e) => setLighting(e.target.value)} multiline="true"
                           style={{margin: "0rem 0rem 1.5rem 0rem", width: "20%"}} type="text"/>


                <Link
                    to="/"
                    onClick={() => EditArea(location, humidity, lighting)}
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

async function EditArea(location, humidity, lighting) {

    const data = await API.put('area', `/area/${localStorage.getItem("selectedItem")}`, {

        body: {
            location: location,
            humidity: humidity,
            lighting: lighting,

        }

    })
    console.log(data)
}


export default AreaEdit