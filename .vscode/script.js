
// ============================================
// SINGLETON LOGGER IMPLEMENTATION
// ============================================

const Logger = (function () {

    // Private variable stores the single instance
    let instance;

    // Creates the Logger object
    function createInstance() {

        const logs = [];

        return {

            // Adds a new log message
            addLog: function (msg) {
                logs.push(msg);
                displayLogs(logs);
            },

            // Returns all stored log messages
            getLogs: function () {
                return logs;
            }
        };
    }

    // Public interface of the Singleton
    return {

        getInstance: function () {

            // Create the instance only once
            if (!instance) {
                instance = createInstance();

                displayOutput(
                    "New Logger instance created"
                );

            } else {

                // Reuse the existing instance
                displayOutput(
                    "Using existing Logger instance"
                );
            }

            return instance;
        }
    };

})();

// ============================================
// DEMONSTRATION FUNCTIONS
// ============================================

// Stores the Logger instance
let logger;

// Creates or reuses the Logger instance
function createLogger() {
    logger = Logger.getInstance();
}

// Adds a log message
function logMessage() {

    // Check whether Logger is created
    if (!logger) {
        displayOutput(
            "Please create a Logger instance first!"
        );
        return;
    }

    // Generate message with current time
    const msg = "Log entry at " +
        new Date().toLocaleTimeString();

    // Add message to Singleton Logger
    logger.addLog(msg);
}

// Displays all stored log messages
function displayLogs(logs) {

    const output = document.getElementById("output");

    output.innerHTML =
        "<b>Logger Entries:</b><br>" +
        logs.join("<br>");
}

// Displays status messages
function displayOutput(msg) {

    const output = document.getElementById("output");

    output.innerHTML += msg + "<br>";
}
