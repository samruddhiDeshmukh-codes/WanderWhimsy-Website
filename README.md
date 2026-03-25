WanderWhimsy Pro

WanderWhimsy Pro is a simple and elegant travel booking website that allows users to explore destinations and book trips easily. It provides a clean UI with destination cards, search functionality, and a booking form.

Features
Destination listing with images and details
Search functionality to find destinations
Booking form for trip reservations
Success popup after booking
Responsive grid layout
Clean and modern UI design
Project Structure
WanderWhimsy-Pro/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
Technologies Used
HTML5
CSS3
JavaScript (Vanilla JS)
How It Works
1. Destination Data

The project uses a JavaScript array (data) that stores destination details like:

Name
Country
Image URL
2. Rendering Destinations

The render() function:

Dynamically creates destination cards
Displays them in a grid layout
Populates the dropdown in the booking form
3. Search Functionality
User enters a location in the search bar
Presses Enter
The script checks if the destination exists
Displays result using an alert
4. Booking System
User fills the booking form
On submission:
Default form reload is prevented
A success popup is displayed
Popup disappears after 3 seconds
Key Functions
render()

Displays all destinations and updates the dropdown list.

Search Event

Triggered when user presses Enter in the search box.

Booking Event

Handles form submission and shows success message.

Setup Instructions
Download or clone the project
Ensure folder structure is correct:
CSS inside css/
JavaScript inside js/
Open index.html in a browser

Conclusion

This project is a beginner-friendly travel website demonstrating:

DOM manipulation
Event handling
Dynamic rendering

It is a good base for building a full-stack travel booking platform.
