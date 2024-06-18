--A. Nombre de la oficina de la cual es gerente una persona, de la cual conocemos el nombre (no se posee el nombre completo)
SELECT o.nombre AS nombre_oficina
FROM EMPRESADB.OFICINA o
WHERE o.gerente LIKE '%ge%'
LIMIT 1;

--B. Nombre de todas las oficinas que posee la empresa. Incluir en la consulta el nombre de la ciudad y del departamento en el cual se encuentran.
SELECT o.nombre AS nombre_oficina, c.nombre AS nombre_ciudad, d.nombre AS nombre_departamento
FROM EMPRESADB.OFICINA o
JOIN EMPRESADB.CIUDADES c ON o.cod_ciudad = c.codigo
JOIN EMPRESADB.DEPARTAMENTO d ON c.cod_departamento = d.codigo;

--C. Listado (nombre) de las oficinas en las cuales se encuentra un producto en particular, del cual se conoce parcialmente el NOMBRE
SELECT DISTINCT o.nombre AS nombre_oficina
FROM EMPRESADB.OFICINA o
JOIN EMPRESADB.INVENTARIO i ON o.codigo = i.cod_oficina
JOIN EMPRESADB.PRODUCTO p ON i.cod_producto = p.codigo
WHERE p.descripcion LIKE '%produc%';

--D. Nombre de la oficina que posee la mayor cantidad de existencia en toda la empresa (sumar todas las existencias de la oficina).
SELECT o.nombre AS nombre_oficina
FROM EMPRESADB.OFICINA o
JOIN (
    SELECT cod_oficina, SUM(existencia) AS total_existencia
    FROM EMPRESADB.INVENTARIO
    GROUP BY cod_oficina
    ORDER BY total_existencia DESC
    LIMIT 1
) AS max_existencia ON o.codigo = max_existencia.cod_oficina;

--E. Listado de las oficinas que poseen una existencia menor a “###”. Incluir en el listado oficina, ciudad, producto y existencia
SELECT o.nombre AS nombre_oficina, c.nombre AS nombre_ciudad, p.descripcion AS nombre_producto, i.existencia
FROM EMPRESADB.OFICINA o
JOIN EMPRESADB.CIUDADES c ON o.cod_ciudad = c.codigo
JOIN EMPRESADB.INVENTARIO i ON o.codigo = i.cod_oficina
JOIN EMPRESADB.PRODUCTO p ON i.cod_producto = p.codigo
WHERE i.existencia < 0
ORDER BY i.existencia;

--F. Sentencia que actualice la existencia de todos los productos del inventario que pertenezcan a una oficina de una ciudad en particular (se conoce el código de la ciudad).
UPDATE EMPRESADB.INVENTARIO i
JOIN EMPRESADB.OFICINA o ON i.cod_oficina = o.codigo
SET i.existencia = i.existencia + 2  -- Ajustar según el incremento o decremento deseado
WHERE o.cod_ciudad = 1;  -- Colocar el código de la ciudad específica