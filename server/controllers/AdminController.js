const AdmissionQuery = require("../models/AdmissionEnquiry");
const Events = require("../models/EventsSchema");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncError = require("../utils/catchAsyncError");

exports.postEvent=catchAsyncError(async(req,res,next)=>{

    const {duration,date,title,days}=req.body;

    await Events.create(req.body);

    res.status(201).json({
        success:true,
        message:"Event created successfully"
    })
})

exports.deleteEvent=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params;

    const findId=await Events.findById({_id:id})

    if(!findId){
        return next(new ErrorHandler("Id not found",404));
    }

    if(!id){
        return next(new ErrorHandler("Invalid id",401));
    }

    await Events.deleteOne({_id:id});

    res.status(200).json({
        success: true,
        message:"Event deleted successfully"
    })


})

exports.getAllEvents=catchAsyncError(async(req,res,next)=>{

    const events=await Events.find();
    const totalEvents=await Events.countDocuments()
    res.status(200).json({
        success:true,
        events,
        totalEvents
    })


})

exports.getAllAdmissionQueries=catchAsyncError(async(req,res,next)=>{

    const queries=await AdmissionQuery.find();
    const totalQueries=await AdmissionQuery.countDocuments()
    res.status(200).json({
        success:true,
        queries,
        totalQueries
    })


})