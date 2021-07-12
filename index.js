module.exports = (str, count = 2) => {
    const rockets = '🚀'.repeat(count)
    return `${rockets} ${str} ${rockets}`
}
