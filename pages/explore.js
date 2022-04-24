import Nav from "../components/index/Nav";


export default function ExploreIndex() {

    return (
        <div className="container">
            <main className="container">
                <Nav/>

                <h2 className="m-3">Explore</h2>
                <form className="me-3">
                    <input type="search" className="form-control m-3" placeholder="Search..." aria-label="Search"/>
                </form>

                <h3 className="m-3">Filter by tag</h3>

                <div className="btn-group tags-filter m-3" role="group">
                    <input type="checkbox" className="btn-check" id="tag1" autoComplete="off"/>
                    <label htmlFor="tag1" className="btn btn-outline-primary">Electro</label>

                    <input type="checkbox" className="btn-check" id="tag2" autoComplete="off"/>
                    <label htmlFor="tag2" className="btn btn-outline-primary">Techno</label>

                    <input type="checkbox" className="btn-check" id="tag3" autoComplete="off"/>
                    <label htmlFor="tag3" className="btn btn-outline-primary">House</label>

                </div>

                <h3 className="m-3">Result</h3>
                <h3 className="m-3">Events</h3>
                <div id="events-suggested" className="row flex-row flex-nowrap overflow-scroll p-3 m-3">
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

                <h3 className="m-3">Artists</h3>
                <div id="artists-suggested" className="row flex-row flex-nowrap overflow-scroll p-3 m-3">
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
            </main>
        </div>
    )

}