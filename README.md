# Importaciones de Aguacate a Colombia para el perido de 2006 - 2017

Se habla mucho de las exportaciones de aguacate a nivel mundial, Colombia ha entrado en la tendencia de los exportadores, pero el ministerio de agricultura presenta una información, donde muestra que tambien se ha importado, en esta visualización se muestra como se da la tendencia  de importar el producto desde el 2006.

# Como Instalar
clonar o descargar el repositorio
 ``` git clone [repo] ```
copiar y pegar el contenido en un servidor de aplicaciones
* tomcat
* IIS
* ...

ejecutar la aplocacion desde el explorador

# Tecnologias usadas
* D3 V5
* BulmaJs

# Insight:
* Ver que a través del tiempo Colombia ha dejado de importar aguacate
* en 2009 ocurrió un evento, extraño en la tendencia de importaciones
* explorar donde llegan estas importaciones

# De donde vienen los Datos

Los datos provienen de Datos Abiertos [DatosGOV](https://www.datos.gov.co/Agricultura-y-Desarrollo-Rural/Cadena-Productiva-Aguacate-Importaciones/j558-v2rs) y son suministrados por el [ministerio de agricultura](https://www.minagricultura.gov.co/Paginas/default.aspx)

# What
Dataset Availability: Static
Data Types: Items
Data and Dataset Types: Tables (Items and Attributes)
Dataset Types: Tables

Attributes:
anio: Ordered -> Quantitative -> Sequential
c_digodepto: Ordered -> Quantitative -> Sequential
c_digopa_s: Ordered -> Quantitative -> Sequential
c_digounidad: Categorica,
"cadena": Categorica,
"cantidadunidades": Ordered -> Quantitative -> Sequential
"departamentodestino": Categorica,
"mes": Ordered->Ordinal,
"pa_sorigen": Categorica,
"partida": Categorica,
"producto": Categorica,
"valormilescifdol": Ordered -> Quantitative -> Sequential
"valormilesfobdol": Ordered -> Quantitative -> Sequential
"valormilespesos": Ordered -> Quantitative -> Sequential
"vol_mentoneladas": "Ordered -> Quantitative -> Sequential

# Why
Tarea 1:
Analyze -> Consume -> Present
Trends (toneladas importadas -> vol_mentoneladas)

Tarea 2
Analyze -> Produce -> Derive
Features (Calular los datos de importaciones por año)

Tarea 3
Analyze -> Consume->Enjoy
Features (Datos referentes a la importacion en toneladas)

# How
Encode -> Arrange -> Express
Map -> Color -> hue
Manipulate-> Change,Select

# Marcas
Lineas (definir la tendecia de las importaciones)
Puntos (marcar la importacion en un periodo del tiempo)

# Canales
X -> Años de importacion
Y -> Toneladas de agucatae importado
Color -> Departamento donde llego el produto importado
