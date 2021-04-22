
export const getTickets = async () => {
    const res = await fetch('http://localhost:8080/tickets');
    const tickets = await res.json();
    return tickets.ultimos;
}