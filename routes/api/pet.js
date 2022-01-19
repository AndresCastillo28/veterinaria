const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Pet = require('../../models/Pet');
const User = require('../../models/User');

// @route   GET api/pet/pet
// @desc    GET current pets profile
// @access  Private
router.get('/', auth, async (req, res) => {
    try {
        const pet = await Pet.findOne({ user: req.user.id }).populate('user', 'name');

        if(!pet) {
            return res.status(400).json({
                msg: 'There is a no pet for this user'
            })
        }

        res.json(pet);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/pet/pet
// @desc    Create or Update pet profile
// @access  Private

router.post('/',[auth,
    [
    check('name', 'El nombre es Requerido')
    .not()
    .isEmpty(),
    check('weight', 'El peso es requerido')
    .not()
    .isEmpty(),
    check('birthday', 'La fecha de nacimiento es requerida')
    .not()
    .isEmpty(),
    check('breed', 'La raza es requerida')
    .not()
    .isEmpty()
    ]
  ],
   async (req, res) => {
       const errors = validationResult(req);
       if(!errors.isEmpty()){
           return res.status(400).json({errors: errors.array()});
       }
       const {
           name,
           weight,
           birthday,
           vaccines,
           disseases,
           breed
       } = req.body;

       //Build pet object
       const petFields = {};
       petFields.user = req.user.id;
       petFields.name = name;
       petFields.weight = weight;
       petFields.birthday = birthday;
       petFields.breed = breed;
       if(vaccines) petFields.vaccines = vaccines;
       if(disseases) petFields.disseases = disseases;
       
       try {
           let pet = Pet.findOne({ user: req.user.id });

           if(pet) {
            //Update
            pet = await Pet.findOneAndUpdate(
                { user: req.user.id },
                { $set: petFields },
                { new:true }
                );

                return res.json(pet);
           }

           //Create
           pet = new Pet(petFields);

           await pet.save();
           res.json(pet);
       } catch (err) {
           console.error(err.message)
           res.status(500).send('Server Error');
       }
   }
   );


module.exports = router;