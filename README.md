# Sequence builder
A web application for creating and managing sequences with customizable steps. Built with TypeScript, React, and Express.js.

## Features

- Create and manage sequences with multiple steps
- Each sequence contains a name, summary, and ordered steps
- RESTful API for sequence management
- Real-time updates using React
- Modern UI with Tailwind CSS

## Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

## Setup

1. Clone the repository:
```shell
git clone git@github.com:ichi404gh/sf-sequence.git 
cd sf-sequence

```
2. Install dependencies:
```shell
npm install
```
## Development

To start the development server:

1. Start the backend server:
```shell
npm run api
```
The server will start on `http://localhost:3003`

2. Start the frontend development server:
```shell
npm run dev
```
The frontend will be available at `http://localhost:5173`

## API Endpoints

- `GET /api/sequences` - Get all sequences
- `GET /api/sequences/:id` - Get a specific sequence
- `POST /api/sequences` - Create a new sequence
- `PUT /api/sequences/:id` - Update an existing sequence

## Tech Stack

- **Frontend**:
    - React 19.1.0
    - TypeScript 5.8.3
    - Tailwind CSS 4.1.11
    - Vite 7.0.0
    - TipTap Editor

- **Backend**:
    - Express 5.1.0

## License

Copyright (c) 2025 Denis Filatov.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see <https://www.gnu.org/licenses/agpl-3.0.html>.
