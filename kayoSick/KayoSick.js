const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isKayoSick){
                reject('Kayo was Sick');
            }else{
                console.log('so luong banh: null')
                resolve();
            }
        },300)


    });
};

async function test(isKayoSick){
    return await onMyBirthday(isKayoSick);
}

test().then()

onMyBirthday(false)
    .then()
    .then(()=> onMyBirthday(true))
    .catch(err => console.log(err));
