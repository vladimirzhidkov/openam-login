'use strict';

//import dispatcher from '../dispatcher';
//import ActionTypes from '../constants/action-types';


let rest = {
    host: 'http://localhost:8888/openam',
    //host: 'http://openam.mycomputer.com:8080/OpenAM-13.0.0-SNAPSHOT_20151116',
    get: function(path) {
        let url = this.host + path;
        return new Promise(function resolver(resolve, reject) {
            $.ajax({url: url, success: resolve, error: reject});
        });
    },
    post: function(path, data) {
        let url = this.host + path;
        return new Promise(function resolver(resolve, reject) {
            $.ajax({
                url: url,
                type: 'POST',
                contentType: 'application/json',
                data: data,
                dataType: 'json',
                success: (data, textStatus, jqXHR)=>resolve(data),
                error: res=>reject(res.status)
            });
        });
    }
};

class LoginActions {

    static authenticate(callback){

        let success = function(data){
            console.log(data);
        };
        let error = function(status){
            console.log(status);
        };

        rest.post('/json/authenticate')
            .then(callback)
            .catch(error);
    }
}
export default LoginActions;