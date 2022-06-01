function download(url, callback){
    setTimeout(()=>{
        console.log(`dang tai ${url}`);
        callback();
    },100);
}

function finishDownload(){
    console.log('da tai xong');
}

download('http::/videos.com',finishDownload);
