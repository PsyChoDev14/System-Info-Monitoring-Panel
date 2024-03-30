window.onload = function() {
    // Function to generate random number between min and max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Simulate fetching network usage
    function fetchNetworkUsage() {
        var incoming = getRandomInt(100, 1000);
        var outgoing = getRandomInt(100, 1000);
        document.getElementById('incomingBytes').innerText = incoming;
        document.getElementById('outgoingBytes').innerText = outgoing;
    }

    // Simulate fetching CPU usage
    function fetchCPUUsage() {
        var cpuUsage = getRandomInt(1, 100);
        document.getElementById('cpuUsage').innerText = cpuUsage;
    }

    // Simulate fetching RAM usage
    function fetchRAMUsage() {
        var ramUsage = getRandomInt(1, 100);
        document.getElementById('ramUsagePercent').innerText = ramUsage;
    }

    // Simulate fetching disk usage
    function fetchDiskUsage() {
        var diskUsage = getRandomInt(1, 100);
        document.getElementById('diskUsagePercent').innerText = diskUsage;
    }

    // Simulate fetching running process count
    function fetchProcessCount() {
        var processCount = getRandomInt(1, 100);
        document.getElementById('runningProcesses').innerText = processCount;
    }

    // Fetch system information periodically
    setInterval(function() {
        fetchNetworkUsage();
        fetchCPUUsage();
        fetchRAMUsage();
        fetchDiskUsage();
        fetchProcessCount();
    }, 2000); // Fetch every 2 seconds
};
