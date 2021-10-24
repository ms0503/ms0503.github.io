'use strict';
function getQueryParams(query) {
    let result = {};
    if(1 < query.length) {
        let params = query.substring(1).split('&');
        for(let i in params) {
            let elem = params[i].split('=');
            result[decodeURIComponent(elem[0])] = decodeURIComponent(elem[1]);
        }
    }
    return result;
}
