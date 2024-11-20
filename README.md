## Setting Up the Database and Running Migrations

Follow these steps to set up the database and apply migrations for this project.

### Prerequisites

Ensure you have the following installed on your system:
- **PHP >= 8.1**
- **Composer**
- **Laravel Framework**
- **MySQL Database Server**
- A `.env` file configured with your database credentials.

### Steps to Run Migrations

1. **Clone the Repository**
   ```bash
   git clone https://github.com/saihanhtet/meals-on-wheel.git
   cd meals-on-wheel
   ```

2. **Install Dependencies**
   Use Composer to install all necessary dependencies:
   ```bash
   composer install
   ```

3. **Configure the Environment**
   - Create a `.env` file by copying `.env.example`:
     ```bash
     cp .env.example .env
     ```
   - Update the `.env` file with your database configuration:
     ```env
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=meals_on_wheels
     DB_USERNAME=root
     DB_PASSWORD=your_database_password
     ```

4. **Run Migrations**
   Generate the migration tables and seed the database:
   ```bash
   php artisan migrate
   ```

5. **Seeding the Database (Optional)**
   If seeders are included in the project and you want to populate sample data, run:
   ```bash
   php artisan db:seed
   ```

### Troubleshooting

- If you encounter an error related to migrations:
  - Roll back the migrations:
    ```bash
    php artisan migrate:rollback
    ```
  - Fix the issue in the migration file and run migrations again:
    ```bash
    php artisan migrate
    ```

- Ensure your database server is running and the credentials in `.env` are correct.

### Notes
- Always back up your database before running migrations on a production server.
- For testing environments, you can use `php artisan migrate:fresh --seed` to reset and seed the database.

---
