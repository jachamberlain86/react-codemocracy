import { useState, useContext } from 'react';
import topicContext from '../../contexts/topics.context';
import { createTopic } from '../../services/api.service';


export default function AddTopicComponent () {
  const { topics, setTopics } = useContext( topicContext );
  const [ currentTitle, setCurrentTitle ] = useState( '' );

  function updateTitle ( event ) {
    setCurrentTitle( event.target.value );
  }

  async function addTopic () {
    if ( currentTitle ) {
      const newTopic = await createTopic( currentTitle );
      setTopics( () => [ ...topics, newTopic ] );
      setCurrentTitle( '' );
    }
  }

  function onKeyPress ( key ) {
    if ( key.which === 13 ) {
      addTopic();
    }
  }

  return (
    <div>
      <input type="text" value={ currentTitle } onChange={ updateTitle } onKeyPress={ onKeyPress }></input>
      <button type="submit" onClick={ addTopic }>Submit</button>
    </div>
  );
}