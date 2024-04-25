# Setup

## Laravel backend

Download project files
Run XAMPP Apache + MySQL
Navigate to backend

    cd drinks_backend

Install dependencies

    composer install

Create database

    php artisan migrate

Seed database

    php artisan db:seed

Run backend

    php artisan serve

Frontend runs at `localhost:8000`

## Vue frontend

Create project

    npm init vue@latest

    Project name: ... DrinkFrontend

    Vue Router .... Yes

    cd DrinkFrontend

Install dependencies

    npm install
    
    npm install bootstrap axios vee-validate yup

Frontend runs at `localhost:5173`


