'use strict';

//import dispatcher from '../dispatcher';
//import ActionTypes from '../constants/action-types';

//
//let rest = {
//    host: 'http://mycomputer.com:8080/OpenAM-12.0.0',
//    //host: 'http://mycomputer.com:8080/OpenAM-13.0.0-SNAPSHOT_20151116',
//    get: function(path) {
//        let url = this.host + path;
//        return new Promise(function resolver(resolve, reject) {
//            $.ajax({url: url, success: resolve, error: reject});
//        });
//    },
//    post: function(path, data) {
//        let url = this.host + path;
//        return new Promise(function resolver(resolve, reject) {
//            $.ajax({
//                url: url,
//               // beforeSend: false,
//                type: 'POST',
//                contentType: 'application/json',
//                headers: {Test: 'test'},
//                data: data,
//                dataType: 'json',
//                success: (data, textStatus, jqXHR)=>resolve(data),
//                error: res=>reject(res.status)
//            });
//        });
//    }
//};

class LoginActions {

    static post(path, data) {
        let url = LoginActions.host + path;
        return new Promise(function resolver(resolve, reject) {
            $.ajax({
                url: url,
                type: 'POST',
                contentType: 'application/json',
                headers: {iPlanetDirectoryPro: 'test'},
                data: data,
                dataType: 'json',
                success: (data, textStatus, jqXHR)=>resolve(data),
                error: res=>reject(res.status)
            });
        });
    }

    static authenticate(callback, data){
        let error = function(status){
            console.log(status);
        };
        LoginActions.post('/json/authenticate',data)
            .then(callback)
            .catch(error);
    }
}
LoginActions.host = 'http://mycomputer.com:8080/OpenAM-12.0.0';

export default LoginActions;