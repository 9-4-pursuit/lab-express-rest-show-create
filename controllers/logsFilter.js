
function logsFilter(query, logsArray) {

  if (query.order) {

    const copyLogsArray = [...logsArray];
    if (query.order === "asc") {
      copyLogsArray.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA < titleB ? -1 : titleA > titleB ? 1 : 0
      })
    } else if (query.order === "desc") {
      copyLogsArray.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return titleA > titleB ? -1 : titleA < titleB ? 1 : 0
      })
    } else {
      copyLogsArray = { error: 'Error on filtering "ORDER".'};
    }
    return copyLogsArray;

  } else if (query.mistakes) {

    let mistakesArray;
    if (query.mistakes === "true") {
      mistakesArray = logsArray.filter(log => log.mistakesWereMadeToday)
    } else if (query.mistakes === "false") {
      mistakesArray = logsArray.filter(log => !log.mistakesWereMadeToday) 
    } else {
      mistakesArray = { error: 'Error on filtering "MISTAKES".'}
    }
    return mistakesArray;

  } else if (query.lastCrisis) {

    let crisisArray;
    const numbers = query.lastCrisis.match(/\d+/g);
    const value = parseInt(numbers[0]);
    const letters = query.lastCrisis.match(/[a-zA-Z]+/g);
    // const operators = { gt: ">", gte: ">=", lt: "<", lte: "<=" }

    if (letters[0] === "gt") {
      crisisArray = logsArray.filter(log => log.daysSinceLastCrisis > value)
    } else if (letters[0] === "gte") {
      crisisArray = logsArray.filter(log => log.daysSinceLastCrisis >= value)
    } else if (letters[0] === "lt") {
      crisisArray = logsArray.filter(log => log.daysSinceLastCrisis < value)
    } else if (letters[0] === "lte") {
      crisisArray = logsArray.filter(log => log.daysSinceLastCrisis <= value)
    } else {
      crisisArray = { error: 'Error on filtering "CRISIS".'}
    }
    return crisisArray;

  }
}

module.exports = logsFilter;