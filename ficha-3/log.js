var log = {
    info : function (info){
        console.log('info' + info );
    },
    warting:function(warning){
        console.log('warning' + warning);
    },
    error:function(error){
        console.log('error' + error);
    }
};
module.exports = log 