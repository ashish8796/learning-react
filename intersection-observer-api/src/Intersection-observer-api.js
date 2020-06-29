import React, { useCallback, useState, useEffect, useRef } from "react";


function InfiniteScrolling() {
  const [repoData, setRepoData] = useState([]);
  const [totalRepos, setTotalRepos] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const observer = useRef();
  const callBack = useCallback((node) => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entry => {
      if (entry[0].isIntersecting) {
        console.log(currentPage)
        if (currentPage < totalRepos / 30) {
          fetchData();
        }
      }
    })
    if (node) observer.current.observe(node);
  })

  function fetchData() {
    (async () => {
      const data = await fetch(`https://api.github.com/users/praveen-me/repos?page=${totalRepos ? currentPage : 1}`).then(response => response.json());

      if (currentPage < totalRepos / 30) {
        setCurrentPage(currentPage + 1);
      }

      setRepoData([...repoData, ...data]);
    })()
  }

  useEffect(() => {
    (async () => {
      const userData = await fetch("https://api.github.com/users/praveen-me").then(response => response.json());
      setTotalRepos(userData.public_repos);
    })()

    fetchData();
  }, [])


  return (
    <div className="App">
      {repoData.map((repo, index) => {
        return (index === repoData.length - 1) ? (<h1 key={repo.name + index} className="repo" ref={callBack}>{repo.name}</h1>) : (<h1 className="repo" key={repo.name + index}>{repo.name}</h1>)
      })}
    </div>
  );

}

export default InfiniteScrolling;