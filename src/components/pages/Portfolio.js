import React, { useState, useEffect } from 'react';
import API from '../../utils/Api/API'
import Card from '../CardSample/Card'

function GetRepos() {
    const [allRepos, setAllRepos] = useState([]);
    const [pinnedRepos, setPinnedRepos] = useState([]);
    const [reposToShow, setReposToShow] = useState([])
    // const [title, setTitle] = useState("");

    useEffect(() => {
        reposApi();
        // pinnedReposApi()
    }, []);



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
                setAllRepos(res.data);
                pinnedReposApi(res.data)
                // const illPresent = (res.data.map(ill => `https://raw.githubusercontent.com/${ill.owner.login}/${ill.name}/main/avatarImage/avatarImg.gif`))
                // console.log(illPresent);
            })
            .catch(err => console.log(err))
    }

    function sortingRepos(all, pinned) {
        // console.log(all);
        // console.log(pinned);
        const sortedRepos = all.filter(repo1 => pinned.some(repo2 => repo1.name === repo2.repo))
        console.log(sortedRepos);
        setReposToShow(sortedRepos)
    }
    return (
        <>
            <main className="container">

                <h1 className="my-5 about-header about-background text-center">Portfolio</h1>


                <div className="row row-cols-1 row-cols-md-2 g-4">

                    <Card
                        allRepos={allRepos}
                        pinnedRepos={pinnedRepos}
                        reposToShow={reposToShow}

                    />

                </div>
            </main>
        </>
    )
}



export default GetRepos;