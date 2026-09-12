# employee-helpdesk-api
RESTful API project for managing employee helpdesk tickets.
## 📌 API Endpoints

### Tickets
- **GET /tickets** → Fetch all tickets
- **POST /tickets** → Create a new ticket
- **GET /tickets/:id** → Fetch a specific ticket by ID
- **DELETE /tickets/:id** → Delete a ticket by ID

### Example Request (POST /tickets)
```json
{
  "title": "Laptop issue",
  "description": "My laptop is not starting."
}
