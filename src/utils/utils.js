
function formatDate(dateObj) {
    if (dateObj) {
        let year = dateObj.getFullYear();
        let month = ((dateObj.getMonth() + 1)).toString().padStart(2, '0');
        let day = dateObj.getDate().toString().padStart(2, '0');
        return (year + "-" + month + '-' + day);
    } else return null
}

export { formatDate }