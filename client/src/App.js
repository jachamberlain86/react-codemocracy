import './App.css';
import { getTopics } from './services/api.service';
import { useState, useEffect } from 'react';

import AddTopicComponent from './components/add-topic/add-topic.component';
import TopicListComponent from './components/topic-list/topic-list.component';

import topicContext from './contexts/topics.context';

function App () {
  const [ topics, setTopics ] = useState( [] );

  useEffect( () => {
    getAllTopics();
  }, [] );



  async function getAllTopics () {
    let tempTopics = await getTopics();
    tempTopics = tempTopics.sort( ( a, b ) => b.score - a.score );
    setTopics( tempTopics );
  }

  return (
    <div className="App">
      <topicContext.Provider value={ { topics, setTopics } }>
        <AddTopicComponent />
        <TopicListComponent />
      </topicContext.Provider>
    </div>
  );
}

export default App;
