# Portfolio-React-Version - [Deployed product](https://victorcodrean.github.io/portfolio-react-version/)

# Table of Contents

- [Description](#Description)
- [About page](#About)
- [Portfolio page](#Portfolio)
- [Credits](#Credits)
- [Contributing](#Contributing)
- [Directory](#Directory)
- [Screeenshots](#Pictures)

## Description
   Updated Portfolio page  created within React.
   Used Github API to render information and return dynamicly on the page
## About
* Consistent Navbar from Boostrap for each page.
    *  On each page contain links to Home/About, Contact, Resume, Social Medias and Portfolio page.
* Main element in a container:
    * 1 row and columns (rule of 12 Bootstrap Gryd System)
* Consistent Footer from Bootstrap for each page.

## Portfolio
* Projects included (having acces to GithubApi repos - rendering directly from Github)
    * buttonsHandlers to handle what to render(dinamic): All projects or just the pinned Ones

## Framework

*   React (functional method) 
    ```
        function GetRepos() {
        const [allRepos, setAllRepos] = useState([]);
        const [pinnedRepos, setPinnedRepos] = useState([]);
        const [reposToShow, setReposToShow] = useState([]);
        const [btnValue, setbtnValue] = useState();

        useEffect(() => {
            reposApi();
        }, []);
        }
    ```

*   Filter method to get necessary data 
    ```
        function sortingRepos(all, pinned) {
            const sortedRepos = all.filter(repo1 => pinned.some(repo2 => repo1.name === repo2.repo))
            console.log(sortedRepos);
            setReposToShow(sortedRepos);
        }
    ```
    

## Credits
* List of the resources used to complete this project:
- [Bootstrap](https://getbootstrap.com/) - Very Usefull with 12 Gryd System and cards availability
- [StackOverflow](https://stackoverflow.com/) - When documentation not to clear for me STACKOVERFLOW it's very handy
* - UW curiculum


## Contributing
* Name: Victor Codrean
* [Email](CodreanVictor@gmail.com)
* [GitHub](https://github.com/VictorCodrean)

## Directory
* [Deployed Website](https://victorcodrean.github.io/Portfolio-UpToDate/)
* [GitHub Source](https://github.com/VictorCodrean/Portfolio-UpToDate)

