export function updateProxy(
    oldState,
    newValues
) {
    Object.entries(newValues).forEach(([key, value]) => {
        oldState[key] = value
    })
}
