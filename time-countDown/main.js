function timeCount(i) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (i < 0) {
                reject('Time Out');
            } else {
                console.log(i);
                resolve(i);
            }
        }, 1000)
    }));
}

async function awaitAll(value){
    for (let i = value; i >= -1; i--) {
        await timeCount(i);
    }
}

function count(){
    let value = document.getElementById('input').value;
    awaitAll(value).then().catch(err => console.log(err));
}





