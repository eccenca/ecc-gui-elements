/* global before, after */
// requires
import rxmq from 'ecc-messagebus';
// import data
import {responseData, parsedData} from './data';

// get sparql channel from postal
const sparqlChannel = rxmq.channel('sparql');

before(function() {
    // sub to sparql
    this.sub = sparqlChannel.subject('query.run').subscribe(({replySubject}) => {
        // generate body & trigger event
        replySubject.onNext({responseJson: responseData, response: parsedData});
        replySubject.onCompleted();
    });
});

after(function() {
    // unsub from sparql
    this.sub.dispose();
});
