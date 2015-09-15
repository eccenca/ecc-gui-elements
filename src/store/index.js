import rxmq from 'ecc-messagebus';

// get our channel
const eccGuiElementsChannel = rxmq.channel('eccGuiElements');

// listen to get data request
eccGuiElementsChannel.subject('action').subscribe(({data: config, replySubject}) => {
    if (!config) {
        return;
    }

    // TODO: your code here
    replySubject.onNext('result');
    replySubject.onCompleted();
});

export default eccGuiElementsChannel;
