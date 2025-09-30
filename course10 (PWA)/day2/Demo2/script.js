var dbPromise = idb.open('Couches',4,function(upgradeDB){
    console.log('create Table products')
    // upgradeDB.createObjectStore('Products',{keyPath:'id'})
    // upgradeDB.createObjectStore('Orders',{keyPath:'id'})
    var store = upgradeDB.transaction.objectStore('Products')
    store.createIndex('name','name',{unique:true})
})

onload = function(){
    this.document.getElementById('btn').onclick = AddProducts
    this.document.getElementById('btn2').onclick = AddOrders
    this.document.getElementById('btn3').onclick = fulfillOrders
    this.document.getElementById('btn4').onclick = SearchProduct
}

function AddProducts(){
    dbPromise.then(db=>{
        //create transaction--define table,permission
        var tx = db.transaction('Products','readwrite')
        var store = tx.objectStore('Products')

var items = [
        {
          name: 'Couch',
          id: 'cch-blk-ma',
          price: 499.99,
          color: 'black',
          material: 'mahogany',
          description: 'A very comfy couch',
          quantity: 3
        },
        {
          name: 'Armchair',
          id: 'ac-gr-pin',
          price: 299.99,
          color: 'grey',
          material: 'pine',
          description: 'A plush recliner armchair',
          quantity: 7
        },
        {
          name: 'Stool',
          id: 'st-re-pin',
          price: 59.99,
          color: 'red',
          material: 'pine',
          description: 'A light, high-stool',
          quantity: 3
        },
        {
          name: 'Chair',
          id: 'ch-blu-pin',
          price: 49.99,
          color: 'blue',
          material: 'pine',
          description: 'A plain chair for the kitchen table',
          quantity: 1
        },
        {
          name: 'Dresser',
          id: 'dr-wht-ply',
          price: 399.99,
          color: 'white',
          material: 'plywood',
          description: 'A plain dresser with five drawers',
          quantity: 4
        },
        {
          name: 'Cabinet',
          id: 'ca-brn-ma',
          price: 799.99,
          color: 'brown',
          material: 'mahogany',
          description: 'An intricately-designed, antique cabinet',
          quantity: 11
        }
      ];

    return Promise.all(items.map(item=>{
        console.log('adding item',item)
        return store.add(item)
    }))
    .then(()=>{
        console.log('items added successfully')
    })

    })
    .catch(err=>{
        console.log(err)
    })
}

function AddOrders(){
    dbPromise.then(db=>{
        var tx = db.transaction('Orders','readwrite')
        var store = tx.objectStore('Orders')

        var items = [
        {
          name: 'Cabinet',
          id: 'ca-brn-ma',
          price: 799.99,
          color: 'brown',
          material: 'mahogany',
          description: 'An intricately-designed, antique cabinet',
          quantity: 7
        },
        {
          name: 'Armchair',
          id: 'ac-gr-pin',
          price: 299.99,
          color: 'grey',
          material: 'pine',
          description: 'A plush recliner armchair',
          quantity: 3
        },
        {
          name: 'Couch',
          id: 'cch-blk-ma',
          price: 499.99,
          color: 'black',
          material: 'mahogany',
          description: 'A very comfy couch',
          quantity: 3
        }
      ];

      Promise.all(items.map(item=>{
        return store.add(item)
      }))
      .then(()=>{
        console.log('items added')
      })
      .catch(err=>{
        tx.abort()
        console.log(err)
      })
    })
    .catch(err=>{
        console.log(err)
    })
}


function fulfillOrders(){
    getOrders().then(orders=>{
        return processOrders(orders)
    }).then(products=>{
        // console.log(products)
        return updateProductsTable(products)
    })
}

function getOrders(){
    return dbPromise.then(db=>{
        var tx = db.transaction('Orders','readonly')
        var store = tx.objectStore('Orders')
        return store.getAll()
    })
}


function processOrders(orders){
    return dbPromise.then(db=>{
        var tx = db.transaction('Products','readonly')
        var store = tx.objectStore('Products')
        return Promise.all(orders.map(order=>{
            return store.get(order.id).then((product)=>{
                return compareQuantity(product,order)
            })
        }))
    })
}

function compareQuantity(product,order){
   return new Promise(function(resolve,reject){
        var qyitem = product.quantity - order.quantity
        if(qyitem<0){
            //error
            reject('out of stock')
        }
        else{
            //process order
            var item = product
            item.quantity = qyitem
            resolve(item)
        }
    })
    
}

function updateProductsTable(products){
    return dbPromise.then(db=>{
        var tx = db.transaction('Products','readwrite')
        var store = tx.objectStore('Products')

       return Promise.all(products.map(product=>{
            return store.put(product)
        }))
        .catch(err=>{
            tx.abort()
            console.log(err)
        }).then(()=>{
            console.log('products updated')
        })
    })
}
//1)get Orders
//2)process orders
//3)compare Quantity
//4)update products
//5)clear orders

function clearOrders() {
  dbPromise
    .then((db) => {
      var tx = db.transaction("Orders", "readwrite");
      var store = tx.objectStore("Orders");
 
      var clearRequest = store.clear();
 
      return clearRequest;
    })
    .then(() => {
      console.log(" All orders cleared");
    })
    .catch((err) => {
      console.log(" Error clearing orders:", err);
    });
}


function SearchProduct(){
    var pName = document.getElementById('pName').value

   return dbPromise.then(db=>{
        var tx = db.transaction('Products','readonly')
        var store = tx.objectStore('Products')
        // store.get()//primary-key
        var index = store.index('name')
        return index.get(pName)
    }).then(product=>{
        // console.log(product)
        if(product){
            var result=''
            for(var elem in product){
                result+=elem+"::"+product[elem]+"<br>"
            }
        }
        else{
            result = 'Not found'
        }
        document.getElementById('dv1').innerHTML = result

    })

}