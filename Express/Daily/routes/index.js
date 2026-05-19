var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
   res.render('Daily water intake');
 });
router.post('/createUser', [
  
    validateEmail,
    validatePassword
  ], function (req, res) {
  
    const errors = req.validationErrors || [];
 
    
    const validationResultErrors = validationResult(req);
    if (!validationResultErrors.isEmpty()) {
      
      errors.push(...validationResultErrors.array());
    }
 
    if (errors.length > 0) {
      
      res.render('hello-world', { errors, email: req.body.email });
    } else {
      const { email, password } = req.body;


      const newUser = new User({
      email,
      password,
      });
     
      
      newUser.save()
      .then(() => {
      res.render('form-data',{message:"Data saved to db"});
      })
      .catch((error) => {
      console.error(error);
      
      });
    }
  });

router.get('/getUser', function (req,res) {
    User.find().then(data => {
      res.render('index', {data:data})

    }).catch(error => {
      console.error(error);
      
    });
  })
 
  router.get('/signup', (req, res)=>{
   res.render('signup',{message:null,error:null})
})

const bcrypt = require('bcrypt');
router.post('/signup', (req, res)=>{
  const { email, password, confirmPassword } = req.body;
  const user = new User({ email,password })
  const validationError = user.validateSync();
 
  
  if (password !== confirmPassword) {
    return res.render('signup',{message:'Password and Confirm Password do not match',error:null});
  }


   
  if (validationError){


    return res.render('signup',{message:null,error:validationError.errors});


  }
  User.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        return res.render('signup',{message:'Email already taken',error:null});
      }else{
        
         return bcrypt.hash(password,10)
      }
    }).then(hashedPassword => {



      const signupUser = new User({ email, password:hashedPassword });
     return signupUser.save();


    }).then(() => {
      
      res.redirect('/login');
    }).catch(error => {
      console.error(error);
   
    });


})


module.exports = router;
