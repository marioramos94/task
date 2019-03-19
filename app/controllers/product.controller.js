
const db =require("./../../database");

const productRef=db.collection('products')
const invoicesRef=db.collection('invoices')


exports.find = (req, res) => {   //get a complete game by game id
    
    console.log(req.query.id)
    var docRef = productRef.doc(req.query.id);

    var getDoc = docRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            
            
            //console.log('Document data:', doc.data());
            res.send(doc.data())
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });

            
};

exports.get = (req,res) => {   //get a complete game by game id
    
    var allProducts = productRef.get()
     
    .then(snapshot => {   
      let products ={}  
      snapshot.forEach(doc => {
      products[doc.id] =doc.data()
      });
      res.send(products)
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

            
};

exports.createproduct = (req, res) => {
    // Validate request        
    
    let {id,description,code,price} =req.body    
    let data ={description,code,price}
      // Add a new document in collection "cities" with ID 'LA'
    var setDoc = productRef.doc(id).set(data);

    res.send(req.body)   
};

exports.createinvoice = (req, res) => {
    // Validate request        
    
    let {id,description,code,price} =req.body    
    let data ={description,code,price}
      // Add a new document in collection "cities" with ID 'LA'
    var setDoc = productRef.doc(id).set(data);

    res.send(req.body)   
};


exports.report = (req,res) => {   //get a complete game by game id
    
    var allinvoices = invoicesRef.get()
     
    .then(snapshot => {   
       //Invoices  
      let invoices ={}  
      snapshot.forEach(doc => {
      invoices[doc.id] =doc.data().buyedProducts

      });
      
      res.send(invoices)
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });

            
};