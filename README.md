# ✈️ Flight System Push Notifications for Indigo Airline ✈️

## 📄 Overview

The Flight System Push Notifications project is designed to provide real-time flight status updates and notifications to passengers of Indigo Airline. The system offers:

- Current flight statuses : Including delays, cancellations, and gate changes.
- Notifications : Delivered through app notifications and Email notifications to keep passengers informed.
- Integration with airport systems : Ensuring accurate and timely updates by pulling data from airport databases.

### 🎛️ System Components

1.  Admin Panel : Accessible to authorized personnel with specific permissions. It offers comprehensive access to manage flights, gates, and airports.

2.  Customer Panel : Designed for passengers, allowing them to manage their bookings, including CRUD (Create, Read, Update, Delete) operations. Customers can book multiple tickets and manage their flight details.

## 🛣️ Application Routes

### 🔒 Authentication and User Management

- `/signin`: Sign-in page for users.
- `/sign-up`: Sign-up page for new users.
- `/CustomerSignin`: Sign-in page for customers.
- `/CustomerPanel/`: Customer's personalized dashboard, accessible after signing in.
- `/ViewProfile/`: View profile information of a specific customer.

### 👥 Client and Admin Management

- `/Client`: Displays a list of clients.
- `/AddEditClient`: Add or edit client details.
- `/Update/`: Update specific client details.
- `/View/`: View details of a specific client.

### ✈️ Airplane and Flight Management

- `/Airplane`: List of airplanes.
- `/AddEditAirplane`: Add or edit airplane details.
- `/UpdateAirplane/`: Update details of a specific airplane.
- `/ViewAirplane/`: View details of a specific airplane.
- `/Flight`: List of flights.
- `/AddFlight`: Add a new flight.
- `/ViewFlight/`: View details of a specific flight.

### 📢 Flight Status and Notifications

- `/FlightStatus`: View flight statuses.
- `/ViewFlightStatus/`: View the status of a specific flight.
- `/push-notifications`: Manage push notifications for flight updates.

### 🛫 Gate, Airport, and Schedule Management

- `/Gates`: List of gates.
- `/ViewGates/`: View details of a specific gate.
- `/Airport`: List of airports.
- `/ViewAirport/`: View details of a specific airport.
- `/Schedule`: List of schedules.
- `/AddEditSchedule`: Add or edit schedule details.
- `/UpdateSchedule/`: Update a specific schedule.
- `/ViewSchedule/`: View details of a specific schedule.

### 🎟️ Ticket and Booking Management

- `/Ticket`: View tickets.
- `/EditTicket`: Edit ticket details.
- `/ViewTicket/`: View details of a specific ticket.
- `/BookTicket/`: Book a ticket for a specific flight.
- `/BoardingPass/`: View boarding pass details.
- `/Invoice/`: View the invoice for a booking.
- `/ViewCustomerTickets/`: View all tickets booked by a specific customer.

### 🌟 Reviews and Feedback

- `/Reviews`: View customer reviews.
- `/ViewReviews/`: View specific review details.
- `/AddReviews/`: Add a review for a specific service or flight.

### 📄 General Pages

- `/AvailableFlights/`: View available flights.
- `/Booking`: Booking page for flights.
- `/Home`: Home page of the application.
- `/about`: About page with information about the service.
- `/contact-us`: Contact page for customer support.

## 🎨 Front End

The front end is built using React.js , providing a dynamic and responsive user interface. Key technologies and tools include:

- React.js : The primary library for building the UI.
- Firebase/app & Firebase/messaging : For enabling push notifications.
- FontAwesome : For scalable vector icons.
- Tailwind CSS : A utility-first CSS framework.
- Axios : For making API requests.
- Bootstrap : For responsive and mobile-first development.
- React UI Kit : A collection of UI components and layouts.
- React Router Dom : For navigation and route management.
- Toastify : For displaying toast messages.
- React-Bootstrap : Integrating Bootstrap with React.
- Burgermanu : For creating responsive and interactive menus.
- SweetAlert : For customizable alerts and dialogs.

These tools ensure a polished and user-friendly front-end experience.

## 🔙 Backend

The backend, developed using Node.js , offers a robust server-side infrastructure. Key components include:

- Node.js : For building scalable network applications.
- Express : A web framework for server and routing.
- CORS : Middleware for handling cross-origin requests.
- Firebase Admin : For backend services including authentication and database access.
- Nodemailer : Backend service for sending mails using Node
- pg (PostgreSQL) : For data storage and retrieval.
- Nodemon : For automatic server restarts during development.
- Body-Parser : For parsing incoming request bodies.

This stack supports efficient backend operations, ensuring secure communication between the client and server.

## 🗄️ Database

In the Flight System Push Notifications project, a SQL database is used to manage and store data, with PostgreSQL as the chosen database system. Raw SQL queries are utilized for data operations, ensuring precise control over data manipulation and retrieval.

### 🛠️ Schema Design

The database schema is designed to represent various entities and their relationships within the system. Below is an overview of the entities and their attributes:

### 📋 Entities and Attributes

1.  🛡️ Admin

- `username`: The unique identifier for the admin.
- `password`: The password for admin access.

2.  👤 Client

- `client_id`: A unique identifier for the client.
- `password`: The client's password for authentication.
- `passport`: The client's passport information.
- `phone_number`: Contact number of the client.
- `email`: The client's email address.
- `first_name`: The client's first name.
- `middle_name`: The client's middle name (if any).
- `last_name`: The client's last name.

3.  ✈️ Airport

- `airportCode`: The unique code representing the airport.
- `city`: The city where the airport is located.
- `name`: The name of the airport.

4.  🚪 Gates

- `gateNo`: The number assigned to a specific gate at the airport.

5.  📅 Schedule

- `scheduleId`: A unique identifier for the schedule.
- `departureTime`: The scheduled departure time.
- `arrivalTime`: The scheduled arrival time.
- `duration`: The duration of the flight.

6.  🛩️ Airplane

- `airplaneId`: A unique identifier for the airplane.
- `max_seats`: The maximum seating capacity of the airplane.

7.  📶 FlightStatus

- `flightStatusId`: A unique identifier for the flight status.
- `status`: The current status of the flight (e.g., On Time, Delayed).

8.  🚀 Flight

- `flightNo`: The unique number assigned to a flight.
- `flightStatusId` (Foreign Key): Links to the `FlightStatus` entity.
- `airplaneId` (FK): Links to the `Airplane` entity.
- `scheduleId` (FK): Links to the `Schedule` entity.

9.  🧾 Booking

- `bookingId`: A unique identifier for a booking.
- `clientId` (FK): Links to the `Client` entity.
- `flightNo` (FK): Links to the `Flight` entity.
- `airportCode` (FK): Links to the `Airport` entity.

### 🔗 Relationships

- An Admin can alter or modify Booking records.
- A Client can make and manage Booking reservations.
- A Client can also provide CustomerReview feedback.
- An Airport consists of multiple Gates .
- An Airport handles Booking operations.
- A Flight is associated with multiple Booking entries.
- A Flight is assigned a specific Airplane .
- A Flight follows a specific Schedule .

### 🖼️ ER Diagram

I have attach ER Diagaram image in backend folder!!

The Entity-Relationship (ER) diagram visually represents the schema's entities and relationships, illustrating how data is interconnected within the system:

- `[Admin] ---- alters/modify ----> [Booking]`
- `[Client] ---- reserves ----> [Booking]`
- `[Client] ---- gives ----> [CustomerReview]`
- `[Airport] ---- has ----> [Gate]`
- `[Airport] ---- has ----> [Booking]`
- `[Flight] ---- assigns ----> [Booking]`
- `[Flight] ---- assigned ----> [Airplane]`
- `[Flight] ---- has ----> [Schedule]`

---

This structured approach to the database design ensures efficient data management and retrieval, supporting the application's robust functionality. 📊

## 📲 Push Notifications

### 🔧 Backend Integration

- FCM Setup : The backend uses Firebase Admin SDK, initialized with service account credentials, to send push notifications.
- Notification Sending : Notifications are triggered for events like delays or gate changes. Each device's unique FCM token targets specific users, and the payload includes details relevant to the event.

### 💻 Frontend Integration

- Service Worker : Manages incoming notifications and displays them in the user's browser.
- Firebase Messaging : Manages notifications on the frontend. It requests user permission, retrieves an FCM token, and listens for messages.
- Handling Notifications : Notifications are displayed using a library like Toastify, ensuring users are informed about important updates.

### 💻 Email Integration

- Integrated email notifications using Nodemailer and Ethereal setup.
- Implemented a system to automatically send email notifications to users in case of events such as flight delays, status changes, or gate changes.
- The system ensures that specific users receive tailored messages, providing them with timely and relevant information about their flights.

📌 Note: While Ethereal is a great option for low level environmnet, I also recommend using services like SendGrid or TrueConnect for production environments. These paid services offer more robust features and reliable delivery, ensuring that emails and messages reach users efficiently.

### 📢 User Experience

- Real-time Updates : Provides passengers with real-time flight information.
- Seamless Integration : Works across devices and platforms.
- Customizable Alerts : Tailored notifications based on user preferences.

This comprehensive system ensures passengers are well-informed and engaged throughout their travel experience.

---

## Setup Instructions 🚀

### Front End Setup 💻

1.  Navigate to the Front End Directory:

Terminal:
cd frontend

2.  Install Dependencies:

Terminal:
npm install

3.  Create and Configure Environment Variables:

- Create a `.env` file in the front-end folder.
- Use the reference from `.env.example` to add your environment variables.

4.  Start the Front End Application:

Terminal:
npm start

Your front-end application should now be up and running! 🌟

### Back End Setup 🔧

1.  Navigate to the Back End Directory:

Terminal:
cd backend

Terminal:
2.Install Dependencies:

Terminal:
npm install

3.  Create and Configure Environment Variables:

- Create a `.env` file in the back-end folder.
- Use the reference from `.env.example` to add your environment variables.

4.  Start the Backend Application:

Terminal:
node index.js

The backend server will be running on port 5000 or port you entered in env! 🚀

5.  Start the Push Notification Service:

-In backend folder you need to add a file named as [flight-management-system-7a80f-firebase-adminsdk-thh18-815317303e.json] [This name will be as per your project name]

-This file helps you configure your firebase push notification servive and this is a very important step.

-You will be able to find this file in your Firebase Project console, In Project Overview > project Settings > Service Accounts > Generate New Private Key

-The file will be downloaded , just move this file to your backend root folder and your are ready to go! 🚀

Terminal:

node firebase-server.js
Push notifications should now be active! 📩

node email-notif.js
Email will be sent out to the email Id Provided!📩

This README.md provides a comprehensive overview of the Flight System Push Notifications application, showcasing its features, technology stack, and user experience enhancements. 🚀
