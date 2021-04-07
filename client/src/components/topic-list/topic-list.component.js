import { useContext } from 'react';
import TopicCardComponent from './topic-list-card/topic-list-card.component';

import topicContext from '../../contexts/topics.context';

export default function TopicListComponent ( props ) {
  const { topics } = useContext( topicContext );

  function renderTopics () {
    return topics.map( ( el ) => {
      return <TopicCardComponent key={ el._id } topic={ el } />;
    } );
  }

  return (
    <div>
      <h1>Topic list works!</h1>
      <div className="topicContainer">
        { renderTopics() }
      </div>
    </div>
  );
}