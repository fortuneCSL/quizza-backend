const crudService = require("../services/crudService");
const Response = require("../models/responseModel");
const catchAsync = require("../error/catchAsync");
const io = require("../../server");

exports.saveResponse = catchAsync(async (req, res, next) => {
  const response = new Response();
  response.data = req.body;

  await response.save();

  const allResponse = await Response.find();

    res.status(200).json({
    status: "sucsess",
    response: response,
    allResponse,
  });
});

exports.getResponses = crudService.getAll(Response);