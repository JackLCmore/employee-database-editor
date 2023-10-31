USE employees_db;

INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");
       
INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),       
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Lunchick-Seymour", 4, 3),
       ("John", "Doe", 8, 4),
       ("Jane", "Doe", 3, null),
       ("Rick", "Astley", 7, null),
       ("George", "Takei", 6, 6),
       ("Billie", "Eilish", 5, null),
       ("Jordan", "Peele", 1, null),
       ("Janice", "Joplin", 2, 7);