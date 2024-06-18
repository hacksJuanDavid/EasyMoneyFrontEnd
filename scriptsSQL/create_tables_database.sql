CREATE TABLE `EMPRESADB`.`DEPARTAMENTO` (
    codigo INT PRIMARY KEY,
    nombre VARCHAR(100)
);

CREATE TABLE `EMPRESADB`.`CIUDADES` (
    codigo INT PRIMARY KEY,
    nombre VARCHAR(100),
    cod_departamento INT,
    FOREIGN KEY (cod_departamento) REFERENCES DEPARTAMENTO(codigo)
);

CREATE TABLE `EMPRESADB`.`OFICINA` (
    codigo INT PRIMARY KEY,
    nombre VARCHAR(100),
    cod_ciudad INT,
    gerente VARCHAR(100),
    FOREIGN KEY (cod_ciudad) REFERENCES CIUDADES(codigo)
);

CREATE TABLE `EMPRESADB`.`PRODUCTO` (
    codigo INT PRIMARY KEY,
    descripcion VARCHAR(200)
);

CREATE TABLE `EMPRESADB`.`INVENTARIO` (
    id INT PRIMARY KEY,
    cod_oficina INT,
    cod_producto INT,
    existencia INT,
    FOREIGN KEY (cod_oficina) REFERENCES OFICINA(codigo),
    FOREIGN KEY (cod_producto) REFERENCES PRODUCTO(codigo)
);