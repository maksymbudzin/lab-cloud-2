import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {API} from 'aws-amplify'

import "./Area.css"

function Area() {


    const [textObj, setTextObj] = useState([]);

    const fetchData = async () => {
        try {
            const data = await API.get('area', '/area');
            console.log(data)
            setTextObj(data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [textObj]);


    return (
        <>
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
                        <Link to="/area-new"
                              style={{color: "black", fontFamily: "'Courier New', Courier, monospace"}}>Create new area? </Link></h2>

                </div>


                <div className="main-section-secret">

                    {textObj.map((obj) => (<>

                        <div className="element-secret" style={{display: "flex", margin: "0.5rem", padding: "0.5rem"}}>
                            <div style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}>
                                <div style={{
                                    height: "300px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-around"
                                }}>
                                    <span style={{marginLeft : "85px", background: 'rgba(255, 255, 255, 0.8)'}}>
                                        times tamp: {obj.timestamp.S}
                                    </span>
                                    <span style={{marginLeft : "85px", background: 'rgba(255, 255, 255, 0.8)'}}>
                                        id of sensor: {obj.sensor_id.S}
                                    </span>
                                    <span style={{marginLeft : "85px", background: 'rgba(255, 255, 255, 0.8)'}}>
                                        type of sensor: {obj.sensor_type.S}
                                    </span>
                                    <span style={{marginLeft : "85px", background: 'rgba(255, 255, 255, 0.8)'}}>
                                        Локація: {obj.location.S}
                                    </span>
                                    <span style={{marginLeft : "85px", background: 'rgba(255, 255, 255, 0.8)'}}>

                                        Вологість: {obj.humidity.S}
                                    </span>
                                    <span style={{marginLeft : "85px", background: 'rgba(255, 255, 255, 0.8)'}}>
                                        Освітлення: {obj.lux.S}
                                    </span>


                                    <div style={{display: "flex", flexDirection: "row", marginLeft : "92px",  }}>
                                        <Link
                                            onClick={() => localStorage.setItem("selectedItem", obj.id.S)}
                                            to="/area-edit"> <img style={{margin: "0.5rem", cursor: "pointer", background: 'rgba(255, 255, 255, 0.5)'}}
                                                                    width="60px" height="60px"
                                                                    src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-edit-interface-kiranshastry-lineal-kiranshastry-1.png"/></Link>
                                        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/2x/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png"
                                             style={{width: "50px", height: "50px", margin: "0.5rem", background: 'rgba(255, 0, 0, 0.5)'}}
                                             onClick={() => deleteObj(obj.id.S)}/>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </>))}
                </div>
                <div></div>

            </div>
        </>
    )

}

async function deleteObj(id) {
    const del = await API.del('area', `/area/${id}`)
    console.log(del);
}


export default Area