import React from 'react';
import './App.css';
import Season from './Season';
import Loading from './Loading';
import useLocation from './location';

const App = () => {
  
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage) {
    content = <div>Error : {errorMessage}</div>
  } else if (lat){
    content = <Season lat={lat} />;
  } else {
     content = <Loading message="Please accept location request" />;
  }

  return <div className="border red">{content}</div>
}

export default App;
