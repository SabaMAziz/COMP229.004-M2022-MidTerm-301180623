// create a reference to the model

/* Filename: users.js
 Student: Saba Aziz
 StudentId: 301180623
 Class:COMP 229
*/

let CarModel = require('../models/car');

// Gets all cars from the Database and renders the page to list them all.
module.exports.carList = function(req, res, next) {  
    CarModel.find((err, carsList) => {
        //console.log(carList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('cars/list', {
                title: 'Cars List', 
                CarsList: carsList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}


// Gets a car by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    CarModel.findById(id, (err, carToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('cars/details', {
                title: 'Car Details', 
                car: carToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE

    let newCar = CarModel();

    res.render('cars/add_edit', {
        title: 'Add New Car Information',
        car: newCar,
        userName: req.user ? req.user.username : ''

    })
    

}

// Processes the data submitted from the Add form to create a new car
module.exports.processAddPage = (req, res, next) => {

    // ADD YOUR CODE HERE

    let newCar = CarModel({

        _id: req.body.id,
        make: req.body.make,
        model: req.body.model,
       year: req.body.year,
       kilometers: req.body.kilometers,
       doors: req.body.doors,  
       seats: req.body.seats,
       color: req.body.color,
       price: req.body.price

    });

    
    CarModel.create(newCar, (err, car) => {

        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            console.log(car);
            res.redirect('/cars/list'); // changed
            userName: req.user ? req.user.username : ''
         
        }
    });


}

// Gets a car by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;
    
    CarModel.findById(id,( err, carToEdit) => {
        if(err)
        {
            console.log(err);
            req.end(err);
        }
        else{

            res.render('cars/add_edit', {
                title: 'Edit Car Information',
               car: carToEdit,
               userName: req.user ? req.user.username : ''
            })
        }
    })

}

// Processes the data submitted from the Edit form to update a car
module.exports.processEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id
    
    let updatedCar = CarModel ({

        _id: req.body.id,
        make: req.body.make,
        model: req.body.model,
       year: req.body.year,
       kilometers: req.body.kilometers,
       doors: req.body.doors,  
       seats: req.body.seats,
       color: req.body.color,
       price: req.body.price

      });

      CarModel.updateOne({_id: id}, updatedCar, (err) =>{
        if(err)
        {
            console.log(err);
            res.send(err);
        }
        else{
            console.log(req.body);
            // refresh the book list
            res.redirect('/cars/list');///changed
            userName: req.user ? req.user.username : ''
            
        }
    });
    
}

// Deletes a car based on its id.
module.exports.performDelete = (req, res, next) => {
    
    // ADD YOUR CODE HERE
    let id = req.params.id;

    CarModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/cars/list')
           // userName: req.user ? req.user.username: ''
           userName: req.user ? req.user.username : ''
        }
    });





}