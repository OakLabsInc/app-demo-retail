// require modules
var fs = require('fs');
var archiver = require('archiver');
const { join } = require('path')
require('dotenv').config();
var dir = './dist';


if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fs.createReadStream(join(__dirname,'src','public','images', 'thumbnail.png')).pipe(fs.createWriteStream(join(__dirname,'dist','thumbnail.png')));
// create a file to stream archive data to.
var output = fs.createWriteStream(join(__dirname,'dist','retail.zip'));
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});
 
// listen for all archive data to be written
// 'close' event is fired only when a file descriptor is involved
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});
 
// This event is fired when the data source is drained no matter what was the data source.
// It is not part of this library but rather from the NodeJS Stream API.
// @see: https://nodejs.org/api/stream.html#stream_event_end
output.on('end', function() {
  console.log('Data has been drained');
});
 
// good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    // log warning
  } else {
    // throw error
    throw err;
  }
});
 
// good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});
 
// pipe archive data to the file
archive.pipe(output);
archive.directory(join(__dirname,"src","public"), 'retail');
archive.finalize();