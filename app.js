const productos = [

    // =========================
    // AMIGURUMIS / CROCHET
    // =========================

    {
        id: "AMI-001",
        nombre: "Amigurumi Coraje",
        categoria: "Amigurumis",
        precio: 45000,
        tamano: "18 cm",
        material: "Hilo de algodón + relleno siliconado",
        costoMateriales: 17000,
        descripcion: "Amigurumi tejido a mano con acabado artesanal.",
        personalizable: true,
        stock: 2,
        emoji: "🧶"
    },

    {
        id: "AMI-002",
        nombre: "Amigurumi Tiger",
        categoria: "Amigurumis",
        precio: 45000,
        tamano: "18 cm",
        material: "Hilo de algodón + relleno siliconado",
        costoMateriales: 17000,
        descripcion: "Figura tejida a mano, ideal para colección o regalo.",
        personalizable: true,
        stock: 2,
        emoji: "🐯"
    },

    {
        id: "AMI-003",
        nombre: "Amigurumi Mini",
        categoria: "Amigurumis",
        precio: 25000,
        tamano: "8 cm",
        material: "Hilo + relleno siliconado",
        costoMateriales: 9000,
        descripcion: "Figura pequeña para escritorio, bolso o regalo.",
        personalizable: true,
        stock: 4,
        emoji: "🧸"
    },

    {
        id: "AMI-004",
        nombre: "Amigurumi Pequeño",
        categoria: "Amigurumis",
        precio: 35000,
        tamano: "12 cm",
        material: "Hilo de algodón + relleno",
        costoMateriales: 12000,
        descripcion: "Diseño artesanal de tamaño pequeño.",
        personalizable: true,
        stock: 3,
        emoji: "🧶"
    },

    {
        id: "AMI-005",
        nombre: "Amigurumi Mediano",
        categoria: "Amigurumis",
        precio: 45000,
        tamano: "18 cm",
        material: "Hilo de algodón + relleno",
        costoMateriales: 17000,
        descripcion: "Tamaño ideal para colección o decoración.",
        personalizable: true,
        stock: 3,
        emoji: "🧸"
    },

    {
        id: "AMI-006",
        nombre: "Amigurumi Grande",
        categoria: "Amigurumis",
        precio: 65000,
        tamano: "25 cm",
        material: "Hilo de algodón + relleno",
        costoMateriales: 24000,
        descripcion: "Pieza grande tejida completamente a mano.",
        personalizable: true,
        stock: 1,
        emoji: "🧸"
    },

    {
        id: "AMI-007",
        nombre: "Amigurumi Premium",
        categoria: "Amigurumis",
        precio: 85000,
        tamano: "30 cm",
        material: "Hilo premium + relleno",
        costoMateriales: 32000,
        descripcion: "Pieza de mayor tamaño y nivel de detalle.",
        personalizable: true,
        stock: 1,
        emoji: "✨"
    },

    {
        id: "AMI-008",
        nombre: "Llavero Amigurumi",
        categoria: "Amigurumis",
        precio: 25000,
        tamano: "6–8 cm",
        material: "Hilo + argolla metálica + relleno",
        costoMateriales: 8000,
        descripcion: "Mini figura tejida para llevar en bolso o llaves.",
        personalizable: true,
        stock: 5,
        emoji: "🔑"
    },

    {
        id: "AMI-009",
        nombre: "Flor Tejida Individual",
        categoria: "Amigurumis",
        precio: 15000,
        tamano: "25–30 cm",
        material: "Hilo de algodón + tallo artesanal",
        costoMateriales: 6000,
        descripcion: "Flor eterna tejida a mano.",
        personalizable: true,
        stock: 5,
        emoji: "🌷"
    },

    {
        id: "AMI-010",
        nombre: "Ramo Tejido Pequeño",
        categoria: "Amigurumis",
        precio: 45000,
        tamano: "25 cm",
        material: "Hilo + tallos + envoltura",
        costoMateriales: 18000,
        descripcion: "Ramo artesanal con varias flores tejidas.",
        personalizable: true,
        stock: 2,
        emoji: "💐"
    },

    {
        id: "AMI-011",
        nombre: "Ramo Tejido Mediano",
        categoria: "Amigurumis",
        precio: 70000,
        tamano: "35 cm",
        material: "Hilo + tallos + envoltura",
        costoMateriales: 28000,
        descripcion: "Ramo de mayor tamaño con combinación de flores.",
        personalizable: true,
        stock: 1,
        emoji: "💐"
    },

    {
        id: "AMI-012",
        nombre: "Ramo Tejido Grande",
        categoria: "Amigurumis",
        precio: 110000,
        tamano: "45 cm",
        material: "Hilo + tallos + envoltura premium",
        costoMateriales: 43000,
        descripcion: "Ramo artesanal de presentación especial.",
        personalizable: true,
        stock: 1,
        emoji: "💐"
    },


    // =========================
    // ALCANCÍAS / RESINA
    // =========================

    {
        id: "RES-001",
        nombre: "Alcancía Mini Personalizada",
        categoria: "Alcancías y Resina",
        precio: 25000,
        tamano: "10 cm",
        material: "Resina + pintura + acabado protector",
        costoMateriales: 10000,
        descripcion: "Alcancía decorativa para ahorro y regalo.",
        personalizable: true,
        stock: 3,
        emoji: "🐷"
    },

    {
        id: "RES-002",
        nombre: "Alcancía Pequeña",
        categoria: "Alcancías y Resina",
        precio: 35000,
        tamano: "13 cm",
        material: "Resina + pintura",
        costoMateriales: 14000,
        descripcion: "Alcancía decorativa con diseño personalizado.",
        personalizable: true,
        stock: 3,
        emoji: "💰"
    },

    {
        id: "RES-003",
        nombre: "Alcancía Mediana",
        categoria: "Alcancías y Resina",
        precio: 50000,
        tamano: "18 cm",
        material: "Resina + pintura + acabado protector",
        costoMateriales: 20000,
        descripcion: "Pieza de mayor capacidad y presencia decorativa.",
        personalizable: true,
        stock: 2,
        emoji: "🐷"
    },

    {
        id: "RES-004",
        nombre: "Alcancía Grande",
        categoria: "Alcancías y Resina",
        precio: 70000,
        tamano: "23 cm",
        material: "Resina + pintura + acabado",
        costoMateriales: 28000,
        descripcion: "Alcancía grande para decoración y ahorro.",
        personalizable: true,
        stock: 1,
        emoji: "💰"
    },

    {
        id: "RES-005",
        nombre: "Alcancía Personaje",
        categoria: "Alcancías y Resina",
        precio: 80000,
        tamano: "18–22 cm",
        material: "Resina + pintura + detalles",
        costoMateriales: 30000,
        descripcion: "Alcancía inspirada en un personaje o diseño elegido.",
        personalizable: true,
        stock: 1,
        emoji: "🎨"
    },

    {
        id: "RES-006",
        nombre: "Alcancía Premium Personalizada",
        categoria: "Alcancías y Resina",
        precio: 110000,
        tamano: "25–30 cm",
        material: "Resina + pintura + acabados premium",
        costoMateriales: 42000,
        descripcion: "Pieza personalizada de gran tamaño y mayor detalle.",
        personalizable: true,
        stock: 1,
        emoji: "✨"
    },

    // =========================
    // LIMPIAPIPAS
    // =========================

    {
        id: "LIM-001",
        nombre: "Flor Individual",
        categoria: "Limpiapipas",
        precio: 15000,
        tamano: "25–30 cm",
        material: "Limpiapipas + tallo artesanal",
        costoMateriales: 5000,
        descripcion: "Flor eterna artesanal disponible en diferentes colores.",
        personalizable: true,
        stock: 8,
        emoji: "🌸"
    },

    {
        id: "LIM-002",
        nombre: "Rosa Artesanal",
        categoria: "Limpiapipas",
        precio: 15000,
        tamano: "30 cm",
        material: "Limpiapipas + tallo",
        costoMateriales: 5000,
        descripcion: "Rosa elaborada a mano con acabado decorativo.",
        personalizable: true,
        stock: 8,
        emoji: "🌹"
    },

    {
        id: "LIM-003",
        nombre: "Girasol Artesanal",
        categoria: "Limpiapipas",
        precio: 15000,
        tamano: "30 cm",
        material: "Limpiapipas + tallo",
        costoMateriales: 5000,
        descripcion: "Girasol eterno para decoración o regalo.",
        personalizable: true,
        stock: 6,
        emoji: "🌻"
    },

    {
        id: "LIM-004",
        nombre: "Mini Ramo",
        categoria: "Limpiapipas",
        precio: 30000,
        tamano: "25 cm",
        material: "Limpiapipas + tallos + envoltura",
        costoMateriales: 11000,
        descripcion: "Pequeño arreglo de flores artesanales.",
        personalizable: true,
        stock: 3,
        emoji: "💐"
    },

    {
        id: "LIM-005",
        nombre: "Ramo Pequeño",
        categoria: "Limpiapipas",
        precio: 45000,
        tamano: "35 cm",
        material: "Limpiapipas + tallos + envoltura",
        costoMateriales: 17000,
        descripcion: "Ramo con combinación de flores y colores.",
        personalizable: true,
        stock: 3,
        emoji: "💐"
    },

    {
        id: "LIM-006",
        nombre: "Ramo Mediano",
        categoria: "Limpiapipas",
        precio: 65000,
        tamano: "45 cm",
        material: "Limpiapipas + tallos + envoltura",
        costoMateriales: 24000,
        descripcion: "Arreglo de mayor tamaño para ocasiones especiales.",
        personalizable: true,
        stock: 2,
        emoji: "💐"
    },

    {
        id: "LIM-007",
        nombre: "Ramo Grande",
        categoria: "Limpiapipas",
        precio: 85000,
        tamano: "55 cm",
        material: "Limpiapipas + tallos + envoltura premium",
        costoMateriales: 33000,
        descripcion: "Ramo grande con variedad de flores.",
        personalizable: true,
        stock: 1,
        emoji: "💐"
    },

    {
        id: "LIM-008",
        nombre: "Figura en Limpiapipas",
        categoria: "Limpiapipas",
        precio: 30000,
        tamano: "20 cm",
        material: "Limpiapipas + estructura interna",
        costoMateriales: 11000,
        descripcion: "Figura decorativa moldeada a mano.",
        personalizable: true,
        stock: 3,
        emoji: "🧸"
    },


    // =========================
    // PORCELANICRÓN
    // =========================

    {
        id: "POR-001",
        nombre: "Figura Mini",
        categoria: "Porcelanicrón",
        precio: 8000,
        tamano: "3–4 cm",
        material: "Porcelanicrón + pintura",
        costoMateriales: 2500,
        descripcion: "Mini figura decorativa para detalles y colecciones.",
        personalizable: true,
        stock: 8,
        emoji: "🎨"
    },

    {
        id: "POR-002",
        nombre: "Figura Pequeña",
        categoria: "Porcelanicrón",
        precio: 15000,
        tamano: "5–7 cm",
        material: "Porcelanicrón + pintura",
        costoMateriales: 5000,
        descripcion: "Figura artesanal de pequeño formato.",
        personalizable: true,
        stock: 6,
        emoji: "🖌️"
    },

    {
        id: "POR-003",
        nombre: "Figura Mediana",
        categoria: "Porcelanicrón",
        precio: 25000,
        tamano: "8–10 cm",
        material: "Porcelanicrón + pintura + protector",
        costoMateriales: 8000,
        descripcion: "Figura decorativa con mayor nivel de detalle.",
        personalizable: true,
        stock: 4,
        emoji: "🎨"
    },

    {
        id: "POR-004",
        nombre: "Figura Grande",
        categoria: "Porcelanicrón",
        precio: 40000,
        tamano: "12–15 cm",
        material: "Porcelanicrón + pintura + protector",
        costoMateriales: 14000,
        descripcion: "Pieza artesanal de mayor tamaño.",
        personalizable: true,
        stock: 2,
        emoji: "🗿"
    },

    {
        id: "POR-005",
        nombre: "Figura Premium",
        categoria: "Porcelanicrón",
        precio: 60000,
        tamano: "18–20 cm",
        material: "Porcelanicrón + pintura + acabados",
        costoMateriales: 22000,
        descripcion: "Pieza de colección con mayor detalle y acabado.",
        personalizable: true,
        stock: 1,
        emoji: "✨"
    },

    {
        id: "POR-006",
        nombre: "Rosa en Porcelanicrón",
        categoria: "Porcelanicrón",
        precio: 8000,
        tamano: "5 cm",
        material: "Porcelanicrón + pintura",
        costoMateriales: 2500,
        descripcion: "Rosa artesanal para decoración o composición.",
        personalizable: true,
        stock: 10,
        emoji: "🌹"
    },

    {
        id: "POR-007",
        nombre: "Osito con Corazón",
        categoria: "Porcelanicrón",
        precio: 12000,
        tamano: "6 cm",
        material: "Porcelanicrón + pintura",
        costoMateriales: 4000,
        descripcion: "Figura pequeña ideal para detalles.",
        personalizable: true,
        stock: 5,
        emoji: "🧸"
    },

    {
        id: "POR-008",
        nombre: "Figura Personalizada",
        categoria: "Porcelanicrón",
        precio: 30000,
        tamano: "8–10 cm",
        material: "Porcelanicrón + pintura + protector",
        costoMateriales: 9000,
        descripcion: "Figura creada según la idea del cliente.",
        personalizable: true,
        stock: 2,
        emoji: "🧑‍🎨"
    },

    {
        id: "POR-009",
        nombre: "Pareja Personalizada",
        categoria: "Porcelanicrón",
        precio: 65000,
        tamano: "12 cm",
        material: "Porcelanicrón + pintura + base",
        costoMateriales: 20000,
        descripcion: "Composición de dos personajes personalizada.",
        personalizable: true,
        stock: 1,
        emoji: "👥"
    },

    {
        id: "POR-010",
        nombre: "Decoración Personalizada",
        categoria: "Porcelanicrón",
        precio: 70000,
        tamano: "15–20 cm",
        material: "Porcelanicrón + pintura + base",
        costoMateriales: 23000,
        descripcion: "Pieza decorativa diseñada según el tema solicitado.",
        personalizable: true,
        stock: 1,
        emoji: "🏠"
    },


    // =========================
    // REGALOS PERSONALIZADOS
    // =========================

    {
        id: "REG-001",
        nombre: "Llavero Personalizado",
        categoria: "Regalos Personalizados",
        precio: 20000,
        tamano: "6–8 cm",
        material: "Material artesanal + argolla",
        costoMateriales: 6000,
        descripcion: "Llavero personalizado con nombre, color o temática.",
        personalizable: true,
        stock: 6,
        emoji: "🔑"
    },

    {
        id: "REG-002",
        nombre: "Mini Figura Personalizada",
        categoria: "Regalos Personalizados",
        precio: 25000,
        tamano: "8 cm",
        material: "Porcelanicrón o resina + pintura",
        costoMateriales: 8000,
        descripcion: "Detalle pequeño diseñado para una persona especial.",
        personalizable: true,
        stock: 3,
        emoji: "🎁"
    },

    {
        id: "REG-003",
        nombre: "Figura Personalizada de Mascota",
        categoria: "Regalos Personalizados",
        precio: 45000,
        tamano: "10–15 cm",
        material: "Porcelanicrón o resina + pintura",
        costoMateriales: 13000,
        descripcion: "Representación artesanal de una mascota.",
        personalizable: true,
        stock: 2,
        emoji: "🐾"
    },

    {
        id: "REG-004",
        nombre: "Mascota Premium",
        categoria: "Regalos Personalizados",
        precio: 70000,
        tamano: "20 cm",
        material: "Porcelanicrón o resina + pintura",
        costoMateriales: 22000,
        descripcion: "Pieza de mayor tamaño y nivel de detalle.",
        personalizable: true,
        stock: 1,
        emoji: "🐶"
    },

    {
        id: "REG-005",
        nombre: "Caja Artística Personalizada",
        categoria: "Regalos Personalizados",
        precio: 60000,
        tamano: "20 cm",
        material: "Caja + decoración + elementos artesanales",
        costoMateriales: 23000,
        descripcion: "Caja decorativa preparada con temática personalizada.",
        personalizable: true,
        stock: 2,
        emoji: "🎁"
    },

    {
        id: "REG-006",
        nombre: "Bouquet + Figura",
        categoria: "Regalos Personalizados",
        precio: 75000,
        tamano: "35 cm",
        material: "Flores artesanales + figura + empaque",
        costoMateriales: 28000,
        descripcion: "Combinación de flores y figura personalizada.",
        personalizable: true,
        stock: 1,
        emoji: "💐"
    },

    {
        id: "REG-007",
        nombre: "Bouquet + Alcancía",
        categoria: "Regalos Personalizados",
        precio: 95000,
        tamano: "35 cm",
        material: "Flores + alcancía + empaque",
        costoMateriales: 35000,
        descripcion: "Regalo combinado para una ocasión especial.",
        personalizable: true,
        stock: 1,
        emoji: "🎁"
    },

    {
        id: "REG-008",
        nombre: "Kit Regalo Premium",
        categoria: "Regalos Personalizados",
        precio: 130000,
        tamano: "40 cm aprox.",
        material: "Combinación de productos artesanales",
        costoMateriales: 50000,
        descripcion: "Kit completo con piezas seleccionadas y presentación premium.",
        personalizable: true,
        stock: 1,
        emoji: "✨"
    },


    // =========================
    // PERSONAJES / COLECCIÓN
    // =========================

    {
        id: "PER-001",
        nombre: "Personaje Mini",
        categoria: "Personajes y Colección",
        precio: 25000,
        tamano: "8 cm",
        material: "Porcelanicrón, resina o hilo",
        costoMateriales: 8000,
        descripcion: "Mini personaje artesanal para colección.",
        personalizable: true,
        stock: 3,
        emoji: "⭐"
    },

    {
        id: "PER-002",
        nombre: "Personaje Pequeño",
        categoria: "Personajes y Colección",
        precio: 35000,
        tamano: "12 cm",
        material: "Porcelanicrón o resina",
        costoMateriales: 11000,
        descripcion: "Figura de colección de tamaño pequeño.",
        personalizable: true,
        stock: 2,
        emoji: "🎭"
    },

    {
        id: "PER-003",
        nombre: "Personaje Mediano",
        categoria: "Personajes y Colección",
        precio: 50000,
        tamano: "18 cm",
        material: "Porcelanicrón o resina",
        costoMateriales: 17000,
        descripcion: "Figura de colección con mayor nivel de detalle.",
        personalizable: true,
        stock: 2,
        emoji: "🎨"
    },

    {
        id: "PER-004",
        nombre: "Personaje Grande",
        categoria: "Personajes y Colección",
        precio: 75000,
        tamano: "25 cm",
        material: "Porcelanicrón o resina",
        costoMateriales: 26000,
        descripcion: "Pieza grande para exhibición o colección.",
        personalizable: true,
        stock: 1,
        emoji: "🏆"
    },

    {
        id: "PER-005",
        nombre: "Personaje Premium",
        categoria: "Personajes y Colección",
        precio: 100000,
        tamano: "25–30 cm",
        material: "Material artesanal + pintura + acabados",
        costoMateriales: 35000,
        descripcion: "Pieza de colección con alto nivel de detalle.",
        personalizable: true,
        stock: 1,
          emoji: "👑"
    },

    {
        id: "PER-006",
        nombre: "Personaje Personalizado Especial",
        categoria: "Personajes y Colección",
        precio: 85000,
        tamano: "20–25 cm",
        material: "Material artesanal + pintura + acabados personalizados",
        costoMateriales: 30000,
        descripcion: "Figura artesanal personalizada según la idea o temática elegida.",
        personalizable: true,
        stock: 1,
        emoji: "🌟"
    }

];


// =========================
// MOSTRAR PRODUCTOS
// =========================

const catalogo = document.getElementById("catalogo");

function mostrarProductos(lista) {

    catalogo.innerHTML = "";

    lista.forEach(function(producto) {

        const tarjeta = document.createElement("div");

        tarjeta.className = "producto";

        const precio = producto.precio.toLocaleString("es-CO");
        const costo = producto.costoMateriales.toLocaleString("es-CO");

        tarjeta.innerHTML = `
            <div class="producto-icono">${producto.emoji}</div>

            <h3>${producto.nombre}</h3>

            <p>${producto.descripcion}</p>

           <div class="ficha-producto">
    <p>
        <span>🏷️ Código</span>
        <strong>${producto.id}</strong>
    </p>

    <p>
        <span>🎨 Categoría</span>
        <strong>${producto.categoria}</strong>
    </p>

    <p>
        <span>📏 Tamaño</span>
        <strong>${producto.tamano}</strong>
    </p>

    <p>
        <span>🧵 Material</span>
        <strong>${producto.material}</strong>
    </p>
</div>

            <p class="precio">
                <strong>$${precio} COP</strong>
            </p>

            <p class="stock-producto">
    📦 ${producto.stock > 0
        ? "Disponible: " + producto.stock
        : "Agotado"}
</p>

            <p class="personalizable-producto">
    🎨 ${producto.personalizable
        ? "Personalizable"
        : "Diseño fijo"}
</p>

            <div class="costo-materiales-producto">
    <span>🧾 Costo estimado de materiales</span>
    <strong>$${costo} COP</strong>
</div>
        `;

        catalogo.appendChild(tarjeta);
    });
}


// =========================
// INICIAR CATÁLOGO
// =========================

mostrarProductos(productos);

function calcularPrecio() {

    const materiales = Number(
        document.getElementById("materiales").value
    );

    const cantidadUnidades = Number(
        document.getElementById("cantidadUnidades").value
    );

    const horas = Number(
        document.getElementById("horas").value
    );

    const valorHora = Number(
        document.getElementById("valorHora").value
    );

    const empaque = Number(
        document.getElementById("empaque").value
    );

    const porcentajeGanancia = Number(
        document.getElementById("ganancia").value
    );

    const nombre = document.getElementById(
    "nombreProducto"
).value;

if (
    materiales < 0 ||
    cantidadUnidades < 1 ||
    horas < 0 ||
    valorHora < 0 ||
    empaque < 0 ||
    porcentajeGanancia < 0
) {
    document.getElementById("resultado").innerHTML =
        "<p>⚠️ Revisa los valores. No se permiten números negativos y la cantidad mínima es 1.</p>";
    return;
}

const manoDeObra = horas * valorHora;

    const costoProduccion =
        materiales +
        manoDeObra +
        empaque;

    const ganancia =
        costoProduccion *
        (porcentajeGanancia / 100);

    const precioVenta =
    costoProduccion +
    ganancia;
const costoTotalPedido =
    costoProduccion * cantidadUnidades;

const gananciaTotalPedido =
    ganancia * cantidadUnidades;

const precioVentaRedondeado =
    Math.ceil(precioVenta / 1000) * 1000;

const totalPedido =
    precioVentaRedondeado * cantidadUnidades;

    document.getElementById("resultado").innerHTML = `

        <h3>Resultado</h3>

        <p>
            <strong>Producto:</strong>
            ${nombre || "Sin nombre"}
        </p>

        <p>
            <strong>Costo de materiales por unidad:</strong>
            $${materiales.toLocaleString("es-CO")}
        </p>

        <p>
            <strong>Mano de obra por unidad:</strong>
            $${manoDeObra.toLocaleString("es-CO")}
        </p>

        <p>
           <strong>Costo de empaque por unidad:</strong>
            $${empaque.toLocaleString("es-CO")}
        </p>

        <p>
            <strong>Costo de producción por unidad:</strong>
            $${costoProduccion.toLocaleString("es-CO")}
        </p>
<p>
    <strong>Margen de ganancia aplicado:</strong>
    ${porcentajeGanancia}%
</p>
        <p>
            <strong>Ganancia por unidad:</strong>
            $${ganancia.toLocaleString("es-CO")}
        </p>
        <p>
    <strong>Cantidad solicitada:</strong>
    ${cantidadUnidades}
</p>

<p>
    <strong>Costo total de producción:</strong>
    $${costoTotalPedido.toLocaleString("es-CO")} COP
</p>

<p>
    <strong>Ganancia total del pedido:</strong>
    $${gananciaTotalPedido.toLocaleString("es-CO")} COP
</p>


 <h2>
    Precio de venta por unidad:
    $${precioVentaRedondeado.toLocaleString("es-CO")} COP
</h2>
<p>
    <strong>Total del pedido:</strong>
    $${(Math.ceil(totalPedido / 1000) * 1000).toLocaleString("es-CO")} COP
</p>
    `;
            }
    // ===============================
// INVENTARIO DE MATERIALES JANVART
// ===============================

let inventarioMateriales =
    JSON.parse(localStorage.getItem("inventarioJanvart")) || [];

let indiceMaterialEditando = null;

let historialMovimientos =
    JSON.parse(localStorage.getItem("historialJanvart")) || [];
  
  

function agregarMaterial() {

    const nombre = document.getElementById("nombreMaterial").value;
    const codigo = document.getElementById("codigoMaterial").value;
    const cantidad = Number(
        document.getElementById("cantidadMaterial").value
    );

    const stockMinimo = Number(
    document.getElementById("stockMinimoMaterial").value
);

    const proveedor = document.getElementById("proveedorMaterial").value;
    const unidad = document.getElementById("unidadMaterial").value;
    const precio = Number(
        document.getElementById("precioMaterial").value
    );

  // Verificar que los datos estén completos
if (
    nombre === "" ||
    codigo === "" ||
    proveedor === "" ||
    cantidad <= 0 ||
    precio <= 0
) {
    alert("Por favor, completa todos los datos.");
    return;
}

// Verificar que el código no esté repetido
const codigoRepetido = inventarioMateriales.some(function(material, indice) {

    return (
        (material.codigo || "").trim().toUpperCase() ===
        codigo.trim().toUpperCase()
        &&
        indice !== indiceMaterialEditando
    );

});

if (codigoRepetido) {
    alert("Este código de material ya está registrado.");
    return;
}

// Crear los datos del material
const costoUnitario = precio / cantidad;

const material = {
    nombre: nombre,
    codigo: codigo,
    cantidad: cantidad,
    unidad: unidad,
    precio: precio,
   costoUnitario: costoUnitario, 
    proveedor: proveedor,
    stockMinimo: stockMinimo
};

// Saber si estamos agregando o editando
if (indiceMaterialEditando === null) {

    // Material nuevo
    inventarioMateriales.push(material);

} else {

    // Actualizar el material existente
    inventarioMateriales[indiceMaterialEditando] = material;

}

// Guardar inventario
localStorage.setItem(
    "inventarioJanvart",
    JSON.stringify(inventarioMateriales)
);

// Mostrar inventario
mostrarInventario();

// Terminar modo edición
indiceMaterialEditando = null;

// Volver el botón a su estado normal
const boton = document.getElementById("botonAgregarMaterial");
boton.textContent = "Agregar material";

// Limpiar campos
document.getElementById("nombreMaterial").value = "";
document.getElementById("codigoMaterial").value = "";
document.getElementById("cantidadMaterial").value = "";
document.getElementById("stockMinimoMaterial").value = "";
document.getElementById("precioMaterial").value = "";
document.getElementById("proveedorMaterial").value = "";

}


// ===============================
// MOSTRAR INVENTARIO
// ===============================

function mostrarInventario() {

    const tabla = document.getElementById("tablaInventario");
    const totalMateriales = document.getElementById("totalMateriales");
totalMateriales.textContent = inventarioMateriales.length;
const totalStockBajo = document.getElementById("totalStockBajo");

const valorTotalInventario = inventarioMateriales.reduce(function(total, material) {

    const costoUnitario =
        Number.isFinite(material.costoUnitario)
            ? material.costoUnitario
            : (material.cantidad > 0 ? material.precio / material.cantidad : 0);

    return total + (material.cantidad * costoUnitario);

}, 0);
const valorInventario = document.getElementById("valorInventario");

valorInventario.textContent =
    "$" + Math.round(valorTotalInventario).toLocaleString("es-CO") + " COP";

const materialesStockBajo = inventarioMateriales.filter(function(material) {
    return material.cantidad <= material.stockMinimo;
});

totalStockBajo.textContent = materialesStockBajo.length;
    

    if (inventarioMateriales.length === 0) {

        tabla.innerHTML = `
            <p>No hay materiales registrados.</p>
        `;

        return;
    }
   



    let contenido = `

        <table border="1">

            <thead>

                <tr>
                    <th>Material</th>
                    <th>Código</th>
                    <th>Cantidad</th>
                    <th>Stock mínimo</th>
                    <th>Unidad</th>
                    <th>Precio inicial</th>
                    <th>Costo por unidad</th>
                    <th>Valor actual</th>
                    <th>Proveedor</th>
                    <th>Estado del stock</th>
                    <th>Acción</th>
                </tr>

            </thead>

            <tbody>
    `;

    inventarioMateriales.forEach(function(material, indice) {

    const costoPorUnidad =
        Number.isFinite(material.costoUnitario)
            ? material.costoUnitario
            : (material.cantidad > 0 ? material.precio / material.cantidad : 0);

    const valorActual =
        material.cantidad * costoPorUnidad;

    contenido += `

            <tr>

                <td>${material.nombre}</td>

                <td>${material.codigo}</td>

                <td>${material.cantidad}</td>

<td>${material.stockMinimo}</td>

<td>${material.unidad}</td>

                <td>
                    $${material.precio.toLocaleString("es-CO")} COP
                </td>
 <td>
    $${costoPorUnidad.toLocaleString("es-CO", {
        maximumFractionDigits: 2
    })} por ${material.unidad}
</td>

<td>
    $${Math.round(valorActual).toLocaleString("es-CO")} COP
</td>

<td>${material.proveedor}</td>
<td>
    ${
        material.cantidad <= material.stockMinimo
            ? "⚠️ Stock bajo"
            : "🟢 Stock suficiente"
    }
</td>
              <td>
   <button onclick="editarMaterial(${indice})">
    ✏️ Editar
</button>

<button onclick="entradaMaterial(${indice})">
    📥 Entrada
</button>

<button onclick="salidaMaterial(${indice})">
    📤 Salida
</button>

<button onclick="eliminarMaterial(${indice})">
    🗑️ Eliminar
</button>
</td>

            </tr>

        `;

    });

    contenido += `

            </tbody>

        </table>

    `;

    tabla.innerHTML = contenido;
}

 function buscarMaterialInventario() {

    const texto = document
        .getElementById("buscarInventario")
        .value
        .toLowerCase()
        .trim();
        
        const tipoStock =
    document.getElementById("filtroStockInventario").value;
        

   const materialesEncontrados = inventarioMateriales.filter(function(material) {

    const nombre = (material.nombre || "").toLowerCase();
    const codigo = (material.codigo || "").toLowerCase();

    const coincideBusqueda =
        nombre.includes(texto) || codigo.includes(texto);

    const esStockBajo =
        material.cantidad <= material.stockMinimo;

    const coincideStock =
        tipoStock === "Todos" ||
        (tipoStock === "Bajo" && esStockBajo) ||
        (tipoStock === "Suficiente" && !esStockBajo);

    return coincideBusqueda && coincideStock;
});

    mostrarInventarioFiltrado(materialesEncontrados);
}


function mostrarInventarioFiltrado(lista) {

    const tabla = document.getElementById("tablaInventario");

    if (lista.length === 0) {
        tabla.innerHTML = `
            <p>🔎 No se encontraron materiales.</p>
        `;
        return;
    }
    let contenido = `
    <table border="1">
        <thead>
            <tr>
                <th>Material</th>
                <th>Código</th>
                <th>Cantidad</th>
                <th>Stock mínimo</th>
                <th>Unidad</th>
                <th>Precio inicial</th>
                <th>Costo por unidad</th>
                <th>Valor actual</th>
                <th>Proveedor</th>
                <th>Estado del stock</th>
                <th>Acción</th>
            </tr>
        </thead>
        <tbody>
`;
lista.forEach(function(material) {

    const indice = inventarioMateriales.indexOf(material);

    const costoPorUnidad =
        Number.isFinite(material.costoUnitario)
            ? material.costoUnitario
            : (material.cantidad > 0 ? material.precio / material.cantidad : 0);
            
            const valorActual =
    material.cantidad * costoPorUnidad;

    contenido += `
        <tr>
            <td>${material.nombre}</td>
            <td>${material.codigo}</td>
            <td>${material.cantidad}</td>
            <td>${material.stockMinimo}</td>
            <td>${material.unidad}</td>

            <td>
                $${material.precio.toLocaleString("es-CO")} COP
            </td>

           <td>
    $${costoPorUnidad.toLocaleString("es-CO", {
        maximumFractionDigits: 2
    })} por ${material.unidad}
</td>

<td>
    $${Math.round(valorActual).toLocaleString("es-CO")} COP
</td>

<td>${material.proveedor}</td>

            <td>
                ${
                    material.cantidad <= material.stockMinimo
                        ? "⚠️ Stock bajo"
                        : "🟢 Stock suficiente"
                }
            </td>

            <td>
                <button onclick="editarMaterial(${indice})">✏️ Editar</button>
                <button onclick="entradaMaterial(${indice})">📥 Entrada</button>
                <button onclick="salidaMaterial(${indice})">📤 Salida</button>
                <button onclick="eliminarMaterial(${indice})">🗑️ Eliminar</button>
            </td>
        </tr>
    `;
});

contenido += `
        </tbody>
    </table>
`;

tabla.innerHTML = contenido;

}
const buscarInventario = document.getElementById("buscarInventario");
const filtroStockInventario = document.getElementById("filtroStockInventario");

buscarInventario.addEventListener("input", function() {
    buscarMaterialInventario();
});

filtroStockInventario.addEventListener("change", function() {
    buscarMaterialInventario();
});

// ===============================
// ELIMINAR MATERIAL
// ===============================

function eliminarMaterial(indice) {

    inventarioMateriales.splice(indice, 1);

    localStorage.setItem(
        "inventarioJanvart",
        JSON.stringify(inventarioMateriales)
    );

    mostrarInventario();

}
// ===============================
// EDITAR MATERIAL
// ===============================

function editarMaterial(indice) {

    const material = inventarioMateriales[indice];
    indiceMaterialEditando = indice;

    document.getElementById("nombreMaterial").value = material.nombre;
    document.getElementById("codigoMaterial").value = material.codigo;
    document.getElementById("cantidadMaterial").value = material.cantidad;
    document.getElementById("stockMinimoMaterial").value = material.stockMinimo;
    document.getElementById("unidadMaterial").value = material.unidad;
    document.getElementById("precioMaterial").value = material.precio;
    document.getElementById("proveedorMaterial").value = material.proveedor;
    const boton = document.getElementById("botonAgregarMaterial");
boton.textContent = "💾 Guardar cambios";

}


// ===============================
// ENTRADA DE MATERIAL
// ===============================

function entradaMaterial(indice) {

    const material = inventarioMateriales[indice];

    const cantidadEntrada = Number(
        prompt(
            "¿Cuántos " + material.unidad +
            " de " + material.nombre +
            " deseas agregar?"
        )
    );
if (!Number.isFinite(cantidadEntrada) || cantidadEntrada <= 0) {
    alert("Ingresa una cantidad numérica válida mayor que 0.");
    return;
}
const motivoEntrada = prompt(
    "Motivo de la entrada:\n\n" +
    "Ejemplos:\n" +
    "• Compra a proveedor\n" +
    "• Devolución\n" +
    "• Ajuste de inventario"
);

if (motivoEntrada === null || motivoEntrada.trim() === "") {
    alert("Debes indicar el motivo de la entrada.");
    return;
}
const costoNuevaEntrada = Number(
    prompt(
        "¿Cuánto pagaste en total por esta entrada de " +
        cantidadEntrada + " " + material.unidad + "?"
    )
);

if (!Number.isFinite(costoNuevaEntrada) || costoNuevaEntrada < 0) {
    alert("Ingresa un valor válido para el costo de la entrada.");
    return;
}

if (!Number.isFinite(material.costoUnitario)) {
    material.costoUnitario =
        material.cantidad > 0
            ? material.precio / material.cantidad
            : 0;
}

const valorSalida =
    cantidadSalida * material.costoUnitario;

const valorInventarioAnterior =
    material.cantidad * material.costoUnitario;

const nuevaCantidad =
    material.cantidad + cantidadEntrada;

const nuevoValorTotal =
    valorInventarioAnterior + costoNuevaEntrada;

material.costoUnitario =
    nuevoValorTotal / nuevaCantidad;

material.cantidad = nuevaCantidad;

// Registrar movimiento en el historial
const movimiento = {
    tipo: "Entrada",
    material: material.nombre,
    codigo: material.codigo,
    cantidad: cantidadEntrada,
    unidad: material.unidad,
    valor: costoNuevaEntrada,
    motivo: motivoEntrada.trim(),
    fecha: new Date().toLocaleString("es-CO")
};

historialMovimientos.push(movimiento);

alert("Movimientos guardados: " + historialMovimientos.length);

localStorage.setItem(
    "historialJanvart",
    JSON.stringify(historialMovimientos)
);


localStorage.setItem(
    "inventarioJanvart",
    JSON.stringify(inventarioMateriales)
);

localStorage.setItem(
    "inventarioJanvart",
    JSON.stringify(inventarioMateriales)
);

mostrarInventario();

mostrarHistorial();

alert("Entrada registrada correctamente.");
}

// ===============================
// SALIDA DE MATERIAL
// ===============================

function salidaMaterial(indice) {

    const material = inventarioMateriales[indice];

    const cantidadSalida = Number(
        prompt(
            "¿Cuántos " + material.unidad +
            " de " + material.nombre +
            " deseas retirar?"
        )
    );
  if (!Number.isFinite(cantidadSalida) || cantidadSalida <= 0) {
    alert("Ingresa una cantidad numérica válida mayor que 0.");
    return;
}
const motivoSalida = prompt(
    "Motivo de la salida:\n\n" +
    "Ejemplos:\n" +
    "• Uso en producción\n" +
    "• Material dañado\n" +
    "• Ajuste de inventario"
);

if (motivoSalida === null || motivoSalida.trim() === "") {
    alert("Debes indicar el motivo de la salida.");
    return;
}

if (cantidadSalida > material.cantidad) {
    alert("No hay suficiente material disponible.");
    return;
}

if (!Number.isFinite(material.costoUnitario)) {
    material.costoUnitario =
        material.cantidad > 0
            ? material.precio / material.cantidad
            : 0;
}

const valorSalida =
    cantidadSalida * material.costoUnitario;

material.cantidad = material.cantidad - cantidadSalida;

// Registrar salida en el historial
const movimiento = {
    tipo: "Salida",
    material: material.nombre,
    codigo: material.codigo,
    cantidad: cantidadSalida,
    unidad: material.unidad,
    valor: valorSalida,
    motivo: motivoSalida.trim(),
    fecha: new Date().toLocaleString("es-CO")
};


historialMovimientos.push(movimiento);

localStorage.setItem(
    "historialJanvart",
    JSON.stringify(historialMovimientos)
);

localStorage.setItem(
    "inventarioJanvart",
    JSON.stringify(inventarioMateriales)
);

mostrarInventario();
mostrarHistorial();

alert("Salida registrada correctamente.");
}

// Mostrar inventario al iniciar
mostrarInventario();


// ========================================
// JUEGO 1 - COLOREA CON JANVART
// ========================================

let colorSeleccionado = "#ff6b6b";
let historialColores = [];
function abrirColorear() {
    const juego = document.getElementById("juegoColorear");

    if (juego.style.display === "none") {
        juego.style.display = "block";
    } else {
        juego.style.display = "none";
    }
}

// Elegir un color
document.querySelectorAll(".color-btn").forEach(function(boton) {
    boton.style.backgroundColor = boton.dataset.color;

    boton.addEventListener("click", function() {
        colorSeleccionado = this.dataset.color;
    });
});

// Colorear las partes del dibujo
function activarColoreado() {

    document.querySelectorAll(".parte-colorear").forEach(function(parte) {

        parte.onclick = function(evento) {
            evento.stopPropagation();
            this.style.backgroundColor = colorSeleccionado;
        };

    });

}

// Reiniciar el dibujo
function reiniciarColorear() {
    document.querySelectorAll(".parte-colorear").forEach(function(parte) {
        parte.style.backgroundColor = "white";
    });
}

// ==========================================
// DIBUJOS PARA COLOREA CON JANVART
// ==========================================

function cambiarDibujo(tipo) {
localStorage.setItem("dibujoActualJanvart", tipo);
    const dibujo = document.getElementById("dibujoSeleccionado");

    dibujo.innerHTML = "";

    if (tipo === "gatito") {

        dibujo.innerHTML = `
            <div class="gatito-janvart">

                <div class="parte-colorear gato-cabeza">
                    <div class="parte-colorear gato-oreja oreja-izquierda"></div>
<div class="parte-colorear gato-oreja oreja-derecha"></div>

                    <div class="gato-ojo ojo-izquierdo"></div>
                    <div class="gato-ojo ojo-derecho"></div>

                    <div class="gato-nariz"></div>
                </div>

                <div class="parte-colorear gato-cuerpo"></div>

                <div class="parte-colorear gato-pata pata-izquierda"></div>
                <div class="parte-colorear gato-pata pata-derecha"></div>

                <div class="parte-colorear gato-cola"></div>

            </div>
        `;
    }
    else if (tipo === "dino") {
dibujo.innerHTML = `
    <div class="dino-janvart">

        <div class="parte-colorear dino-cuerpo"></div>

        <div class="parte-colorear dino-cabeza">
            <div class="dino-ojo"></div>
            <div class="dino-sonrisa"></div>
        </div>

        <div class="parte-colorear dino-barriga"></div>

        <div class="parte-colorear dino-pata pata-dino-izquierda"></div>
        <div class="parte-colorear dino-pata pata-dino-derecha"></div>

        <div class="parte-colorear dino-cola"></div>

        <div class="parte-colorear dino-placa placa1"></div>
        <div class="parte-colorear dino-placa placa2"></div>
        <div class="parte-colorear dino-placa placa3"></div>

    </div>
`;
    }
else if (tipo === "osito") {
    dibujo.innerHTML = `
        <div class="osito-janvart">

            <div class="parte-colorear oso-cuerpo"></div>

            <div class="parte-colorear oso-cabeza">
                <div class="parte-colorear oso-oreja oreja-oso-izquierda"></div>
                <div class="parte-colorear oso-oreja oreja-oso-derecha"></div>

                <div class="oso-ojo ojo-oso-izquierdo"></div>
                <div class="oso-ojo ojo-oso-derecho"></div>

                <div class="oso-hocico">
                    <div class="oso-nariz"></div>
                </div>
            </div>

            <div class="parte-colorear oso-brazo brazo-oso-izquierdo"></div>
            <div class="parte-colorear oso-brazo brazo-oso-derecho"></div>

            <div class="parte-colorear oso-pata pata-oso-izquierda"></div>
            <div class="parte-colorear oso-pata pata-oso-derecha"></div>

            <div class="parte-colorear oso-barriga"></div>

        </div>
    `;
}
else if (tipo === "robot") {
    dibujo.innerHTML = `
        <div class="robot-janvart">

            <div class="parte-colorear robot-antena"></div>

            <div class="parte-colorear robot-cabeza">
                <div class="robot-ojo ojo-robot-izquierdo"></div>
                <div class="robot-ojo ojo-robot-derecho"></div>
                <div class="robot-boca"></div>
            </div>

            <div class="parte-colorear robot-cuerpo"></div>

            <div class="parte-colorear robot-brazo brazo-robot-izquierdo"></div>
            <div class="parte-colorear robot-brazo brazo-robot-derecho"></div>

            <div class="parte-colorear robot-pierna pierna-robot-izquierda"></div>
            <div class="parte-colorear robot-pierna pierna-robot-derecha"></div>

        </div>
    `;
}
else if (tipo === "unicornio") {
    dibujo.innerHTML = `
        <div class="unicornio-janvart">

            <div class="parte-colorear unicornio-cuerpo"></div>

            <div class="parte-colorear unicornio-cabeza">
                <div class="unicornio-ojo"></div>
            </div>

            <div class="parte-colorear unicornio-cuerno"></div>

            <div class="parte-colorear unicornio-pata pata-unicornio-izquierda"></div>
            <div class="parte-colorear unicornio-pata pata-unicornio-derecha"></div>

            <div class="parte-colorear unicornio-cola"></div>

        </div>
    `;
}
else if (tipo === "astronauta") {
    dibujo.innerHTML = `
        <div class="astronauta-janvart">

            <div class="parte-colorear astronauta-mochila"></div>

            <div class="parte-colorear astronauta-casco">
                <div class="astronauta-visor"></div>
            </div>

            <div class="parte-colorear astronauta-cuerpo">
                <div class="astronauta-panel"></div>
            </div>

            <div class="parte-colorear astronauta-brazo brazo-astronauta-izquierdo"></div>
            <div class="parte-colorear astronauta-brazo brazo-astronauta-derecho"></div>

            <div class="parte-colorear astronauta-pierna pierna-astronauta-izquierda"></div>
            <div class="parte-colorear astronauta-pierna pierna-astronauta-derecha"></div>

        </div>
    `;
}

        activarColoreado();
    }

function activarColoreado() {

    document.querySelectorAll(".parte-colorear").forEach(function(parte) {

        parte.onclick = function(evento) {

            evento.stopPropagation();
historialColores.push({
    elemento: this,
    colorAnterior: this.classList.contains("unicornio-cuerno")
        ? this.style.borderBottomColor
        : this.style.backgroundColor
});
            if (this.classList.contains("unicornio-cuerno")) {
    this.style.borderBottomColor = colorSeleccionado;
} else {
    this.style.backgroundColor = colorSeleccionado;
}

        };

    });

}
function deshacerColoreado() {

    if (historialColores.length === 0) {
        return;
    }

    const ultimoCambio = historialColores.pop();

    if (ultimoCambio.elemento.classList.contains("unicornio-cuerno")) {
        ultimoCambio.elemento.style.borderBottomColor = ultimoCambio.colorAnterior;
    } else {
        ultimoCambio.elemento.style.backgroundColor = ultimoCambio.colorAnterior;
    }
}
function colorSorpresa() {
    const caracteres = "0123456789ABCDEF";
    let colorAleatorio = "#";

    for (let i = 0; i < 6; i++) {
        colorAleatorio += caracteres[Math.floor(Math.random() * 16)];
    }

    colorSeleccionado = colorAleatorio;

    const selector = document.getElementById("colorPersonalizado");

    if (selector) {
        selector.value = colorAleatorio;
    }
}
function guardarDibujo() {
    const dibujo = document.getElementById("dibujoSeleccionado");

    if (!dibujo || dibujo.innerHTML.trim() === "") {
        alert("Primero escoge y colorea un dibujo 🎨");
        return;
    }

    const creaciones = JSON.parse(localStorage.getItem("creacionesJanvart")) || [];

creaciones.push({
    nombre: localStorage.getItem("dibujoActualJanvart") || "creacion",
    dibujo: dibujo.innerHTML,
    fecha: new Date().toLocaleString()
});

localStorage.setItem("creacionesJanvart", JSON.stringify(creaciones));

localStorage.setItem("dibujoJanvart", dibujo.innerHTML);

    alert("💾 ¡Tu dibujo JANVART fue guardado correctamente!");
}
function recuperarDibujoGuardado() {
    const dibujoGuardado = localStorage.getItem("dibujoJanvart");

    if (dibujoGuardado) {
        const dibujo = document.getElementById("dibujoSeleccionado");

        if (dibujo) {
            dibujo.innerHTML = dibujoGuardado;
            activarColoreado();
        }
    }
}

window.addEventListener("load", recuperarDibujoGuardado);
function mostrarCreaciones() {
    const creaciones = JSON.parse(
        localStorage.getItem("creacionesJanvart")
    ) || [];

    if (creaciones.length === 0) {
        alert("📂 Todavía no tienes creaciones guardadas.");
        return;
    }

    let mensaje = "📂 MIS CREACIONES JANVART\n\n";

    creaciones.forEach(function(creacion, indice) {
        mensaje += (indice + 1) + ". 🎨 Creación guardada";
        mensaje += "\n📅 " + creacion.fecha + "\n\n";
    });

    const galeria = document.getElementById("galeriaCreaciones");
const lista = document.getElementById("listaCreaciones");

galeria.style.display = "block";
lista.innerHTML = "";

creaciones.forEach(function(creacion, indice) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-creacion";
const nombresDibujos = {
    gatito: "🐱 Gatito",
    dino: "🦖 Dino",
    osito: "🧸 Osito",
    robot: "🤖 Robot",
    unicornio: "🦄 Unicornio",
    astronauta: "🚀 Astronauta"
};

const nombreBonito =
    nombresDibujos[creacion.nombre] ||
    "🎨 Creación " + (indice + 1);
    tarjeta.innerHTML = `
    <div class="miniatura-creacion">${creacion.dibujo}</div>
        <h4>${nombreBonito}</h4>
        <p>📅 ${creacion.fecha}</p>
        <button onclick="abrirCreacion(${indice})">🎨 Abrir</button>
        <button onclick="eliminarCreacion(${indice})">🗑️ Eliminar</button>
    `;

    lista.appendChild(tarjeta);
});
}
function abrirCreacion(indice) {
    const creaciones = JSON.parse(
        localStorage.getItem("creacionesJanvart")
    ) || [];

    if (!creaciones[indice]) {
        alert("No se encontró esta creación.");
        return;
    }

    const dibujo = document.getElementById("dibujoSeleccionado");

    dibujo.innerHTML = creaciones[indice].dibujo;
    activarColoreado();

    alert("🎨 ¡Creación abierta correctamente!");
}
function eliminarCreacion(indice) {
    const creaciones = JSON.parse(
        localStorage.getItem("creacionesJanvart")
    ) || [];

    if (!creaciones[indice]) {
        alert("No se encontró esta creación.");
        return;
    }

    const confirmar = confirm("🗑️ ¿Seguro que quieres eliminar esta creación?");

    if (!confirmar) {
        return;
    }

    creaciones.splice(indice, 1);

    localStorage.setItem(
        "creacionesJanvart",
        JSON.stringify(creaciones)
    );

    mostrarCreaciones();

    alert("🗑️ Creación eliminada correctamente.");
}
function cerrarCreaciones() {
    const galeria = document.getElementById("galeriaCreaciones");

    if (galeria) {
        galeria.style.display = "none";
    }
}
let cartasMemoria = ["🎨", "🎨", "🧶", "🧶", "🖌️", "🖌️"];
let cartasVolteadas = [];
let parejasMemoria = 0;

function abrirMemoria() {
    document.getElementById("juegoMemoria").style.display = "block";
    reiniciarMemoria();
}

function reiniciarMemoria() {
    const tablero = document.getElementById("tableroMemoria");
    const mensaje = document.getElementById("mensajeMemoria");

    tablero.innerHTML = "";
    cartasVolteadas = [];
    parejasMemoria = 0;

    mensaje.textContent = "Encuentra las 3 parejas 🎨";

    const cartasMezcladas = [...cartasMemoria].sort(() => Math.random() - 0.5);

    cartasMezcladas.forEach(function(simbolo) {
        const carta = document.createElement("button");

        carta.className = "carta-memoria";
        carta.textContent = "❓";
        carta.dataset.simbolo = simbolo;

        carta.onclick = function() {
            voltearCarta(carta);
        };

        tablero.appendChild(carta);
    });
}
function voltearCarta(carta) {

    if (
        cartasVolteadas.length === 2 ||
        carta.classList.contains("encontrada") ||
        cartasVolteadas.includes(carta)
    ) {
        return;
    }

    carta.textContent = carta.dataset.simbolo;
    cartasVolteadas.push(carta);

    if (cartasVolteadas.length === 2) {

        const primera = cartasVolteadas[0];
        const segunda = cartasVolteadas[1];

        if (primera.dataset.simbolo === segunda.dataset.simbolo) {

            primera.classList.add("encontrada");
            segunda.classList.add("encontrada");

            cartasVolteadas = [];
            parejasMemoria++;

            if (parejasMemoria === 3) {
                document.getElementById("mensajeMemoria").textContent =
                    "🎉 ¡Ganaste! Encontraste todas las parejas.";
            }

        } else {

            setTimeout(function() {
                primera.textContent = "❓";
                segunda.textContent = "❓";
                cartasVolteadas = [];
            }, 700);
        }
    }
}
let piezasRompecabezas = [];
let piezaSeleccionada = null;

function abrirRompecabezas() {
    const juego = document.getElementById("juegoRompecabezas");

    juego.style.display = "block";
    reiniciarRompecabezas();
}

function reiniciarRompecabezas() {
    const tablero = document.getElementById("tableroRompecabezas");
    const mensaje = document.getElementById("mensajeRompecabezas");

    tablero.innerHTML = "";
    mensaje.textContent = "";

    piezasRompecabezas = [];

    for (let i = 0; i < 12; i++) {
        piezasRompecabezas.push(i);
    }

    piezasRompecabezas.sort(() => Math.random() - 0.5);

    crearPiezasRompecabezas();
}
function crearPiezasRompecabezas() {
    const tablero = document.getElementById("tableroRompecabezas");

    tablero.innerHTML = "";

    piezasRompecabezas.forEach(function(numeroPieza, posicionActual) {
        const pieza = document.createElement("button");

        pieza.className = "pieza-rompecabezas";

        const fila = Math.floor(numeroPieza / 4);
        const columna = numeroPieza % 4;

        pieza.style.backgroundImage = 'url("imagenes/logo-janvart.jpg")';
        pieza.style.backgroundSize = "400% 300%";

        pieza.style.backgroundPosition =
            (columna * 33.333) + "% " + (fila * 50) + "%";

        pieza.onclick = function() {
            seleccionarPiezaRompecabezas(posicionActual);
        };

        tablero.appendChild(pieza);
    });
}
function seleccionarPiezaRompecabezas(indice) {

    if (piezaSeleccionada === null) {
        piezaSeleccionada = indice;

        const piezas = document.querySelectorAll(".pieza-rompecabezas");
        piezas[indice].classList.add("seleccionada");

        return;
    }

    if (piezaSeleccionada === indice) {
        piezaSeleccionada = null;
        crearPiezasRompecabezas();
        return;
    }

    const temporal = piezasRompecabezas[piezaSeleccionada];

    piezasRompecabezas[piezaSeleccionada] =
        piezasRompecabezas[indice];

    piezasRompecabezas[indice] = temporal;

    piezaSeleccionada = null;

    crearPiezasRompecabezas();
    comprobarRompecabezas();
}
function comprobarRompecabezas() {
    const completado = piezasRompecabezas.every(function(pieza, indice) {
        return pieza === indice;
    });

    if (completado) {
        document.getElementById("mensajeRompecabezas").textContent =
            "🎉 ¡Completaste el logo JANVART!";
    }
}
// ===============================
// MOSTRAR HISTORIAL DE MOVIMIENTOS
// ===============================

function mostrarHistorial() {

    const tabla = document.getElementById("tablaHistorial");

    if (historialMovimientos.length === 0) {
        tabla.innerHTML = `
            <p>No hay movimientos registrados.</p>
        `;
        return;
    }
    let contenido = `
    <table border="1">
        <thead>
            <tr>
                <th>Tipo</th>
                <th>Material</th>
                <th>Código</th>
               <th>Cantidad</th>
<th>Unidad</th>
<th>Valor</th>
<th>Motivo</th>
<th>Fecha y hora</th>
            </tr>
        </thead>
        <tbody>
`;

[...historialMovimientos].reverse().forEach(function(movimiento) {

    contenido += `
        <tr>
            <td>
                ${movimiento.tipo === "Entrada" ? "📥 Entrada" : "📤 Salida"}
            </td>
            <td>${movimiento.material}</td>
            <td>${movimiento.codigo}</td>
            <td>${movimiento.cantidad}</td>
<td>${movimiento.unidad}</td>

<td>
    ${
        Number.isFinite(movimiento.valor)
          ? "$" + Math.round(movimiento.valor).toLocaleString("es-CO") + " COP"
            : "—"
    }
</td>

<td>${movimiento.motivo || "Sin motivo registrado"}</td>
<td>${movimiento.fecha}</td>
        </tr>
    `;

});

contenido += `
        </tbody>
    </table>
`;

    tabla.innerHTML = contenido;
}



mostrarHistorial();
// ===============================
// MOSTRAR HISTORIAL FILTRADO
// ===============================

function mostrarHistorialFiltrado(lista) {

    const tabla = document.getElementById("tablaHistorial");

    if (lista.length === 0) {
        tabla.innerHTML = `
            <p>🔎 No se encontraron movimientos.</p>
        `;
        return;
    }

    let contenido = `
        <table border="1">
            <thead>
                <tr>
<th>Tipo</th>
<th>Material</th>
<th>Código</th>
<th>Cantidad</th>
<th>Unidad</th>
<th>Valor</th>
<th>Motivo</th>
<th>Fecha y hora</th>
                </tr>
            </thead>
            <tbody>
    `;

    [...lista].reverse().forEach(function(movimiento) {

        contenido += `
            <tr>
                <td>
                    ${movimiento.tipo === "Entrada" ? "📥 Entrada" : "📤 Salida"}
                </td>
                <td>${movimiento.material}</td>
                <td>${movimiento.codigo}</td>
                <td>${movimiento.cantidad}</td>
<td>${movimiento.unidad}</td>
<td>
    ${
        Number.isFinite(movimiento.valor)
            ? "$" + Math.round(movimiento.valor).toLocaleString("es-CO") + " COP"
            : "—"
    }
</td>
<td>${movimiento.motivo || "Sin motivo registrado"}</td>
<td>${movimiento.fecha}</td>
            </tr>
        `;

    });

    contenido += `
            </tbody>
        </table>
    `;

    tabla.innerHTML = contenido;
}
const buscarHistorial = document.getElementById("buscarHistorial");
const filtroHistorial = document.getElementById("filtroTipoMovimiento");

buscarHistorial.addEventListener("input", function() {

    const texto = buscarHistorial.value.toLowerCase();

    

   const tipoSeleccionado = filtroHistorial.value;

const movimientosFiltrados = historialMovimientos.filter(function(movimiento) {

    const coincideBusqueda =
        (movimiento.material || "").toLowerCase().includes(texto) ||
        (movimiento.codigo || "").toLowerCase().includes(texto);

    const coincideTipo =
        tipoSeleccionado === "Todos" ||
        movimiento.tipo === tipoSeleccionado;

    return coincideBusqueda && coincideTipo;

});

    mostrarHistorialFiltrado(movimientosFiltrados);

});
// ===============================
// FILTRO POR TIPO DE MOVIMIENTO
// ===============================

const filtroTipoMovimiento =
    document.getElementById("filtroTipoMovimiento");

filtroTipoMovimiento.addEventListener("change", function() {

    const tipoSeleccionado = filtroTipoMovimiento.value;
    const texto = buscarHistorial.value.toLowerCase();

    const movimientosFiltrados = historialMovimientos.filter(function(movimiento) {

        const coincideBusqueda =
            (movimiento.material || "").toLowerCase().includes(texto) ||
            (movimiento.codigo || "").toLowerCase().includes(texto);

        const coincideTipo =
            tipoSeleccionado === "Todos" ||
            movimiento.tipo === tipoSeleccionado;

        return coincideBusqueda && coincideTipo;

    });

    mostrarHistorialFiltrado(movimientosFiltrados);

});
// =====================================
// CONECTAR CALCULADORA CON INVENTARIO
// =====================================

const tipoCostoMaterial =
    document.getElementById("tipoCostoMaterial");

tipoCostoMaterial.addEventListener("change", function() {

    const zonaInventario =
        document.getElementById("materialesDesdeInventario");

    const campoCosto =
        document.getElementById("materiales");

    if (tipoCostoMaterial.value === "inventario") {

        zonaInventario.style.display = "block";

        campoCosto.readOnly = true;
        campoCosto.value = 0;

        mostrarMaterialesEnCalculadora();

       document.getElementById("botonRegistrarProduccion").style.display = "block"; 

    } else {

        zonaInventario.style.display = "none";

        campoCosto.readOnly = false;

        campoCosto.value = "";

        document.getElementById("botonRegistrarProduccion").style.display = "none";

    }

});
function mostrarMaterialesEnCalculadora() {

    const zona =
        document.getElementById("materialesDesdeInventario");

    if (inventarioMateriales.length === 0) {
        zona.innerHTML = `
            <p>📦 No hay materiales registrados en el inventario.</p>
        `;
        return;
    }

    let contenido = `
        <h3>📦 Selecciona los materiales utilizados</h3>
    `;

    inventarioMateriales.forEach(function(material, indice) {

        contenido += `
            <div class="material-calculadora">

                <label>
                    ${material.nombre}
                    (${material.codigo})
                </label>

                <p>
                    Disponible:
                    ${material.cantidad} ${material.unidad}
                </p>

                <input
                    type="number"
                    min="0"
                    max="${material.cantidad}"
                    step="0.01"
                    value="0"
                    class="cantidad-material-calculadora"
                    data-indice="${indice}"
                    placeholder="Cantidad utilizada"
                >

            </div>
        `;
    });

    zona.innerHTML = contenido;
    const camposCantidad =
    document.querySelectorAll(".cantidad-material-calculadora");

camposCantidad.forEach(function(campo) {

    campo.addEventListener("input", function() {

        let costoTotalMateriales = 0;

        camposCantidad.forEach(function(input) {

            const indice = Number(input.dataset.indice);
            const cantidadUsada = Number(input.value);

            const material = inventarioMateriales[indice];

            if (material && cantidadUsada > material.cantidad) {

    input.value = material.cantidad;

    alert(
        "⚠️ No puedes utilizar más de " +
        material.cantidad + " " +
        material.unidad +
        " de " + material.nombre +
        " porque esa es la cantidad disponible."
    );

}

            if (
                material &&
                cantidadUsada >= 0 &&
                cantidadUsada <= material.cantidad
            ) {

                const costoUnitario =
                    Number.isFinite(material.costoUnitario)
                        ? material.costoUnitario
                        : material.precio / material.cantidad;

                costoTotalMateriales +=
                    cantidadUsada * costoUnitario;
            }

        });

        document.getElementById("materiales").value =
            Math.round(costoTotalMateriales);

    });

});
}
function registrarProduccion() {

    const nombreProducto =
        document.getElementById("nombreProducto").value.trim();

    const camposMateriales =
        document.querySelectorAll(".cantidad-material-calculadora");

    if (nombreProducto === "") {
        alert("⚠️ Escribe el nombre del producto antes de registrar la producción.");
        return;
    }

    let hayMateriales = false;

    camposMateriales.forEach(function(campo) {

        const cantidadUsada = Number(campo.value);

        if (cantidadUsada > 0) {
            hayMateriales = true;
        }

    });

    if (!hayMateriales) {
        alert("⚠️ Debes indicar al menos un material utilizado.");
        return;
    }
    let materialesSuficientes = true;

camposMateriales.forEach(function(campo) {

    const indice = Number(campo.dataset.indice);
    const cantidadUsada = Number(campo.value);
    const material = inventarioMateriales[indice];

    if (
        material &&
        cantidadUsada > material.cantidad
    ) {
        materialesSuficientes = false;
    }

});

if (!materialesSuficientes) {
    alert("⚠️ No hay suficiente material disponible para registrar esta producción.");
    return;
}
const confirmarProduccion = confirm(
    "🏭 ¿Confirmas que deseas registrar la producción de " +
    nombreProducto +
    "?\n\nLos materiales utilizados serán descontados del inventario."
);

if (!confirmarProduccion) {
    return;
}
camposMateriales.forEach(function(campo) {

    const indice = Number(campo.dataset.indice);
    const cantidadUsada = Number(campo.value);

    if (cantidadUsada <= 0) {
        return;
    }

    const material = inventarioMateriales[indice];

    if (!Number.isFinite(material.costoUnitario)) {
        material.costoUnitario =
            material.cantidad > 0
                ? material.precio / material.cantidad
                : 0;
    }

    const valorSalida =
        cantidadUsada * material.costoUnitario;

    material.cantidad =
        material.cantidad - cantidadUsada;

    const movimiento = {
        tipo: "Salida",
        material: material.nombre,
        codigo: material.codigo,
        cantidad: cantidadUsada,
        unidad: material.unidad,
        valor: valorSalida,
        motivo: "Producción de " + nombreProducto,
        fecha: new Date().toLocaleString("es-CO")
    };

    historialMovimientos.push(movimiento);

});
localStorage.setItem(
    "inventarioJanvart",
    JSON.stringify(inventarioMateriales)
);

localStorage.setItem(
    "historialJanvart",
    JSON.stringify(historialMovimientos)
);

mostrarInventario();
mostrarHistorial();
mostrarMaterialesEnCalculadora();
camposMateriales.forEach(function(campo) {
    campo.value = 0;
});

document.getElementById("materiales").value = 0;

alert(
    "✅ Producción de " +
    nombreProducto +
    " registrada correctamente."
);



}
// =====================================
// ACCESO A ADMINISTRACIÓN
// =====================================

const botonAccesoAdmin =
    document.getElementById("botonAccesoAdmin");

const formularioAccesoAdmin =
    document.getElementById("formularioAccesoAdmin");

botonAccesoAdmin.addEventListener("click", function() {

    formularioAccesoAdmin.style.display = "block";

});
const botonIngresarAdmin =
    document.getElementById("botonIngresarAdmin");

const contenidoAdministracion =
    document.getElementById("contenidoAdministracion");

botonIngresarAdmin.addEventListener("click", function() {

    const claveIngresada =
        document.getElementById("claveAdmin").value.trim();

    const mensaje =
        document.getElementById("mensajeAccesoAdmin");

    if (claveIngresada === "") {

        mensaje.textContent =
            "⚠️ Debes ingresar una contraseña.";

        return;
    }

    mensaje.textContent = "";

    formularioAccesoAdmin.style.display = "none";

    botonAccesoAdmin.style.display = "none";

    contenidoAdministracion.style.display = "block";

});
function irCalculadoraAdmin() {

    const calculadora =
        document.getElementById("calculadora-admin");

    calculadora.style.display = "block";

    calculadora.scrollIntoView({
        behavior: "smooth"
    });

}
function irInventarioAdmin() {

    const inventario =
        document.getElementById("inventario-admin");

    inventario.style.display = "block";

    inventario.scrollIntoView({
        behavior: "smooth"
    });

}
function irProduccionAdmin() {

    const calculadora =
        document.getElementById("calculadora-admin");

    calculadora.style.display = "block";

    calculadora.scrollIntoView({
        behavior: "smooth"
    });

}
function irHistorialAdmin() {

    const inventario =
        document.getElementById("inventario-admin");

    const historial =
        document.getElementById("historial-admin");

    inventario.style.display = "block";

    historial.scrollIntoView({
        behavior: "smooth"
    });

}
const botonCerrarAdmin =
    document.getElementById("botonCerrarAdmin");

botonCerrarAdmin.addEventListener("click", function() {

    // Ocultar las herramientas administrativas
    document.getElementById("calculadora-admin").style.display = "none";
    document.getElementById("inventario-admin").style.display = "none";

    // Ocultar el panel de herramientas
    document.getElementById("contenidoAdministracion").style.display = "none";

    // Volver a mostrar el botón de acceso
    document.getElementById("botonAccesoAdmin").style.display = "inline-block";

    // Dejar oculto el formulario de acceso
    document.getElementById("formularioAccesoAdmin").style.display = "none";

    // Limpiar el campo de contraseña
    document.getElementById("claveAdmin").value = "";
    document.getElementById("mensajeAccesoAdmin").textContent = "";

    // Volver a Administración
    document.getElementById("administracion").scrollIntoView({
        behavior: "smooth"
    });

});
// =========================================
// ABRIR Y CERRAR ASISTENTE JANVART
// =========================================

const botonAsistenteJanvart =
    document.getElementById("botonAsistenteJanvart");

const ventanaAsistenteJanvart =
    document.getElementById("ventanaAsistenteJanvart");

const cerrarAsistenteJanvart =
    document.getElementById("cerrarAsistenteJanvart");

botonAsistenteJanvart.addEventListener("click", function() {

    ventanaAsistenteJanvart.style.display = "flex";

});

cerrarAsistenteJanvart.addEventListener("click", function() {

    ventanaAsistenteJanvart.style.display = "none";

});
// =========================================
// ENVIAR MENSAJES A JANVART IA
// =========================================

const campoPreguntaJanvart =
    document.getElementById("preguntaAsistenteJanvart");

const botonEnviarJanvart =
    document.getElementById("enviarPreguntaJanvart");

const mensajesJanvart =
    document.getElementById("mensajesAsistenteJanvart");


// =========================================
// BUSCAR PRODUCTOS EN EL CATÁLOGO
// =========================================

function buscarProductosJanvart(texto) {

    const busqueda =
        texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");

    return productos.filter(function(producto) {

        const nombre =
            producto.nombre
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

        const categoria =
            producto.categoria
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

        return (
            nombre.includes(busqueda) ||
            categoria.includes(busqueda)
        );

    });

}


// =========================================
// CONTEXTO DE LA CONVERSACIÓN - JANVART IA
// =========================================

let contextoJanvart = "";

// Guarda el último producto consultado por el cliente
let ultimoProductoJanvart = null;

function enviarMensajeJanvart() {

    const pregunta =
        campoPreguntaJanvart.value.trim();

    if (pregunta === "") {
        return;
    }

    // Mostrar mensaje del usuario
    const mensajeUsuario =
        document.createElement("div");

    mensajeUsuario.classList.add("mensaje-usuario");
    mensajeUsuario.textContent = pregunta;

    mensajesJanvart.appendChild(mensajeUsuario);

    campoPreguntaJanvart.value = "";

    mensajesJanvart.scrollTop =
        mensajesJanvart.scrollHeight;


    // Preparar respuesta de JANVART IA
    setTimeout(function() {

        const respuestaIA =
            document.createElement("div");

        respuestaIA.classList.add("mensaje-ia");

    const preguntaMinuscula =
    pregunta
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

        // Buscar si la pregunta menciona un producto del catálogo
const palabrasGenericasProducto = [
    "amigurumi",
    "figura",
    "personalizada",
    "personalizado",
    "personaje",
    "artesanal",
    "pequena",
    "pequeno",
    "mediana",
    "mediano",
    "grande",
    "premium"
];

// Primero buscar coincidencia con el nombre completo
let productoEncontrado =
    productos.find(function(producto) {

        const nombreProducto =
            producto.nombre
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");

        return preguntaMinuscula.includes(nombreProducto);

    });


// Si no encontró el nombre completo,
// buscar por palabras importantes
if (
    !productoEncontrado &&
    !preguntaMinuscula.includes("material") &&
    !preguntaMinuscula.includes("de que esta hecho") &&
    !preguntaMinuscula.includes("de que esta hecha") &&
    !preguntaMinuscula.includes("mas barato") &&
    !preguntaMinuscula.includes("mas barata") &&
    !preguntaMinuscula.includes("mas economico") &&
    !preguntaMinuscula.includes("mas economica")
) {

    productoEncontrado =
        productos.find(function(producto) {

            const nombreProducto =
                producto.nombre
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "");

            const palabrasProducto =
                nombreProducto
                    .split(" ")
                    .filter(function(palabra) {

                        return (
                            palabra.length >= 4 &&
                            !palabrasGenericasProducto.includes(palabra)
                        );

                    });

            return palabrasProducto.some(function(palabra) {
                return preguntaMinuscula.includes(palabra);
            });

        });
}
    // =====================================
// PRODUCTO ENCONTRADO EN EL CATÁLOGO
// =====================================

if (
    productoEncontrado &&

    !preguntaMinuscula.includes("que alcancias") &&
    !preguntaMinuscula.includes("cuales alcancias") &&
    !preguntaMinuscula.includes("que tipos de alcancias") &&
    !preguntaMinuscula.includes("que opciones de alcancias") &&

    !preguntaMinuscula.includes("que figuras en porcelanicron") &&
    !preguntaMinuscula.includes("cuales figuras en porcelanicron") &&
    !preguntaMinuscula.includes("que tienen en porcelanicron") &&
    !preguntaMinuscula.includes("que opciones de porcelanicron") &&

    !preguntaMinuscula.includes("que limpiapipas") &&
    !preguntaMinuscula.includes("cuales limpiapipas") &&
    !preguntaMinuscula.includes("que tienen en limpiapipas") &&
    !preguntaMinuscula.includes("que opciones de limpiapipas")&&
    !preguntaMinuscula.includes("que regalos personalizados") &&
!preguntaMinuscula.includes("cuales regalos personalizados") &&
!preguntaMinuscula.includes("que regalos tienen") &&
!preguntaMinuscula.includes("que opciones de regalos")
) {

    contextoJanvart =
        productoEncontrado.categoria;
        ultimoProductoJanvart = productoEncontrado;

    respuestaIA.textContent =
        productoEncontrado.emoji +
        " Sí, tenemos " +
        productoEncontrado.nombre +
        ". Su precio es $" +
        productoEncontrado.precio.toLocaleString("es-CO") +
        " COP, su tamaño es " +
        productoEncontrado.tamano +
        " y actualmente tenemos " +
        productoEncontrado.stock +
        " disponible(s).";

    agregarBotonAsesorJanvart(respuestaIA);

} else

// =====================================
// SALUDOS
// =====================================

if (
    preguntaMinuscula === "hola" ||
    preguntaMinuscula === "holaa" ||
    preguntaMinuscula === "holaaa" ||
    preguntaMinuscula.includes("buenos días") ||
    preguntaMinuscula.includes("buenos dias") ||
    preguntaMinuscula.includes("buenas tardes") ||
    preguntaMinuscula.includes("buenas noches") ||
    preguntaMinuscula.includes("qué tal") ||
    preguntaMinuscula.includes("que tal")
) {
    contextoJanvart = "";
    ultimoProductoJanvart = null;

    respuestaIA.textContent =
        "👋 ¡Hola! Bienvenido a JANVART. 🎨 Estoy aquí para ayudarte con nuestros productos, personalizaciones, pedidos, precios, experiencias y talleres. ¿En qué puedo ayudarte?";
        // =====================================
// AGRADECIMIENTOS Y DESPEDIDAS
// =====================================

} else if (
    preguntaMinuscula.includes("gracias") ||
    preguntaMinuscula.includes("muchas gracias") ||
    preguntaMinuscula.includes("chao") ||
    preguntaMinuscula.includes("adiós") ||
    preguntaMinuscula.includes("adios") ||
    preguntaMinuscula.includes("hasta luego") ||
    preguntaMinuscula.includes("nos vemos") ||
    preguntaMinuscula.includes("hasta pronto")
) {
contextoJanvart = "";
ultimoProductoJanvart = null;

    respuestaIA.textContent =
        "💜 ¡Gracias por visitar JANVART! 🎨 Esperamos haberte ayudado. Recuerda: “Pinta tu plan, disfruta el momento”. ¡Hasta pronto!";

        // =====================================
// PRODUCTO - LIMPIAPIPAS
// =====================================

} else if (
    preguntaMinuscula.includes("limpiapipa") ||
    preguntaMinuscula.includes("limpiapipas") ||
    preguntaMinuscula.includes("flores") ||
    preguntaMinuscula.includes("ramo") ||
    preguntaMinuscula.includes("ramos")
) {

    contextoJanvart = "limpiapipas";

const productosLimpiapipas =
    productos.filter(function(producto) {
        return producto.categoria === "Limpiapipas";
    });

const nombresLimpiapipas =
    productosLimpiapipas
        .map(function(producto) {
            return producto.nombre;
        })
        .join(", ");

respuestaIA.textContent =
    "🌸 En nuestro catálogo tenemos estas opciones: " +
    nombresLimpiapipas +
    ". Puedes preguntarme por cualquiera de ellas para consultar su precio, tamaño y disponibilidad.";
        // =====================================
// PRODUCTO - PORCELANICRÓN
// =====================================

} else if (
    preguntaMinuscula.includes("porcelanicron") ||
    preguntaMinuscula.includes("figura en porcelanicron") ||
    preguntaMinuscula.includes("figuras en porcelanicron")
) {

   contextoJanvart = "porcelanicron";

const productosPorcelanicron =
    productos.filter(function(producto) {
        return producto.categoria === "Porcelanicrón";
    });

const nombresPorcelanicron =
    productosPorcelanicron
        .map(function(producto) {
            return producto.nombre;
        })
        .join(", ");

respuestaIA.textContent =
    "🎨 En nuestro catálogo tenemos estas opciones: " +
    nombresPorcelanicron +
    ". Puedes preguntarme por cualquiera de ellas para consultar su precio, tamaño y disponibilidad.";
        // =====================================
// PRODUCTO - ALCANCÍAS
// =====================================

} else if (
    preguntaMinuscula.includes("alcancia") ||
    preguntaMinuscula.includes("alcancias") ||
    preguntaMinuscula.includes("resina")
) {

   contextoJanvart = "alcancias";

const productosAlcancias =
    productos.filter(function(producto) {
        return producto.categoria === "Alcancías y Resina";
    });

const nombresAlcancias =
    productosAlcancias
        .map(function(producto) {
            return producto.nombre;
        })
        .join(", ");

respuestaIA.textContent =
    "🏺 En nuestro catálogo tenemos estas opciones: " +
    nombresAlcancias +
    ". Puedes preguntarme por cualquiera de ellas para consultar su precio, tamaño y disponibilidad.";
        // =====================================
// PRODUCTO - AMIGURUMIS
// =====================================

} else if (
    preguntaMinuscula.includes("amigurumi") ||
    preguntaMinuscula.includes("amigurumis") ||
    preguntaMinuscula.includes("crochet") ||
    preguntaMinuscula.includes("tejido")
) {

   contextoJanvart = "amigurumis";

const productosAmigurumis =
    productos.filter(function(producto) {
        return producto.categoria === "Amigurumis";
    });

const nombresAmigurumis =
    productosAmigurumis
        .map(function(producto) {
            return producto.nombre;
        })
        .join(", ");

respuestaIA.textContent =
    "🧶 En nuestro catálogo tenemos estas opciones: " +
    nombresAmigurumis +
    ". Puedes preguntarme por cualquiera de ellas para consultar su precio, tamaño y disponibilidad.";

        // =====================================
// RESPUESTA CORTA - SÍ
// =====================================

} else if (
    preguntaMinuscula === "si" ||
    preguntaMinuscula === "sí" ||
    preguntaMinuscula === "claro" ||
    preguntaMinuscula === "dale"
) {

    if (ultimoProductoJanvart) {

    respuestaIA.textContent =
        ultimoProductoJanvart.emoji +
        " ¡Claro! Seguimos hablando de " +
        ultimoProductoJanvart.nombre +
        ". Puedes preguntarme por su material, tamaño, disponibilidad, personalización, precio o cómo realizar el pedido.";

} else if (contextoJanvart === "alcancias") {

        respuestaIA.textContent =
            "🏺 ¡Claro! ¿Qué deseas conocer sobre tu alcancía: personalización, precio o cómo realizar el pedido?";

    } else if (contextoJanvart === "amigurumis") {

        respuestaIA.textContent =
            "🧶 ¡Claro! ¿Qué deseas conocer sobre el amigurumi: personalización, precio o cómo realizar el pedido?";

    } else if (contextoJanvart === "porcelanicron") {

        respuestaIA.textContent =
            "🎨 ¡Claro! ¿Qué deseas conocer sobre la figura en porcelanicrón: personalización, precio o cómo realizar el pedido?";

    } else if (contextoJanvart === "limpiapipas") {

        respuestaIA.textContent =
            "🌸 ¡Claro! ¿Qué deseas conocer sobre la creación en limpiapipas: personalización, precio o cómo realizar el pedido?";
} else if (contextoJanvart === "regalos") {

    respuestaIA.textContent =
        "🎁 ¡Claro! ¿Qué deseas conocer sobre nuestros regalos personalizados: opciones, personalización, precio o cómo realizar el pedido?";

} else if (contextoJanvart === "personajes") {

    respuestaIA.textContent =
        "🌟 ¡Claro! ¿Qué deseas conocer sobre nuestros personajes y colección: opciones, personalización, precio o cómo realizar el pedido?";

    } else {

        respuestaIA.textContent =
            "🎨 ¡Claro! Cuéntame qué producto o servicio de JANVART te interesa y con gusto te orientaré.";

    }

   // =====================================
// RESPUESTA CORTA - NO
// =====================================

} else if (
    preguntaMinuscula === "no" ||
    preguntaMinuscula === "no gracias" ||
    preguntaMinuscula === "por ahora no"
) {

    respuestaIA.textContent =
        "😊 Está bien. Si deseas, puedo ayudarte con otro producto, precios, personalización, pedidos, experiencias o talleres de JANVART.";

    contextoJanvart = "";
ultimoProductoJanvart = null;


// =====================================
// PRODUCTOS - SEGUIMIENTO
// =====================================

} else if (
    contextoJanvart === "productos" &&
    (
        preguntaMinuscula === "cuales" ||
        preguntaMinuscula === "cuales?" ||
        preguntaMinuscula === "que opciones tienen" ||
        preguntaMinuscula === "muestrame"
    )
) {

    respuestaIA.textContent =
        "🎨 Tenemos varias categorías de productos: amigurumis, alcancías personalizadas en resina, figuras en porcelanicrón y creaciones en limpiapipas. También podemos realizar algunas creaciones personalizadas. ¿Cuál de estas categorías te gustaría conocer?";

        // =====================================
// PRODUCTO - REGALOS PERSONALIZADOS
// =====================================

} else if (
    preguntaMinuscula.includes("regalo") ||
    preguntaMinuscula.includes("regalos") ||
    preguntaMinuscula.includes("detalle") ||
    preguntaMinuscula.includes("detalles")
) {

    contextoJanvart = "regalos";

    const productosRegalos =
        productos.filter(function(producto) {
            return producto.categoria === "Regalos Personalizados";
        });

    const nombresRegalos =
        productosRegalos
            .map(function(producto) {
                return producto.nombre;
            })
            .join(", ");

    respuestaIA.textContent =
        "🎁 En nuestro catálogo tenemos estas opciones de regalos personalizados: " +
        nombresRegalos +
        ". Puedes preguntarme por cualquiera de ellas para consultar su precio, tamaño y disponibilidad.";

        // =====================================
// PRODUCTO - PERSONAJES Y COLECCIÓN
// =====================================

} else if (
    preguntaMinuscula.includes("personaje") ||
    preguntaMinuscula.includes("personajes") ||
    preguntaMinuscula.includes("coleccion")
) {

    contextoJanvart = "personajes";

    const productosPersonajes =
        productos.filter(function(producto) {
            return producto.categoria === "Personajes y Colección";
        });

    const nombresPersonajes =
        productosPersonajes
            .map(function(producto) {
                return producto.nombre;
            })
            .join(", ");

    respuestaIA.textContent =
        "🌟 En nuestro catálogo tenemos estas opciones de personajes y colección: " +
        nombresPersonajes +
        ". Puedes preguntarme por cualquiera de ellas para consultar su precio, tamaño y disponibilidad.";

// =====================================
// PRODUCTOS
// =====================================

} else if (
    preguntaMinuscula.includes("producto") ||
    preguntaMinuscula.includes("productos") ||
    preguntaMinuscula.includes("venden") ||
    preguntaMinuscula.includes("que hacen") ||
    preguntaMinuscula.includes("que tienen") ||
    preguntaMinuscula.includes("que ofrecen") ||
    preguntaMinuscula.includes("que puedo comprar") ||
    preguntaMinuscula.includes("muestrame") ||
    preguntaMinuscula.includes("catalogo") ||
    preguntaMinuscula.includes("creaciones") ||
    preguntaMinuscula.includes("regalo")
) {

    contextoJanvart = "productos";

    respuestaIA.textContent =
        "🎨 En JANVART tenemos diferentes creaciones artísticas, como amigurumis, alcancías en resina personalizadas, figuras en porcelanicrón, creaciones en limpiapipas y otros productos hechos a mano. También contamos con materiales y experiencias creativas. ¿Qué tipo de producto te interesa conocer?";

        // =====================================
// PRODUCTOS SIMILARES / MÁS OPCIONES
// =====================================

} else if (
    ultimoProductoJanvart &&
    (
        preguntaMinuscula.includes("que otros tienen") ||
        preguntaMinuscula.includes("que otros hay") ||
        preguntaMinuscula.includes("otras opciones") ||
        preguntaMinuscula.includes("mas opciones") ||
        preguntaMinuscula.includes("otros parecidos") ||
        preguntaMinuscula.includes("otras parecidas") ||
        preguntaMinuscula.includes("productos similares") ||
        preguntaMinuscula.includes("algo parecido")
    )
) {

    const productosSimilares =
        productos.filter(function(producto) {

            return (
                producto.categoria === ultimoProductoJanvart.categoria &&
                producto.id !== ultimoProductoJanvart.id
            );

        });

    if (productosSimilares.length > 0) {

        const nombresSimilares =
            productosSimilares
                .map(function(producto) {
                    return producto.nombre;
                })
                .join(", ");

        respuestaIA.textContent =
            "🎨 Claro. Además de " +
            ultimoProductoJanvart.nombre +
            ", en " +
            ultimoProductoJanvart.categoria +
            " tenemos: " +
            nombresSimilares +
            ". Puedes preguntarme por cualquiera para conocer su precio, tamaño y disponibilidad.";

    } else {

        respuestaIA.textContent =
            "🎨 Por ahora no encuentro otros productos de la misma categoría en nuestro catálogo.";

    }
        // =====================================
// ALTERNATIVA MÁS ECONÓMICA
// =====================================

} else if (
    ultimoProductoJanvart &&
    (
        preguntaMinuscula.includes("mas barato") ||
        preguntaMinuscula.includes("mas barata") ||
        preguntaMinuscula.includes("uno mas economico") ||
        preguntaMinuscula.includes("una mas economica") ||
        preguntaMinuscula.includes("algo mas economico") ||
        preguntaMinuscula.includes("algo mas barato")
    )
) {

    const alternativasEconomicas =
        productos
            .filter(function(producto) {

                return (
                    producto.categoria === ultimoProductoJanvart.categoria &&
                    producto.precio < ultimoProductoJanvart.precio
                );

            })
            .sort(function(a, b) {
                return b.precio - a.precio;
            });

    if (alternativasEconomicas.length > 0) {

        const alternativa =
            alternativasEconomicas[0];

        respuestaIA.textContent =
            "💰 Sí. Una alternativa más económica dentro de " +
            ultimoProductoJanvart.categoria +
            " es " +
            alternativa.nombre +
            ", con un precio de $" +
            alternativa.precio.toLocaleString("es-CO") +
            " COP y un tamaño de " +
            alternativa.tamano +
            ".";

        ultimoProductoJanvart = alternativa;

    } else {

        respuestaIA.textContent =
            "💰 En este momento no encuentro una opción más económica dentro de la misma categoría en nuestro catálogo.";

    }
    // =====================================
// DISPONIBILIDAD DEL ÚLTIMO PRODUCTO
// =====================================

} else if (
    ultimoProductoJanvart &&
    (
        preguntaMinuscula.includes("cuantos quedan") ||
        preguntaMinuscula.includes("cuantas quedan") ||
        preguntaMinuscula.includes("hay disponible") ||
        preguntaMinuscula.includes("esta disponible") ||
        preguntaMinuscula.includes("tienen disponible") ||
        preguntaMinuscula.includes("hay existencias") ||
        preguntaMinuscula.includes("tienen existencias") ||
        preguntaMinuscula.includes("cuanto stock") ||
        preguntaMinuscula.includes("que stock")
    )
) {

    if (ultimoProductoJanvart.stock > 0) {

        respuestaIA.textContent =
            "📦 Sí, " +
            ultimoProductoJanvart.nombre +
            " está disponible. Actualmente tenemos " +
            ultimoProductoJanvart.stock +
            (ultimoProductoJanvart.stock === 1
    ? " unidad disponible."
    : " unidades disponibles.");

    } else {

        respuestaIA.textContent =
            "📦 En este momento " +
            ultimoProductoJanvart.nombre +
            " aparece sin unidades disponibles en nuestro catálogo. Puedes consultar con un asesor de JANVART sobre una nueva elaboración.";

        agregarBotonAsesorJanvart(respuestaIA);
    }
    // =====================================
// TAMAÑO DEL ÚLTIMO PRODUCTO
// =====================================

} else if (
    ultimoProductoJanvart &&
    (
        preguntaMinuscula.includes("que tamaño") ||
        preguntaMinuscula.includes("cuanto mide") ||
        preguntaMinuscula.includes("cuanto mide el") ||
        preguntaMinuscula.includes("cuanto mide la") ||
        preguntaMinuscula.includes("de que tamaño") ||
        preguntaMinuscula.includes("que tan grande") ||
        preguntaMinuscula.includes("medidas")
    )
) {

    respuestaIA.textContent =
        "📏 " +
        ultimoProductoJanvart.nombre +
        " tiene un tamaño aproximado de " +
        ultimoProductoJanvart.tamano +
        ".";
        // =====================================
// DESCRIPCIÓN DEL ÚLTIMO PRODUCTO
// =====================================

} else if (
    ultimoProductoJanvart &&
    (
        preguntaMinuscula.includes("como es") ||
        preguntaMinuscula.includes("cuentame mas") ||
        preguntaMinuscula.includes("dame mas informacion") ||
        preguntaMinuscula.includes("que caracteristicas tiene") ||
        preguntaMinuscula.includes("caracteristicas") ||
        preguntaMinuscula.includes("descripcion")
    )
) {

    respuestaIA.textContent =
        "🎨 " +
        ultimoProductoJanvart.nombre +
        ": " +
        ultimoProductoJanvart.descripcion;
        // =====================================
// MATERIAL DEL ÚLTIMO PRODUCTO
// =====================================

} else if (
    ultimoProductoJanvart &&
    (
        preguntaMinuscula.includes("de que material") ||
        preguntaMinuscula.includes("que material") ||
        preguntaMinuscula.includes("con que esta hecho") ||
        preguntaMinuscula.includes("con que esta hecha") ||
        preguntaMinuscula.includes("de que esta hecho") ||
        preguntaMinuscula.includes("de que esta hecha")
    )
) {

    respuestaIA.textContent =
        "🎨 " +
        ultimoProductoJanvart.nombre +
        " está elaborado principalmente en " +
        ultimoProductoJanvart.material +
        ".";

      // =====================================
// PERSONALIZACIÓN
// =====================================

} else if (
    preguntaMinuscula.includes("personalizar") ||
    preguntaMinuscula.includes("personalizado") ||
    preguntaMinuscula.includes("personalizada") ||
    preguntaMinuscula.includes("personalizacion") ||
    preguntaMinuscula.includes("a mi gusto") ||
    preguntaMinuscula.includes("como yo quiera") ||
    preguntaMinuscula.includes("tengo una idea") ||
    preguntaMinuscula.includes("quiero algo unico") ||
    preguntaMinuscula.includes("diseño especial") ||
    preguntaMinuscula.includes("diseño propio") ||
    preguntaMinuscula.includes("por encargo") ||
    preguntaMinuscula.includes("con mi nombre") ||
    preguntaMinuscula.includes("con una foto") ||
 preguntaMinuscula.includes("colores que yo quiera") ||
preguntaMinuscula.includes("se puede cambiar") ||
preguntaMinuscula.includes("puedo cambiarlo") ||
preguntaMinuscula.includes("puedo cambiarla") ||
preguntaMinuscula.includes("hacerlo a mi gusto") ||
preguntaMinuscula.includes("hacerla a mi gusto") ||
preguntaMinuscula.includes("ponerle mi nombre") ||
preguntaMinuscula.includes("elegir los colores") ||
preguntaMinuscula.includes("cambiar los colores") ||
preguntaMinuscula.includes("personalizarlo") ||
preguntaMinuscula.includes("personalizarla")
) {

    if (ultimoProductoJanvart) {

    if (ultimoProductoJanvart.personalizable) {

        respuestaIA.textContent =
            "✨ Sí, " +
            ultimoProductoJanvart.nombre +
            " se puede personalizar. Puedes indicarnos los colores, detalles o la idea que tienes en mente. Para definir exactamente la personalización y confirmar el precio final, puedes solicitar una cotización con JANVART.";

    } else {

        respuestaIA.textContent =
            "🎨 " +
            ultimoProductoJanvart.nombre +
            " no aparece como personalizable en nuestro catálogo. Si deseas una creación diferente, puedo ayudarte a consultar otras opciones.";

    }

} else if (contextoJanvart === "alcancias") {

        respuestaIA.textContent =
            "🏺✨ Sí, nuestras alcancías en resina pueden personalizarse. Puedes contarnos qué diseño deseas, el tamaño aproximado, colores y detalles que te gustaría incluir. Para confirmar si podemos realizar tu idea y conocer el precio final, puedes solicitar una cotización con JANVART.";
            

    } else if (contextoJanvart === "amigurumis") {

        respuestaIA.textContent =
            "🧶✨ Sí, algunos amigurumis pueden personalizarse según la creación que estés buscando. Puedes indicarnos el diseño, tamaño, colores y detalles que deseas. La disponibilidad dependerá de la complejidad de la solicitud.";

    } else if (contextoJanvart === "porcelanicron") {

        respuestaIA.textContent =
            "🎨✨ Sí, las figuras en porcelanicrón pueden realizarse con diferentes diseños, tamaños, colores y detalles. Cuéntanos tu idea y podremos orientarte sobre las posibilidades de personalización.";

    } else if (contextoJanvart === "limpiapipas") {

        respuestaIA.textContent =
            "🌸✨ Sí, nuestras creaciones en limpiapipas pueden personalizarse en colores, tamaño, tipo de flores o figuras y otros detalles. Cuéntanos qué tienes en mente para orientarte mejor.";

    } else {

        respuestaIA.textContent =
            "✨ ¡Sí! En JANVART nos encanta crear productos personalizados. Puedes contarnos tu idea, el tipo de producto, tamaño aproximado y los detalles que te gustaría incluir. La disponibilidad y el precio dependerán de la creación solicitada. Si necesitas definir detalles específicos, puedo indicarte cómo comunicarte con un asesor de JANVART.";

    }
       // =====================================
// PEDIDOS
// =====================================

} else if (
    preguntaMinuscula.includes("pedido") ||
    preguntaMinuscula.includes("pedir") ||
    preguntaMinuscula.includes("comprar") ||
    preguntaMinuscula.includes("compra") ||
    preguntaMinuscula.includes("encargar") ||
    preguntaMinuscula.includes("orden") ||
    preguntaMinuscula.includes("quiero uno") ||
    preguntaMinuscula.includes("quiero comprar") ||
    preguntaMinuscula.includes("como compro") ||
    preguntaMinuscula.includes("como hago un pedido") ||
    preguntaMinuscula.includes("como puedo pedir") ||
    preguntaMinuscula.includes("quiero hacer un pedido") ||
    preguntaMinuscula.includes("quiero encargar") ||
    preguntaMinuscula.includes("donde compro") ||
    preguntaMinuscula.includes("como lo pido") ||
    preguntaMinuscula.includes("como la pido")|| 
preguntaMinuscula.includes("como lo compro") ||
preguntaMinuscula.includes("como la compro") ||
preguntaMinuscula.includes("como lo encargo") ||
preguntaMinuscula.includes("como la encargo") ||
preguntaMinuscula.includes("quiero pedirlo") ||
preguntaMinuscula.includes("quiero pedirla") ||
preguntaMinuscula.includes("quiero comprarlo") ||
preguntaMinuscula.includes("quiero comprarla") ||
preguntaMinuscula.includes("quiero encargarlo") ||
preguntaMinuscula.includes("quiero encargarla") ||
preguntaMinuscula.includes("como hago para comprarlo") ||
preguntaMinuscula.includes("como hago para comprarla")
) {

    if (ultimoProductoJanvart) {

    respuestaIA.textContent =
        "📦 ¡Claro! Si deseas pedir " +
        ultimoProductoJanvart.nombre +
        ", actualmente aparece con " +
        ultimoProductoJanvart.stock +
        " disponible(s) en nuestro catálogo. Puedo ayudarte a continuar con el pedido y, si necesitas confirmar personalización, disponibilidad o detalles finales, puedes comunicarte con un asesor de JANVART.";

    agregarBotonAsesorJanvart(respuestaIA);

} else if (contextoJanvart === "alcancias") {

        respuestaIA.textContent =
            "🏺📦 ¡Claro! Si deseas pedir una alcancía en resina, primero necesitamos conocer el diseño, tamaño y detalles de personalización que deseas. Después un asesor de JANVART puede ayudarte a confirmar disponibilidad, precio final y continuar con tu pedido.";

    } else if (contextoJanvart === "amigurumis") {

        respuestaIA.textContent =
            "🧶📦 ¡Claro! Para solicitar un amigurumi, cuéntanos qué diseño buscas, el tamaño aproximado y si deseas algún detalle personalizado. Después podremos orientarte para confirmar disponibilidad y continuar con tu pedido.";

    } else if (contextoJanvart === "porcelanicron") {

        respuestaIA.textContent =
            "🎨📦 Para solicitar una figura en porcelanicrón, necesitamos conocer qué diseño deseas, el tamaño aproximado y los detalles de personalización. Con esa información JANVART podrá orientarte sobre disponibilidad, precio y pedido.";

    } else if (contextoJanvart === "limpiapipas") {

        respuestaIA.textContent =
            "🌸📦 Para realizar un pedido de una creación en limpiapipas, cuéntanos si deseas flores, un ramo u otra figura, además de los colores, tamaño y detalles que buscas. Después podremos ayudarte a continuar con el pedido.";

    } else {

        respuestaIA.textContent =
            "📦 ¡Claro! Puedo orientarte con tu pedido en JANVART. Cuéntame qué producto te interesa y si deseas personalizarlo. Para confirmar disponibilidad, precio final y detalles del pedido, podremos comunicarte con un asesor de JANVART.";

    }
// =====================================
// PRECIOS
// =====================================

} else if (
    preguntaMinuscula.includes("precio") ||
    preguntaMinuscula.includes("precios") ||
    preguntaMinuscula.includes("cuanto cuesta") ||
    preguntaMinuscula.includes("cuanto vale") ||
    preguntaMinuscula.includes("cuanto seria") ||
    preguntaMinuscula.includes("cuanto me sale") ||
    preguntaMinuscula.includes("cuanto saldria") ||
    preguntaMinuscula.includes("que valor tiene") ||
    preguntaMinuscula.includes("que valor") ||
    preguntaMinuscula.includes("el valor") ||
    preguntaMinuscula.includes("valor del producto") ||
    preguntaMinuscula.includes("costo") ||
    preguntaMinuscula.includes("cotizacion") ||
    preguntaMinuscula.includes("quiero saber cuanto vale")
) {

    if (contextoJanvart === "alcancias") {

        respuestaIA.textContent =
            "🏺💰 El precio de una alcancía en resina depende del tamaño, diseño y nivel de personalización que elijas. Para darte un valor exacto necesitamos conocer cómo quieres tu alcancía. Si deseas, puedes solicitar la atención de un asesor de JANVART.";
            agregarBotonAsesorJanvart(respuestaIA);

    } else if (contextoJanvart === "amigurumis") {

        respuestaIA.textContent =
            "🧶💰 El precio de un amigurumi depende principalmente del tamaño, diseño, materiales y complejidad de la figura. Para confirmar el valor exacto de tu creación puedes solicitar una cotización con un asesor de JANVART.";
            agregarBotonAsesorJanvart(respuestaIA);

    } else if (contextoJanvart === "porcelanicron") {

        respuestaIA.textContent =
            "🎨💰 El precio de una figura en porcelanicrón depende del tamaño, diseño, cantidad de detalles y personalización solicitada. Un asesor de JANVART puede ayudarte a confirmar el valor de tu creación.";
            agregarBotonAsesorJanvart(respuestaIA);

    } else if (contextoJanvart === "limpiapipas") {

        respuestaIA.textContent =
            "🌸💰 El precio de nuestras creaciones en limpiapipas depende del tipo de creación, tamaño, cantidad de flores o figuras y detalles solicitados. Para conocer el valor exacto puedes solicitar una cotización con JANVART.";
            agregarBotonAsesorJanvart(respuestaIA);

    } else {

    respuestaIA.textContent =
        "💰 Los precios en JANVART pueden variar según el producto, tamaño, materiales y nivel de personalización. Puedes consultar nuestro catálogo y, si deseas una creación personalizada, un asesor puede ayudarte a confirmar el precio final.";

    agregarBotonAsesorJanvart(respuestaIA);

}
// =====================================
// ENVÍOS Y ENTREGAS
// =====================================

} else if (
    preguntaMinuscula.includes("envio") ||
    preguntaMinuscula.includes("envios") ||
    preguntaMinuscula.includes("entrega") ||
    preguntaMinuscula.includes("entregas") ||
    preguntaMinuscula.includes("domicilio") ||
    preguntaMinuscula.includes("domicilios") ||
    preguntaMinuscula.includes("mandan a") ||
    preguntaMinuscula.includes("enviar a") ||
    preguntaMinuscula.includes("envian a") ||
    preguntaMinuscula.includes("como recibo") ||
    preguntaMinuscula.includes("como me llega") ||
    preguntaMinuscula.includes("donde entregan")
) {

    respuestaIA.textContent =
        "📦 Sí, podemos orientarte con la entrega de tu pedido. El costo y el tiempo de entrega dependen de tu ubicación y del producto solicitado. Antes de confirmar el pedido, un asesor de JANVART te ayudará a verificar estos detalles.";

    agregarBotonAsesorJanvart(respuestaIA);

    // =====================================
// HORARIOS DE ATENCIÓN
// =====================================

} else if (
    preguntaMinuscula.includes("horario") ||
    preguntaMinuscula.includes("horarios") ||
    preguntaMinuscula.includes("hora de atencion") ||
    preguntaMinuscula.includes("horas de atencion") ||
    preguntaMinuscula.includes("cuando atienden") ||
    preguntaMinuscula.includes("a que hora atienden") ||
    preguntaMinuscula.includes("estan abiertos") ||
    preguntaMinuscula.includes("atienden hoy") ||
    preguntaMinuscula.includes("dias de atencion")
) {

    respuestaIA.textContent =
        "🕘 Nuestro horario de atención en JANVART es de lunes a sábado, de 9:00 a. m. a 6:00 p. m. Si nos escribes fuera de este horario, puedes dejar tu mensaje y podremos atender tu solicitud posteriormente.";
        // =====================================
// FORMAS DE PAGO
// =====================================

} else if (
    preguntaMinuscula.includes("forma de pago") ||
    preguntaMinuscula.includes("formas de pago") ||
    preguntaMinuscula.includes("medio de pago") ||
    preguntaMinuscula.includes("medios de pago") ||
    preguntaMinuscula.includes("como pago") ||
    preguntaMinuscula.includes("como puedo pagar") ||
    preguntaMinuscula.includes("pagar") ||
    preguntaMinuscula.includes("efectivo") ||
    preguntaMinuscula.includes("transferencia") ||
    preguntaMinuscula.includes("transferencia bancaria")
) {

    respuestaIA.textContent =
        "💳 En JANVART puedes realizar tus pagos en efectivo o mediante transferencia bancaria. Los datos necesarios para realizar una transferencia se confirman directamente al momento de gestionar tu pedido con JANVART.";

    agregarBotonAsesorJanvart(respuestaIA);
        // =====================================
// EXPERIENCIAS Y TALLERES
// =====================================

} else if (
    preguntaMinuscula.includes("experiencia") ||
    preguntaMinuscula.includes("experiencias") ||
    preguntaMinuscula.includes("taller") ||
    preguntaMinuscula.includes("talleres") ||
    preguntaMinuscula.includes("actividad") ||
    preguntaMinuscula.includes("actividades") ||
    preguntaMinuscula.includes("quiero pintar") ||
    preguntaMinuscula.includes("aprender a pintar") ||
    preguntaMinuscula.includes("porcelanicrón") ||
    preguntaMinuscula.includes("porcelanicron") ||
    preguntaMinuscula.includes("zona creativa")
) {

    respuestaIA.textContent =
        "🎨 En JANVART también puedes vivir experiencias creativas. Contamos con talleres de pintura y porcelanicrón, además de nuestra Zona Creativa con actividades y juegos. La idea es que puedas crear, aprender y disfrutar el momento.";

// =====================================
// HABLAR CON UN ASESOR
// =====================================

} else if (
    preguntaMinuscula.includes("asesor") ||
    preguntaMinuscula.includes("persona") ||
    preguntaMinuscula.includes("humano") ||
    preguntaMinuscula.includes("atencion") ||
    preguntaMinuscula.includes("hablar con alguien") ||
    preguntaMinuscula.includes("necesito ayuda") ||
    preguntaMinuscula.includes("quiero hablar") ||
    preguntaMinuscula.includes("quiero comunicarme") ||
    preguntaMinuscula.includes("contactar") ||
    preguntaMinuscula.includes("contacto") ||
    preguntaMinuscula.includes("servicio al cliente") ||
    preguntaMinuscula.includes("comunicarme con ustedes") ||
    preguntaMinuscula.includes("hablar con ustedes")
) {

    respuestaIA.textContent =
        "👤 Claro. Puedo ayudarte a comunicarte con un asesor de JANVART.";

    agregarBotonAsesorJanvart(respuestaIA);

        // =====================================
        // PREGUNTA NO RECONOCIDA
        // =====================================

        } else {

            respuestaIA.textContent =
                "🎨 No tengo suficiente información para responderte con seguridad. Si quieres, puedes solicitar hablar con un asesor de JANVART.";

        }


        // Mostrar respuesta
        mensajesJanvart.appendChild(
            respuestaIA
        );

        mensajesJanvart.scrollTop =
            mensajesJanvart.scrollHeight;

    }, 500);

}

// =========================================
// MOSTRAR OPCIONES DE ASESOR
// =========================================

function mostrarOpcionesAsesorJanvart() {

const opcionesExistentes =
    document.getElementById("opcionesAsesorActivas");

if (opcionesExistentes) {
    opcionesExistentes.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

    return;
}
    const respuestaAsesor =
        document.createElement("div");

    respuestaAsesor.classList.add("mensaje-ia");
    respuestaAsesor.id =
    "opcionesAsesorActivas";

    respuestaAsesor.textContent =
        "👤 Claro. Elige cómo deseas comunicarte con un asesor de JANVART:";


    const opcionesAsesor =
        document.createElement("div");

    opcionesAsesor.classList.add("opciones-asesor");


    // BOTÓN WHATSAPP
    const botonWhatsApp =
        document.createElement("button");

    botonWhatsApp.type = "button";

    botonWhatsApp.classList.add(
        "boton-whatsapp-asesor"
    );

    botonWhatsApp.textContent =
        "💬 WhatsApp";


    // BOTÓN CORREO
    const botonCorreo =
        document.createElement("button");

    botonCorreo.type = "button";

    botonCorreo.classList.add(
        "boton-correo-asesor"
    );

    botonCorreo.textContent =
        "✉️ Correo";


    opcionesAsesor.appendChild(
        botonWhatsApp
    );

    opcionesAsesor.appendChild(
        botonCorreo
    );

    respuestaAsesor.appendChild(
        opcionesAsesor
    );

    mensajesJanvart.appendChild(
        respuestaAsesor
    );


    // WHATSAPP
    botonWhatsApp.addEventListener(
        "click",
        function() {

            const mensajeWhatsApp =
                "Hola, vengo desde JANVART IA y me gustaría recibir atención de un asesor.";

            const enlaceWhatsApp =
                "https://wa.me/573228527364?text=" +
                encodeURIComponent(
                    mensajeWhatsApp
                );

            window.open(
                enlaceWhatsApp,
                "_blank"
            );

        }
    );


    // CORREO
    botonCorreo.addEventListener(
        "click",
        function() {

            const asunto =
                "Solicitud de atención - JANVART IA";

            const mensajeCorreo =
                "Hola, vengo desde JANVART IA y me gustaría recibir atención de un asesor.";

            const enlaceCorreo =
                "https://mail.google.com/mail/?view=cm&fs=1" +
                "&to=" +
                encodeURIComponent(
                    "Janvart09@gmail.com"
                ) +
                "&su=" +
                encodeURIComponent(
                    asunto
                ) +
                "&body=" +
                encodeURIComponent(
                    mensajeCorreo
                );

            window.open(
                enlaceCorreo,
                "_blank"
            );

        }
    );


    mensajesJanvart.scrollTop =
        mensajesJanvart.scrollHeight;

}


// =========================================
// CREAR BOTÓN PARA HABLAR CON UN ASESOR
// =========================================

function agregarBotonAsesorJanvart(respuesta) {

    const botonHablarAsesor =
        document.createElement("button");

    botonHablarAsesor.type = "button";

    botonHablarAsesor.classList.add(
        "opcion-rapida-ia"
    );

    botonHablarAsesor.textContent =
        "👤 Hablar con un asesor";

    botonHablarAsesor.addEventListener(
        "click",
        mostrarOpcionesAsesorJanvart
    );

    respuesta.appendChild(
        botonHablarAsesor
    );

}

// =========================================
// BOTÓN ENVIAR
// =========================================

botonEnviarJanvart.addEventListener(
    "click",
    enviarMensajeJanvart
);


// =========================================
// ENVIAR CON ENTER
// =========================================

campoPreguntaJanvart.addEventListener(
    "keydown",
    function(evento) {

        if (evento.key === "Enter") {
            enviarMensajeJanvart();
        }

    }
);
// =========================================
// OPCIONES RÁPIDAS DE JANVART IA
// =========================================

const opcionesRapidasJanvart =
    document.querySelectorAll(".opcion-rapida-ia");

opcionesRapidasJanvart.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const pregunta =
            boton.dataset.pregunta;

        campoPreguntaJanvart.value =
            pregunta;

        enviarMensajeJanvart();

    });

});