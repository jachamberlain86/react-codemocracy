import mongoose from 'mongoose';

mongoose.connect( 'mongodb://localhost:27017/codemocracy_react', { useNewUrlParser: true, useUnifiedTopology: true } );

export default mongoose;