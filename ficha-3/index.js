function started(){
    console.log('DOWNLOAD STARTED')
}

function update(pogress){
    console.log(completed +'% completed')
}
function completed(){
    console.log('download completed')
}
function performDowload(fn_s,fn_u,fn_c){
    fn_s();
    for (let i = 0; i <= 100; i++) {
        fn_u(i);
    }
    fn_c();
}

performDowload(started,update,completed);