class Customer extends Student {
    constructor(name, age, gender, product, myOrders) {
        super(name, age, gender);
        this.product = product;
        this.order1 = myOrders[0];
        this.order2 = myOrders[1] ;
    }
    placeOrder() {
        console.log(`${this.name} 고객이 ${this.order1}을 완료했습니다.`);
    }
}

module.exports = Customer;