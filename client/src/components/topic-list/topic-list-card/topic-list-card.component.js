import { useContext } from 'react';
import topicContext from '../../../contexts/topics.context';
import { upvoteTopic, downvoteTopic, deleteTopic } from '../../../services/api.service';

export default function TopicCardComponent ( props ) {

  const { setTopics } = useContext( topicContext );

  async function upvote () {
    const upvotedTopic = await upvoteTopic( props.topic._id );
    setTopics( ( topics ) => {
      const idx = topics.findIndex( ( el ) => el._id === props.topic._id );
      let tempTopics = [ ...topics ];
      tempTopics[ idx ] = upvotedTopic;
      tempTopics = tempTopics.sort( ( a, b ) => b.score - a.score );
      return tempTopics;
    } );
  }

  async function downvote () {
    const downvotedTopic = await downvoteTopic( props.topic._id );
    setTopics( ( topics ) => {
      const idx = topics.findIndex( ( el ) => el._id === props.topic._id );
      let tempTopics = [ ...topics ];
      tempTopics[ idx ] = downvotedTopic;
      tempTopics = tempTopics.sort( ( a, b ) => b.score - a.score );
      return tempTopics;
    } );
  }

  async function deleteThisTopic () {
    try {
      await deleteTopic( props.topic._id );
      setTopics( ( topics ) => {
        const idx = topics.findIndex( ( el ) => el._id === props.topic._id );
        const tempTopics = [ ...topics ];
        tempTopics.splice( idx, 1 );
        return tempTopics;
      } );
    } catch ( err ) {
      console.log( err );
    }
  }


  return (
    <div>
      <button onClick={ upvote }>upvote</button>
      <h2>{ props.topic.score }</h2>
      <button onClick={ downvote }>downvote</button>
      <h1>{ props.topic.title }</h1>
      <button onClick={ deleteThisTopic }>delete</button>
    </div>
  );
}