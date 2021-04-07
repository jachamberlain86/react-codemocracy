import mongoose from './index.js';

const Schema = mongoose.Schema;

const entrySchema = new Schema( {
  title: String,
  score: { type: Number, default: 0 },
  published_at: { type: Date, default: new Date() }
} );

const Entry = mongoose.model( 'Entry', entrySchema );

export default Entry;