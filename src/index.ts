const displayArray = () => {
    const message = "Use Codefresh!!"
    const useCodefresh = [
    message,
    "   #                ##",
    "   ###           ####",
    "    ## ###     #######",
    "    ##  ###  ########",
    "     ##  ###  ######",
    "     ##  ###  ####",
    "    ###  ##  ###",
    "     #####",
    "        ##",
    "         ##"]

    useCodefresh.forEach(function (value) {
        console.log(value)
    })
}

displayArray()