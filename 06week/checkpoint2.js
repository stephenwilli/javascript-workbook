let userArray = [
    {
            customer: {
                id: 1,
                customerName:"Marilyn Monroe",
                customerCity:"New York City",
                customerState:"NY",
                product:"Yellow Chair",
                productPrice: 19.99
            }
        },
        {
            customer: {
                id: 2,
                customerName:"Abraham Lincoln",
                customerCity:"Boston",
                customerState:"MA",
                product:"Movie Tickets",
                productPrice: 27.00
            }
        },
                {
            customer: {
                id: 3,
                customerName:"John F. Kennedy",
                customerCity:"Dallas",
                customerState:"TX",
                product:"Mustang Convertible",
                productPrice: 24999.99
            }
        },
                {
            customer: {
                id: 4,
                customerName:"Martin Luther King",
                customerCity:"Burmingham",
                customerState:"AL",
                product:"Sandwiches",
                productPrice: 7.99
            }
        },
];

let userInfo = function(cust) {
    let name = cust.customer.customerName;
    let price = cust.customer.productPrice;
    let product = cust.customer.product;
    let city = cust.customer.customerCity;
    let state = cust.customer.customerState;
    console.log(name, 'paid', price, 'for', product, 'in', city,',', state);
    
}

let userList = userArray.map(userInfo);












