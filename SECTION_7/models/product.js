
const fs = require('fs');

const path = require('path');

const productDbPath = path.join(__dirname, '../db/product.json');

module.exports = class Product {
    constructor(
        name,
        price,

    ) {
        this.name = name;
        this.price = price;

    }

    async save() {
        return new Promise((resolve, reject) => {
            fs.readFile(productDbPath, 'utf-8', (err, data) => {
                if (err) {
                    reject(err.message);
                    return;
                }

                const productDbData = JSON.parse(data);

                productDbData.push({ id: productDbData.length + 1, name: this.name, price: this.price });

                fs.writeFile(productDbPath, JSON.stringify(productDbData), 'utf-8', (err) => {
                    if (err) {
                        reject(err.message);
                        return;

                    }
                    resolve('DATA APPENDED SUCCESSFULLY!');
                })
            });
        });

    }

    static findAll() {
        const data = fs.readFileSync(productDbPath, 'utf-8');

        return JSON.parse(data);
    }


    static async deleteOne(id) {
        return new Promise((resolve, reject) => {
            fs.readFile(productDbPath, 'utf-8', (err, data) => {
                if (err) {
                    reject(err.message);
                    return;
                }
                const productDbData = JSON.parse(data);

                const newProductDbData = productDbData.filter(product => {
                    return product.id !== id;
                });

                fs.writeFile(productDbPath, JSON.stringify(newProductDbData), 'utf-8', (err) => {
                    if (err) {
                        reject(err.message);
                        return;
                    }

                    resolve(productDbData,);
                })
            });
        });
    }
}