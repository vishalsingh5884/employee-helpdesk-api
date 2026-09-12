# Employee Helpdesk API

A simple RESTful API project for managing employee helpdesk tickets.  
Currently uses **in-memory storage** (no database required).

---

## 📌 API Endpoints

### Tickets
- **GET /tickets** → Fetch all tickets
- **POST /tickets** → Create a new ticket
- **GET /tickets/:id** → Fetch a specific ticket by ID
- **PUT /tickets/:id** → Update a ticket (title, description, or status)
- **DELETE /tickets/:id** → Delete a ticket by ID

---

## 📌 Ticket Fields
Each ticket contains:
- `id` → Auto-generated unique ID  
- `title` → Short description of the issue  
- `description` → Detailed explanation of the issue  
- `status` → `"open"` (default) or `"closed"`  
- `created_at` → Timestamp when ticket was created  

---

## 📌 Example Request (POST /tickets)
```json
{
  "title": "Laptop issue",
  "description": "My laptop is not starting."
}
