{\rtf1\ansi\ansicpg1252\cocoartf2758
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Define your teams and their members\
const teams = \{\
    "Call Girls": ["Sandy", "Linda", "Sandra", "Awa"],\
    "Outbound Ship": ["Simon", "Vincent", "William", "Josue", "Quentin"]\
\};\
\
// Initial simulated data (can be replaced with actual manual input)\
let callsData = \{\
    "Call Girls": \{\
        "Sandy": 0,\
        "Linda": 0,\
        "Sandra": 0,\
        "Awa": 0\
    \},\
    "Outbound Ship": \{\
        "Simon": 0,\
        "Vincent": 0,\
        "William": 0,\
        "Josue": 0,\
        "Quentin": 0\
    \}\
\};\
\
function updateTable() \{\
    const tableBody = document.querySelector('#scoreboard tbody');\
    tableBody.innerHTML = '';\
\
    // Iterate over each team and member\
    Object.keys(teams).forEach(team => \{\
        teams[team].forEach(member => \{\
            // Create table row for each member\
            const tr = document.createElement('tr');\
            const tdTeam = document.createElement('td');\
            const tdName = document.createElement('td');\
            const tdCalls = document.createElement('td');\
\
            tdTeam.textContent = team;\
            tdName.textContent = member;\
            tdCalls.textContent = callsData[team][member];\
\
            tr.appendChild(tdTeam);\
            tr.appendChild(tdName);\
            tr.appendChild(tdCalls);\
\
            tableBody.appendChild(tr);\
        \});\
    \});\
\}\
\
// Simulate updating calls data (replace with actual data entry mechanism)\
function manuallyUpdateCallsData(team, member, calls) \{\
    if (callsData[team] && callsData[team][member] !== undefined) \{\
        callsData[team][member] = calls;\
        updateTable(); // Update table after data entry\
    \} else \{\
        console.error(`Member '$\{member\}' not found in team '$\{team\}'.`);\
    \}\
\}\
\
// Simulate initial data entry (can be replaced with actual user input)\
manuallyUpdateCallsData("Call Girls", "Sandy", 10);\
manuallyUpdateCallsData("Call Girls", "Linda", 15);\
manuallyUpdateCallsData("Outbound Ship", "Simon", 8);\
manuallyUpdateCallsData("Outbound Ship", "Vincent", 12);\
\
// Example of how to update data dynamically (for demonstration)\
setTimeout(() => \{\
    manuallyUpdateCallsData("Call Girls", "Sandy", 12);\
\}, 5000); // Simulates updating Sandy's calls after 5 seconds\
\
// Example of how to update data dynamically (for demonstration)\
setTimeout(() => \{\
    manuallyUpdateCallsData("Outbound Ship", "Vincent", 15);\
\}, 10000); // Simulates updating Vincent's calls after 10 seconds\
}