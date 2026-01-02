# Person Management System - RESTful API

A complete RESTful web service built with Node.js, Express, and MongoDB for managing person records.

## Features

- ✅ Create new person records
- ✅ View all persons in a table
- ✅ Update existing person details
- ✅ Delete person records
- ✅ MongoDB database integration
- ✅ Form validation
- ✅ Responsive UI design

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start MongoDB
4. Run server: `npm run dev`
5. Open: `http://localhost:3000`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/person` | Display list of all people |
| GET | `/person/create` | Display create form |
| POST | `/person` | Create new person |
| GET | `/person/:id/edit` | Display edit form |
| POST | `/person/:id` | Update person |
| GET | `/person/:id/delete` | Display delete confirmation |
| POST | `/person/:id/delete` | Delete person |

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS

## License

MIT
