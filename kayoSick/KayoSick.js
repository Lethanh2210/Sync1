const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isKayoSick){
                reject('Kayo was Sick');
            }else{
                console.log('so luong banh: null')
                resolve();
            }
        },100)


    });
};

onMyBirthday(true)
    .then()
    .catch(err => console.log(err));