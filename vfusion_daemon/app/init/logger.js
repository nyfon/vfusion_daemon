module.exports = module => {
    return function() {
        let currentDate = new Date().toISOString();
        currentDate = currentDate.slice(0,10) + " " + currentDate.slice(11,19);
        let args = ["[" + currentDate +  "]" ,"[" + module.filename + "]"].concat([].slice.call(arguments));
        console.log.apply(console, args)
    }
}