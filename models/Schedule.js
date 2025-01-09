const db = require('../config/database');

exports.getAllSchedules = function(callback) {
    db.query('SELECT * FROM schedules', callback);
};

exports.getScheduleById = function(id, callback) {
    db.query('SELECT * FROM schedules WHERE id = ?', [id], callback);
};

exports.createSchedule = function(newSchedule, callback) {
    db.query('INSERT INTO schedules SET ?', newSchedule, callback);
};

exports.updateSchedule = function(id, updatedSchedule, callback) {
    db.query('UPDATE schedules SET ? WHERE id = ?', [updatedSchedule, id], callback);
};

exports.deleteSchedule = function(id, callback) {
    db.query('DELETE FROM schedules WHERE id = ?', [id], callback);
};