export function displayPrice(value) {
    return value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
};