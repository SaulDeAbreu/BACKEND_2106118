drop database projeto1BackEnd;
CREATE DATABASE projeto1_backend;
USE projeto1_backend;
CREATE TABLE rentals(
    rentals_id INT AUTO_INCREMENT,
    customer VARCHAR(70),
    car_brand VARCHAR(70),
    car_model VARCHAR(70),
    license_plate VARCHAR(70),
    pickup_location VARCHAR(70),
    return_location VARCHAR(70),
    price FLOAT,
    pickup_date DATE,
    return_date DATE,
    comments VARCHAR(3000),
    PRIMARY KEY (rentals_id)
);

insert into projeto1_backend (customer,car_brand ,car_model ,license_plate,pickup_location ,return_location,price,pickup_date ,return_date,comments)
values ( "saul de abreu ", "toyota","corolla","ABC000","EEUU Florida", "PT funchal")

USE projeto1_backend;

INSERT INTO rentals(customer,car_brand,car_model,license_plate,pickup_location,return_location,price,pickup_date,return_date,comments)
VALUES
('Roberto Moniz','Toyota','Yaris','ABCD123','Machico','Machico',255,'2023-05-09','2023-05-15','Good'),
('Roberto De Freitas','Toyota','Corolla','ABCD1234','Porto da Cruz','Funchal',300,'2023-05-11','2023-05-15','Bad'),
('Saul Pinto','Mercedes','G63 AMG','ABC123','Funchal','Riveira Brava',1500,'2023-05-10','2023-05-20','Regular'),
('Saul De Abreu','BMW','M3','AB12','Funchal','Ponta do Sol',1000,'2023-06-09','2023-06-25','Nice')
