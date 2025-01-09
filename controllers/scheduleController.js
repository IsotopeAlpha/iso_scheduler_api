const Schedule = require('../models/schedule');

exports.getAllSchedules = function(req, res) {
    Schedule.getAllSchedules((err, schedules) => {
        if (err) throw err;
        res.json(schedules);
        
    });
};

exports.getScheduleById = function(req, res) {
    Schedule.getScheduleById(req.params.id, (err, schedule) => {
        if (err) throw err;
        res.json(schedule);
    });
};

exports.createSchedule = function(req, res) {
    const newSchedule = {
        title: req.body.title,
        description: req.body.description,
        participants: req.body.participants,
        date: req.body.date,
        time: req.body.time
    };

    Schedule.createSchedule(newSchedule, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Schedule created successfully' });
    });
};

exports.updateSchedule = function(req, res) {
    const updatedSchedule = {
        title: req.body.title,
        description: req.body.description,
        participants: req.body.participants,
        date: req.body.date,
        time: req.body.time
    };

    Schedule.updateSchedule(req.params.id, updatedSchedule, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Schedule updated successfully' });
    });
};

exports.deleteSchedule = function(req, res) {
    Schedule.deleteSchedule(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ message: 'Schedule deleted successfully' });
    });
};