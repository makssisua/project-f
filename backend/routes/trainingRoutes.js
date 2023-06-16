const express = require('express');
const router = express.Router();
const { 
  getTrainings,
  addTraining,
  updateTraining,
  deleteTraining
} = require('../controller/trainingsController');

router.route('/').get(getTrainings).post(addTraining);
router.route('/:id').put(updateTraining).delete(deleteTraining);;


module.exports = router; 