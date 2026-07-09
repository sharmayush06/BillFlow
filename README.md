# BillFlow

> A production-ready SaaS Point of Sale (POS) and Billing Platform built with Spring Boot and React for street vendors, grocery stores, and small businesses.

BillFlow simplifies day-to-day business operations by combining billing, inventory management, sales analytics, and shop management into a single platform. It is designed with a scalable architecture that can evolve from a monolithic application into a microservices-based SaaS product.

---

## Features

### Product Management
- Add, update, delete, and search products
- Barcode and SKU support
- Inventory tracking
- Low stock alerts
- Product images
- Soft delete support

### Shop Management
- Multiple shop support
- Shop profile management
- GST information
- Address management
- Currency configuration
- Logo upload

### Billing (POS)
- Fast invoice generation
- Multiple products per bill
- Automatic subtotal calculation
- Discount support
- Tax calculation
- Total amount calculation
- Payment status tracking
- Payment method support
- Automatic bill numbering

### Inventory
- Automatic stock deduction after billing
- Manual stock updates
- Increase/decrease stock
- Low stock monitoring

### Dashboard Analytics
- Today's sales
- Monthly sales
- Today's profit
- Monthly profit
- Products sold
- Top-selling products
- Recent bills
- Low-stock products

### Security
- Spring Security
- JWT Authentication *(In Progress)*
- Role-based authorization *(Planned)*

### Future Features
- Bluetooth thermal receipt printing
- QR Code payments
- Razorpay integration
- Customer management
- Supplier management
- Expense management
- Multi-user support
- Sales reports
- Excel/PDF exports
- Notification system
- Microservices architecture

---

## Tech Stack

### Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Spring Security
- Hibernate
- MySQL
- Maven

### Frontend

- React
- Tailwind CSS
- React Router
- Axios

### Tools

- Git
- GitHub
- Postman
- IntelliJ IDEA
- VS Code

---

## Architecture

```
Frontend (React)
        │
 REST APIs
        │
Spring Boot Backend
        │
 Service Layer
        │
 Repository Layer
        │
      MySQL
```

---

## Modules

```
BillFlow
│
├── Authentication
├── Dashboard
├── Shop
├── Product
├── Billing
├── Inventory
├── Analytics
└── Reports
```

---

## Database Design

```
Shop
 │
 ├── Products
 │
 ├── Bills
 │      │
 │      └── Bill Items
 │
 └── Dashboard Analytics
```

---

## API Highlights

### Shop APIs

- Create Shop
- Get Shops
- Update Shop
- Delete Shop

### Product APIs

- Add Product
- Update Product
- Delete Product
- Search Product
- Update Stock
- Low Stock Products

### Bill APIs

- Create Bill
- Bill Details
- Shop Bills
- Delete Bill

### Dashboard APIs

- Dashboard Summary
- Today's Sales
- Monthly Sales
- Today's Profit
- Monthly Profit
- Top Selling Products

---

## Project Structure

```
src
├── controller
├── service
├── repository
├── model
├── dto
├── config
├── security
├── exception
└── util
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/sharmayush06/BillFlow.git
```

### Backend

```bash
cd backend

mvn clean install

mvn spring-boot:run
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Roadmap

### Phase 1 (Current)

- Product Management
- Shop Management
- Billing System
- Inventory
- Dashboard Analytics
- React Frontend

### Phase 2

- Customer Management
- Supplier Management
- Categories
- Expense Tracking
- Bluetooth Printing
- QR Payments
- Reports
- Excel Export

### Phase 3

- SaaS Platform
- Multiple Businesses
- Multi-user Roles
- Cloud Deployment
- Docker
- Redis
- Microservices
- AI-powered Analytics

---

## Why BillFlow?

BillFlow is designed to digitize local retail businesses with a modern, scalable POS platform. Instead of being just another CRUD application, it focuses on real-world business workflows including inventory management, billing, analytics, and future SaaS capabilities.

---

## Author

**Ayush Sharma**

- GitHub: https://github.com/sharmayush06
