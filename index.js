// Code your solution here
function findMatching(array, name) {
    let newDrivers = array.filter(driver => 
         driver.toLowerCase() === name.toLowerCase())
    return newDrivers
}

function fuzzyMatch(array, name) {
    let newDrivers = array.filter(driver =>
        driver[0] === name[0])
    return newDrivers
}

function matchName(array, name) {
    let newDrivers = array.filter(driver =>
        driver.name === name)
    return newDrivers
}