import axios from "axios";

const apis = {
    record: function(payload){
        let trackData = Object.assign({},payload,{
            eventTime: new Date().getTime()
        });

        axios.post('/user-service/api/track/page', trackData);
    },
    recordClick: function(payload) {
        apis.record(Object.assign({}, {eventType:'click'},payload)); 
    },
    recordClosePage: function(payload) {
        apis.record(Object.assign({}, {eventType:'closePage'},payload)); 
    },
    recordOpenPage: function(payload) {
        apis.record(Object.assign({}, {eventType:'openPage'},payload)); 
    }
}

export default apis;
