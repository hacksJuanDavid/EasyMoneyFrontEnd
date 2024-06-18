-- Inserts para la tabla DEPARTAMENTO
INSERT INTO `EMPRESADB`.`DEPARTAMENTO` (codigo, nombre) VALUES (1, 'Departamento A');
INSERT INTO `EMPRESADB`.`DEPARTAMENTO` (codigo, nombre) VALUES (2, 'Departamento B');
INSERT INTO `EMPRESADB`.`DEPARTAMENTO` (codigo, nombre) VALUES (3, 'Departamento C');

-- Inserts para la tabla CIUDADES
INSERT INTO `EMPRESADB`.`CIUDADES` (codigo, nombre, cod_departamento) VALUES (1, 'Ciudad 1', 1);
INSERT INTO `EMPRESADB`.`CIUDADES` (codigo, nombre, cod_departamento) VALUES (2, 'Ciudad 2', 1);
INSERT INTO `EMPRESADB`.`CIUDADES` (codigo, nombre, cod_departamento) VALUES (3, 'Ciudad 3', 2);

-- Inserts para la tabla OFICINA
INSERT INTO `EMPRESADB`.`OFICINA` (codigo, nombre, cod_ciudad, gerente) VALUES (1, 'Oficina 1', 1, 'Gerente 1');
INSERT INTO `EMPRESADB`.`OFICINA` (codigo, nombre, cod_ciudad, gerente) VALUES (2, 'Oficina 2', 2, 'Gerente 2');
INSERT INTO `EMPRESADB`.`OFICINA` (codigo, nombre, cod_ciudad, gerente) VALUES (3, 'Oficina 3', 3, 'Gerente 3');
INSERT INTO `EMPRESADB`.`OFICINA` (codigo, nombre, cod_ciudad, gerente) VALUES (4, 'Oficina 4', 1, 'Trabajardor 1');

-- Inserts para la tabla PRODUCTO
INSERT INTO `EMPRESADB`.`PRODUCTO` (codigo, descripcion) VALUES (1, 'Producto A');
INSERT INTO `EMPRESADB`.`PRODUCTO` (codigo, descripcion) VALUES (2, 'Producto B');
INSERT INTO `EMPRESADB`.`PRODUCTO` (codigo, descripcion) VALUES (3, 'Producto C');

-- Inserts para la tabla INVENTARIO
INSERT INTO `EMPRESADB`.`INVENTARIO` (id, cod_oficina, cod_producto, existencia) VALUES (1, 1, 1, 100);
INSERT INTO `EMPRESADB`.`INVENTARIO` (id, cod_oficina, cod_producto, existencia) VALUES (2, 1, 2, 200);
INSERT INTO `EMPRESADB`.`INVENTARIO` (id, cod_oficina, cod_producto, existencia) VALUES (3, 2, 3, 300);