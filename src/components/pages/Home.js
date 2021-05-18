import React from 'react';

function Home(props) {
    return (
        <>
            <div className="container" style={{ paddingBottom: "150px" }}>
                <div className="row my-5 mx-2">
                    <div className="col-sm-12 col-md-8 about-background p-4">
                        <h1 className="about-header">About Me</h1>
                        <hr />
                        <img className="float-start mx-2 img-fluid" src="/EU.png" alt="Victor" />
                        <p>
                            {/* {props.bio} */}
                        </p>

                        <p>
                            &nbsp; My name is Victor, born in Moldova, I studied at Technical University of Moldova - Civil engineering
                            Industry.
                     </p>
                        <p>
                            &nbsp; I came in US through an exchange program and started to work in commercial and industrial remodeling
                            projects which I'm involved till current days. Many of people I've meet during this time are involved in tech
                            and often got to see what is it about. I got interested and started to explore more and more.
                     </p>
                        <p>
                            &nbsp; During my exploration I remembered that couple of years ago during school, I volunteered for ECPAT(End
                            Child
                            Prostitution and Trafficking) - in safety trainings with childrens and parents as well: "How to protect
                            children
                            online"
                    </p>
                        <p>
                            &nbsp; So I decided that I have to learn more about Web Development and tech that will help me to get along
                            with
                            people/companies that are working on "SAFETY ONLINE" with the potential for global reach and impact. From
                            previous experiences I demonstrate credibility in the problems I'm tackling.
                    </p>
                        <p>
                            &nbsp; Since people(including childrens) around the globe, now spend a lot more time on WEB - Apps rather than
                            watching TV, I would like to work in this industry and take part of a team that works on features how to make
                            us SAFER ONLINE. The tech Industry is changing the world a lot and I want to be part of it and of course for
                            wise changes that will lead us to a better future for everybody.
                    </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;