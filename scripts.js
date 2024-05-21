function checkAvailability() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const roomType = document.getElementById('roomType').value;

    if (name && email && checkin && checkout && roomType) {
        const bookingSummary = `
            <h3>Booking Summary</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Check-in Date:</strong> ${checkin}</p>
            <p><strong>Check-out Date:</strong> ${checkout}</p>
            <p><strong>Room Type:</strong> ${roomType}</p>
            <p>Availability: <strong>Available</strong></p>
        `;
        document.getElementById('bookingSummary').innerHTML = bookingSummary;
        document.getElementById('bookingSummary').style.display = 'block';
    } else {
        alert('Please fill in all fields to check availability.');
    }
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking successful! An email confirmation will be sent to you shortly.');
});
