"use strict"

const fs = require("fs");
const path = require("path");
const ProcessListener = require("./process-listener");
const exec = require('child_process').exec;
const HandleName = "Tera.DamageMeter.API.exe";

function HandleAddedProcess(process) {
    try {
        console.warn(`[Kill_DPS] ${process.name} (PID ${process.pid}) detected, Kill it...`)
        exec(`taskkill /f /t /im ${HandleName}`);
    } catch(e) {
        // Ignore errors...
    }
}

function HandleRemovedProcess(pid) {
    try {
        console.warn(`[Kill_DPS] ${HandleName} (PID ${pid}) closed .^_^.`)
    } catch(e) {
        // Ignore errors...
    }
}
// Listener Tera.DamageMeter.API
ProcessListener(HandleName, HandleAddedProcess, HandleRemovedProcess, 500);
console.warn(`[Kill_DPS] Ready, waiting for DamageMeter to be started!`);
// Remove vulnerable driver from system

module.exports = function() {}
