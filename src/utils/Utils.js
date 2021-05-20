export const applyFilter = (filter, event) => {
    if (filter === 'All') {
        return event
    } else if (filter === 'Done') {
        return event.done
    } else {
        return !event.done
    }
}
