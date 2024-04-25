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

(Check for API routes)

    php artisan route:list

## Vue frontend

Create project

    npm init vue@latest

    Project name: ... DrinkFrontend

    Vue Router .... Yes

Install dependecies

    