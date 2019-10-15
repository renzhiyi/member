const connect = require('./index');

const query = (sql) => {
    return new Promise((resolve, reject) => {
        console.log(333)
        console.log(sql)
        connect.query('select * from userlist', (error, data) => {
            console.log("====")
            if (error) {
                console.log(555)
                reject(error)
            } else {
                console.log(444)
                resolve(data);
            }
        })
    })
}

module.exports = query;