export async function getTopics () {
  let topics = await fetch( 'http://localhost:4000/api' );
  topics = await topics.json();
  return topics;
}

export async function createTopic ( title ) {
  let topic = await fetch( 'http://localhost:4000/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( { title } )
  } );
  topic = await topic.json();
  return topic;
}

export async function upvoteTopic ( id ) {
  let topic = await fetch( 'http://localhost:4000/api/' + id + '/up', {
    method: 'PUT'
  } );
  topic = await topic.json();
  return topic;
}

export async function downvoteTopic ( id ) {
  let topic = await fetch( 'http://localhost:4000/api/' + id + '/down', {
    method: 'PUT'
  } );
  topic = await topic.json();
  return topic;
}

export async function deleteTopic ( id ) {
  let topic = await fetch( 'http://localhost:4000/api/' + id, {
    method: 'DELETE'
  } );
  return topic;
}