let car = 10000;

function checkMoney(money){
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money < car) {
                reject('khong du tien mua xe');
            } else {
                console.log('du tien')
                resolve();
            }
        })
    }));
}
async function checkAll(){
    await checkMoney(15000);
    await checkMoney(20000);
    await checkMoney(5000);
}

checkAll().then().catch(err => console.log(err));