import React, { useState, useEffect } from 'react';
import API from '../../utils/Api/API'
import Card from '../CardStarred/Card'
import CardAll from '../CardAll/CardAll'
import StarredBtn from '../StarredBtn/StarredBtn'
import AllBtn from '../AllBtn/AllBtn'


function GetRepos() {
   

    const [allRepos, setAllRepos] = useState([]);
    const [pinnedRepos, setPinnedRepos] = useState([]);
    const [reposToShow, setReposToShow] = useState([]);
    const [btnValue, setbtnValue] = useState();
    // const [active, setActive] = useState(false);
    // const [title, setTitle] = useState("");

    useEffect(() => {
        reposApi();
        // pinnedReposApi()
    });



    function pinnedReposApi(all) {
        API.searchPinnedRepos()
            .then(res => {
                // console.log(res.data);
                setPinnedRepos(res.data)
                sortingRepos(all, res.data)
            }

            )
            .catch(err => console.log(err))
    }

    function reposApi() {
        API.searchRepos()
            .then(res => {
                console.log(res.data)
                // const myRepos = res.data.map(repo => 
                //     repo.owner.login.includes("VictorCodrean")
                // )
                // console.log(myRepos);
                // setAllRepos(MyRepos);
                setAllRepos(res.data);
                pinnedReposApi(res.data)
            })
            .catch(err => console.log(err))
    }

    function sortingRepos(all, pinned) {
        // console.log(all);
        // console.log(pinned);
        const sortedRepos = all.filter(repo1 => pinned.some(repo2 => repo1.name === repo2.repo))
        console.log(sortedRepos);
        setReposToShow(sortedRepos);
    }

    function handleBtnClick(event) {
        // Get the title of the clicked button
        const btnName = event.target.getAttribute("data-value");
        console.log(btnName);
        if (btnName !== "starredRepos") {
            // event.currentTarget.classList.add("active")
            // ---------------------lookup blur---------------------
            // setReposToShow(allRepos)

            let valueGiven = "all"
            setbtnValue(valueGiven)
            console.log(btnValue);
        } else {
            console.log(btnValue);
            reposApi()
            let valueGiven = null
            setbtnValue(valueGiven)

        }
    }

   

    return (
        <>
            <main className="container" style={{ paddingBottom: "150px" }}>
                <div className="my-5 about-header about-background d-flex justify-content-around">
                    <StarredBtn
                        onClick={handleBtnClick} />
                    <h1 className="text-center align-self-center">Portfolio</h1>
                    <AllBtn
                        onClick={handleBtnClick} />
                </div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">

                    {
                        btnValue !== "all" ?
                            <Card
                                // allRepos={allRepos}
                                pinnedRepos={pinnedRepos}
                                reposToShow={reposToShow}
                            /> :
                            <CardAll
                                allRepos={allRepos}
                            // pinnedRepos={pinnedRepos}
                            // reposToShow={reposToShow}
                            />
                    }

                </div>
            </main>
        </>
    )
}



export default GetRepos;