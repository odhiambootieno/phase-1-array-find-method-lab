function superbowlWin(record) {
    // Use find to locate the first object with result "W"
    const winningRecord = record.find(game => game.result === "W");
    
    // If a winning record is found, return the year; otherwise, return undefined
    return winningRecord ? winningRecord.year : undefined;
  }
  
  // Export the function if needed
  module.exports = superbowlWin;
