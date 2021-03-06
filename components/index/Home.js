import Link from "next/link";
import Nav from "./Nav";


export default function HomePage() {


    return(
        <main className="container">
            <Nav/>

            <div className="container-suggested container">
                <h2>Recommendations</h2>

                <h3>Events</h3>
                <div id="events-suggested" className="row flex-row flex-nowrap overflow-scroll p-3 m-3" >
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Event</h5>
                                <p className="card-text">This is an event</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Event</h5>
                                <p className="card-text">This is an event</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Event</h5>
                                <p className="card-text">This is an event</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Event</h5>
                                <p className="card-text">This is an event</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Event</h5>
                                <p className="card-text">This is an event</p>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Artists</h3>
                <div id="artists-suggested" className="row flex-row flex-nowrap overflow-scroll p-3 m-3" >
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Artist</h5>
                                <p className="card-text">This is an artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Artist</h5>
                                <p className="card-text">This is an artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Artist</h5>
                                <p className="card-text">This is an artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Artist</h5>
                                <p className="card-text">This is an artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Artist</h5>
                                <p className="card-text">This is an artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Artist</h5>
                                <p className="card-text">This is an artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img src="/party.jpg" alt="" className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title">Artist</h5>
                                <p className="card-text">This is an artist</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>   
        </main>
    )
}