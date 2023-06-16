const asyncHandler = require('express-async-handler');
const Training = require('../models/trainingModel');

// @desc Get trainings
// @route GET/api/trainings
// @access Private
const getTrainings =  asyncHandler(async (req, res) => {
  const trainings = await Training.find();

  res.status(200).json(trainings)
});

// @desc Create training
// @route POST/api/trainings
// @access Private
const addTraining = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error('add a name');
  }

  const training = await Training.create({
    name: req.body.name,
    startDay: req.body.startDay,
    videoUrl: req.body.videoUrl,
    description:req.body.description,
  });
  
  res.status(200).json(training)
});

// @desc Update training
// @route PUT/api/trainings/:id
// @access Private
const updateTraining = asyncHandler(async (req, res) => {
  const training = await Training.findById(req.params.id);

  if (!training) {
    res.status(400);
    throw new Error('Training not found')
  };

  const  updatedTraining = await Training.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
  });
  res.status(200).json(updatedTraining)
});

// @desc Delete training
// @route DELETE/api/trainings/:id
// @access Private
const deleteTraining = asyncHandler(async (req, res) => {
  const training = await Training.findById(req.params.id);

  if (!training) {
    res.status(400);
    throw new Error('Training not found')
  };
  
  await Training.deleteOne({id: req.params.id});

  res.status(200).json({ 
    message: `Deleted training ${req.params.id}`,
    id: req.params.id
   })
});

module.exports = {
  getTrainings,
  addTraining,
  updateTraining,
  deleteTraining
}