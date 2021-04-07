import Entry from '../models/schema.js';

export async function getAll ( req, res ) {
  try {
    const entries = await Entry.find();
    res.send( entries );
    res.status( 200 );
  } catch ( err ) {
    res.send( err );
    res.status( 500 );
  }
};

export async function getOne ( req, res ) {
  try {
    const entry = await Entry.findOne( { _id: req.params.id } );
    res.send( entry );
    res.status( 200 );
  } catch ( err ) {
    res.send( err );
    res.status( 500 );
  }
};

export async function postEntry ( req, res ) {
  try {
    const postedEntry = await Entry.create( req.body );
    res.send( postedEntry );
    res.status( 201 );

  } catch ( err ) {
    res.send( err );
    rest.status( 500 );
  }
};

export async function putEntry ( req, res ) {
  try {
    const entryToUpdate = await Entry.findOne( { _id: req.params.id } );
    entryToUpdate.score += ( req.params.value === 'up' ) ? 1 : -1;
    const updatedEntry = await entryToUpdate.save();
    res.send( updatedEntry );
    res.status( 200 );
  } catch ( err ) {
    res.send( err );
    rest.status( 500 );
  }
};

export async function deleteEntry ( req, res ) {
  try {
    await Entry.deleteOne( { _id: req.params.id } );
    res.send();
    res.status( 204 );
  } catch ( err ) {
    res.send( err );
    rest.status( 500 );
  }
};