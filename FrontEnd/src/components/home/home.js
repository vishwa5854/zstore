import './home.css';
import Card from '../card/card';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const redirectToAdd = () => {
    navigate('/add');
  };
  let [globalApps, setGlobalApps] = useState([]);

  let [apps, setApps] = useState(globalApps);

  useEffect(() => {
    fetch('http://localhost:3001/iwr/all', {
      method: 'GET',
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InZpc2giLCJfaWQiOiI2NTAyODNhNjJmMzQ4NDEzZTBkN2MwZTQiLCJpYXQiOjE2OTQ2NjM2MDUsImV4cCI6MTY5NTUyNzYwNX0.wyKIWyK75quGLO9MHq2TfmauWlRch3jrfUc1ZUlCfGg'
      },
    })
      .then(response => response.json())
      .then(json => {
        let docs = json.data.docs.map((d, idx) => { return { ...d, key: idx + 1 } });
        setGlobalApps(docs);
        setApps(docs);
      })
      .catch(error => console.error(error));
  }, []);

  let search = (event) => setApps(globalApps.filter(app => app.website.toLowerCase().startsWith(event.target.value.toLowerCase())));

  return (
    <div className='home'>
      <div className='mt-5 mb-8 title'>zstore</div>

      <form action="/search" method="GET" className='mb-5'>
        <input type="text" name="query" placeholder="Search..." id="search-bar" onChange={search} />
      </form>

      {apps.map(app => <Card website={app.website} userName={app.userName} password={app.password} key={app.key}></Card>)}

      <i className="fa-solid fa-2x fa-plus fa-lock" onClick={redirectToAdd}></i>
    </div>
  );
};

export default Home;
