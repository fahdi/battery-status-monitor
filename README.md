# Battery Status Monitor

A simple API for monitoring and saving the charging status of a device's battery.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Installing

1. Clone the repository

```bash
git clone https://github.com/fahdi/battery-status-monitor.git
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash 
npm start
```

The API will be available at `http://localhost:3500/battery`.

## Endpoints

- `POST /battery`: Saves the battery charging status in the database

## Built With

- [Express](https://expressjs.com/) - The web framework used
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM

## Author

fahdi

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


