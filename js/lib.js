'use strict';
String.prototype.toQueryParams = () => {
    let result = {};
    if(1 < this.length) {
        let params = this.substring(1).split('&');
        for(let i = 0; i < params.length; i++) {
            let elem = params[i].split('=');
            result[decodeURIComponent(elem[0])] = decodeURIComponent(elem[1]);
        }
    }
    return result;
};
