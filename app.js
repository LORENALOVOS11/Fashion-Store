let productos = JSON.parse(localStorage.getItem("productos")) || [

    // ===== MUJER =====
    { id:1,  nombre: "Jeans wide leg",            precio: 35, stock: 20, categoria: "Pantalones", genero: "Mujer"  },
    { id:2,  nombre: "Jeans baggy vintage",        precio: 38, stock: 15, categoria: "Pantalones", genero: "Mujer"  },
    { id:3,  nombre: "Legging cargo",              precio: 28, stock: 18, categoria: "Pantalones", genero: "Mujer"  },
    { id:4,  nombre: "Pantalón lino palazzo",      precio: 42, stock: 10, categoria: "Pantalones", genero: "Mujer"  },
    { id:5,  nombre: "Pantalón pinzas mujer",      precio: 40, stock: 12, categoria: "Pantalones", genero: "Mujer"  },
    { id:6,  nombre: "Pantalón cuero mujer",       precio: 55, stock: 8,  categoria: "Pantalones", genero: "Mujer"  },
    { id:7,  nombre: "Falda midi plisada",         precio: 32, stock: 12, categoria: "Faldas",     genero: "Mujer"  },
    { id:8,  nombre: "Falda mini denim",           precio: 25, stock: 14, categoria: "Faldas",     genero: "Mujer"  },
    { id:9,  nombre: "Falda larga satinada",       precio: 40, stock: 8,  categoria: "Faldas",     genero: "Mujer"  },
    { id:10, nombre: "Falda asimétrica",           precio: 35, stock: 9,  categoria: "Faldas",     genero: "Mujer"  },
    { id:11, nombre: "Falda cargo",                precio: 38, stock: 10, categoria: "Faldas",     genero: "Mujer"  },
    { id:12, nombre: "Falda lápiz",                precio: 30, stock: 11, categoria: "Faldas",     genero: "Mujer"  },
    { id:13, nombre: "Short denim frayed",         precio: 22, stock: 16, categoria: "Shorts",     genero: "Mujer"  },
    { id:14, nombre: "Short ciclista",             precio: 20, stock: 18, categoria: "Shorts",     genero: "Mujer"  },
    { id:15, nombre: "Short lino mujer",           precio: 24, stock: 14, categoria: "Shorts",     genero: "Mujer"  },
    { id:16, nombre: "Short satinado",             precio: 26, stock: 12, categoria: "Shorts",     genero: "Mujer"  },
    { id:17, nombre: "Crop top canalé",            precio: 18, stock: 22, categoria: "Camisetas",  genero: "Mujer"  },
    { id:18, nombre: "Blusa off-shoulder",         precio: 25, stock: 15, categoria: "Camisetas",  genero: "Mujer"  },
    { id:19, nombre: "Camiseta oversized mujer",   precio: 20, stock: 20, categoria: "Camisetas",  genero: "Mujer"  },
    { id:20, nombre: "Top corset",                 precio: 30, stock: 12, categoria: "Camisetas",  genero: "Mujer"  },
    { id:21, nombre: "Blusa crochet",              precio: 28, stock: 10, categoria: "Camisetas",  genero: "Mujer"  },
    { id:22, nombre: "Blusa manga globo",          precio: 32, stock: 9,  categoria: "Camisetas",  genero: "Mujer"  },
    { id:23, nombre: "Camisa oversize mujer",      precio: 30, stock: 14, categoria: "Camisetas",  genero: "Mujer"  },
    { id:24, nombre: "Top bandeau",                precio: 18, stock: 16, categoria: "Camisetas",  genero: "Mujer"  },
    { id:25, nombre: "Vestido lencero slip",       precio: 45, stock: 8,  categoria: "Vestidos",   genero: "Mujer"  },
    { id:26, nombre: "Vestido midi floral",        precio: 50, stock: 7,  categoria: "Vestidos",   genero: "Mujer"  },
    { id:27, nombre: "Vestido camisero",           precio: 42, stock: 9,  categoria: "Vestidos",   genero: "Mujer"  },
    { id:28, nombre: "Vestido cut-out",            precio: 55, stock: 6,  categoria: "Vestidos",   genero: "Mujer"  },
    { id:29, nombre: "Vestido maxi boho",          precio: 60, stock: 5,  categoria: "Vestidos",   genero: "Mujer"  },
    { id:30, nombre: "Vestido mini fiesta",        precio: 65, stock: 6,  categoria: "Vestidos",   genero: "Mujer"  },
    { id:31, nombre: "Vestido wrap",               precio: 48, stock: 8,  categoria: "Vestidos",   genero: "Mujer"  },
    { id:32, nombre: "Vestido recto elegante",     precio: 70, stock: 5,  categoria: "Vestidos",   genero: "Mujer"  },
    { id:33, nombre: "Blazer oversize mujer",      precio: 65, stock: 8,  categoria: "Chaquetas",  genero: "Mujer"  },
    { id:34, nombre: "Chaqueta bomber mujer",      precio: 70, stock: 6,  categoria: "Chaquetas",  genero: "Mujer"  },
    { id:35, nombre: "Cardigan largo",             precio: 48, stock: 10, categoria: "Chaquetas",  genero: "Mujer"  },
    { id:36, nombre: "Trench coat mujer",          precio: 85, stock: 5,  categoria: "Chaquetas",  genero: "Mujer"  },
    { id:37, nombre: "Chaqueta cuero mujer",       precio: 90, stock: 4,  categoria: "Chaquetas",  genero: "Mujer"  },
    { id:38, nombre: "Hoodie crop mujer",          precio: 40, stock: 12, categoria: "Chaquetas",  genero: "Mujer"  },
    { id:39, nombre: "Tacones kitten heel",        precio: 55, stock: 8,  categoria: "Calzado",    genero: "Mujer"  },
    { id:40, nombre: "Botas cowboy mujer",         precio: 80, stock: 6,  categoria: "Calzado",    genero: "Mujer"  },
    { id:41, nombre: "Sneakers chunky mujer",      precio: 65, stock: 10, categoria: "Calzado",    genero: "Mujer"  },
    { id:42, nombre: "Sandalias strappy",          precio: 38, stock: 12, categoria: "Calzado",    genero: "Mujer"  },
    { id:43, nombre: "Botas altas mujer",          precio: 85, stock: 5,  categoria: "Calzado",    genero: "Mujer"  },
    { id:44, nombre: "Mocasines mujer",            precio: 50, stock: 9,  categoria: "Calzado",    genero: "Mujer"  },
    { id:45, nombre: "Bailarinas mujer",           precio: 35, stock: 14, categoria: "Calzado",    genero: "Mujer"  },
    { id:46, nombre: "Bolso micro bag",            precio: 40, stock: 10, categoria: "Accesorios", genero: "Mujer"  },
    { id:47, nombre: "Bolso tote canvas",          precio: 35, stock: 14, categoria: "Accesorios", genero: "Mujer"  },
    { id:48, nombre: "Gafas cat eye",              precio: 22, stock: 18, categoria: "Accesorios", genero: "Mujer"  },
    { id:49, nombre: "Cinturón trenzado",          precio: 18, stock: 15, categoria: "Accesorios", genero: "Mujer"  },
    { id:50, nombre: "Bolso bandolera mujer",      precio: 45, stock: 10, categoria: "Accesorios", genero: "Mujer"  },
    { id:51, nombre: "Sombrero de paja",           precio: 20, stock: 16, categoria: "Accesorios", genero: "Mujer"  },
    { id:52, nombre: "Bufanda seda",               precio: 25, stock: 12, categoria: "Accesorios", genero: "Mujer"  },

    // ===== HOMBRE =====
    { id:53, nombre: "Jeans straight leg",         precio: 38, stock: 18, categoria: "Pantalones", genero: "Hombre" },
    { id:54, nombre: "Jeans baggy hombre",         precio: 40, stock: 14, categoria: "Pantalones", genero: "Hombre" },
    { id:55, nombre: "Pantalón cargo hombre",      precio: 45, stock: 12, categoria: "Pantalones", genero: "Hombre" },
    { id:56, nombre: "Pantalón chino slim",        precio: 42, stock: 10, categoria: "Pantalones", genero: "Hombre" },
    { id:57, nombre: "Pantalón traje hombre",      precio: 60, stock: 7,  categoria: "Pantalones", genero: "Hombre" },
    { id:58, nombre: "Pantalón lino hombre",       precio: 40, stock: 11, categoria: "Pantalones", genero: "Hombre" },
    { id:59, nombre: "Pantalón jogger hombre",     precio: 35, stock: 15, categoria: "Pantalones", genero: "Hombre" },
    { id:60, nombre: "Jeans skinny hombre",        precio: 38, stock: 13, categoria: "Pantalones", genero: "Hombre" },
    { id:61, nombre: "Short cargo hombre",         precio: 28, stock: 16, categoria: "Shorts",     genero: "Hombre" },
    { id:62, nombre: "Short deportivo 2en1",       precio: 22, stock: 20, categoria: "Shorts",     genero: "Hombre" },
    { id:63, nombre: "Short lino hombre",          precio: 26, stock: 14, categoria: "Shorts",     genero: "Hombre" },
    { id:64, nombre: "Short denim hombre",         precio: 24, stock: 16, categoria: "Shorts",     genero: "Hombre" },
    { id:65, nombre: "Camiseta gráfica",           precio: 20, stock: 25, categoria: "Camisetas",  genero: "Hombre" },
    { id:66, nombre: "Polo slim fit",              precio: 28, stock: 18, categoria: "Camisetas",  genero: "Hombre" },
    { id:67, nombre: "Camiseta oversized hombre",  precio: 22, stock: 20, categoria: "Camisetas",  genero: "Hombre" },
    { id:68, nombre: "Camisa lino hombre",         precio: 35, stock: 12, categoria: "Camisetas",  genero: "Hombre" },
    { id:69, nombre: "Camisa flanela",             precio: 30, stock: 14, categoria: "Camisetas",  genero: "Hombre" },
    { id:70, nombre: "Camisa hawaiana",            precio: 28, stock: 15, categoria: "Camisetas",  genero: "Hombre" },
    { id:71, nombre: "Camiseta básica pack x3",    precio: 25, stock: 20, categoria: "Camisetas",  genero: "Hombre" },
    { id:72, nombre: "Camisa cuadros hombre",      precio: 32, stock: 12, categoria: "Camisetas",  genero: "Hombre" },
    { id:73, nombre: "Camisa formal blanca",       precio: 38, stock: 10, categoria: "Camisetas",  genero: "Hombre" },
    { id:74, nombre: "Camiseta polo manga larga",  precio: 30, stock: 14, categoria: "Camisetas",  genero: "Hombre" },
    { id:75, nombre: "Blazer hombre",              precio: 75, stock: 6,  categoria: "Chaquetas",  genero: "Hombre" },
    { id:76, nombre: "Bomber hombre",              precio: 68, stock: 8,  categoria: "Chaquetas",  genero: "Hombre" },
    { id:77, nombre: "Hoodie premium",             precio: 45, stock: 15, categoria: "Chaquetas",  genero: "Hombre" },
    { id:78, nombre: "Chaqueta denim hombre",      precio: 60, stock: 9,  categoria: "Chaquetas",  genero: "Hombre" },
    { id:79, nombre: "Chaqueta cuero hombre",      precio: 95, stock: 4,  categoria: "Chaquetas",  genero: "Hombre" },
    { id:80, nombre: "Trench coat hombre",         precio: 88, stock: 5,  categoria: "Chaquetas",  genero: "Hombre" },
    { id:81, nombre: "Chaqueta cortaviento",       precio: 55, stock: 10, categoria: "Chaquetas",  genero: "Hombre" },
    { id:82, nombre: "Chaleco sastre hombre",      precio: 48, stock: 8,  categoria: "Chaquetas",  genero: "Hombre" },
    { id:83, nombre: "Sneakers retro hombre",      precio: 70, stock: 10, categoria: "Calzado",    genero: "Hombre" },
    { id:84, nombre: "Botas Chelsea hombre",       precio: 85, stock: 7,  categoria: "Calzado",    genero: "Hombre" },
    { id:85, nombre: "Mocasines hombre",           precio: 60, stock: 8,  categoria: "Calzado",    genero: "Hombre" },
    { id:86, nombre: "Zapatos derby hombre",       precio: 75, stock: 6,  categoria: "Calzado",    genero: "Hombre" },
    { id:87, nombre: "Sandalias hombre",           precio: 30, stock: 14, categoria: "Calzado",    genero: "Hombre" },
    { id:88, nombre: "Tenis running hombre",       precio: 65, stock: 10, categoria: "Calzado",    genero: "Hombre" },
    { id:89, nombre: "Gorra snapback",             precio: 20, stock: 22, categoria: "Accesorios", genero: "Hombre" },
    { id:90, nombre: "Cinturón cuero hombre",      precio: 25, stock: 16, categoria: "Accesorios", genero: "Hombre" },
    { id:91, nombre: "Mochila streetwear",         precio: 55, stock: 10, categoria: "Accesorios", genero: "Hombre" },
    { id:92, nombre: "Billetera slim",             precio: 20, stock: 18, categoria: "Accesorios", genero: "Hombre" },
    { id:93, nombre: "Gafas aviador hombre",       precio: 25, stock: 15, categoria: "Accesorios", genero: "Hombre" },
    { id:94, nombre: "Reloj casual hombre",        precio: 45, stock: 8,  categoria: "Accesorios", genero: "Hombre" },

    // ===== NIÑA =====
    { id:95,  nombre: "Vestido tutu niña",          precio: 28, stock: 12, categoria: "Vestidos",   genero: "Niña"   },
    { id:96,  nombre: "Vestido casual niña",        precio: 22, stock: 15, categoria: "Vestidos",   genero: "Niña"   },
    { id:97,  nombre: "Vestido princesa niña",      precio: 35, stock: 8,  categoria: "Vestidos",   genero: "Niña"   },
    { id:98,  nombre: "Vestido verano niña",        precio: 24, stock: 12, categoria: "Vestidos",   genero: "Niña"   },
    { id:99,  nombre: "Falda con vuelo niña",       precio: 18, stock: 14, categoria: "Faldas",     genero: "Niña"   },
    { id:100, nombre: "Falda escocesa niña",        precio: 20, stock: 12, categoria: "Faldas",     genero: "Niña"   },
    { id:101, nombre: "Leggins estampados niña",    precio: 14, stock: 20, categoria: "Pantalones", genero: "Niña"   },
    { id:102, nombre: "Jeans niña",                 precio: 20, stock: 16, categoria: "Pantalones", genero: "Niña"   },
    { id:103, nombre: "Pantalón cargo niña",        precio: 22, stock: 12, categoria: "Pantalones", genero: "Niña"   },
    { id:104, nombre: "Jogger niña",                precio: 18, stock: 15, categoria: "Pantalones", genero: "Niña"   },
    { id:105, nombre: "Camiseta unicornio niña",    precio: 14, stock: 18, categoria: "Camisetas",  genero: "Niña"   },
    { id:106, nombre: "Blusa con lazo niña",        precio: 16, stock: 15, categoria: "Camisetas",  genero: "Niña"   },
    { id:107, nombre: "Camiseta tie-dye niña",      precio: 15, stock: 16, categoria: "Camisetas",  genero: "Niña"   },
    { id:108, nombre: "Top flores niña",            precio: 14, stock: 18, categoria: "Camisetas",  genero: "Niña"   },
    { id:109, nombre: "Short floral niña",          precio: 14, stock: 16, categoria: "Shorts",     genero: "Niña"   },
    { id:110, nombre: "Short denim niña",           precio: 16, stock: 14, categoria: "Shorts",     genero: "Niña"   },
    { id:111, nombre: "Sudadera con orejas niña",   precio: 28, stock: 10, categoria: "Chaquetas",  genero: "Niña"   },
    { id:112, nombre: "Chaqueta acolchada niña",    precio: 32, stock: 8,  categoria: "Chaquetas",  genero: "Niña"   },
    { id:113, nombre: "Cardigan niña",              precio: 24, stock: 12, categoria: "Chaquetas",  genero: "Niña"   },
    { id:114, nombre: "Zapatillas brillantes niña", precio: 30, stock: 12, categoria: "Calzado",    genero: "Niña"   },
    { id:115, nombre: "Sandalias niña",             precio: 22, stock: 14, categoria: "Calzado",    genero: "Niña"   },
    { id:116, nombre: "Botas niña",                 precio: 35, stock: 8,  categoria: "Calzado",    genero: "Niña"   },
    { id:117, nombre: "Tenis niña",                 precio: 28, stock: 12, categoria: "Calzado",    genero: "Niña"   },
    { id:118, nombre: "Diadema flores niña",        precio: 8,  stock: 25, categoria: "Accesorios", genero: "Niña"   },
    { id:119, nombre: "Mochila mariposa niña",      precio: 25, stock: 10, categoria: "Accesorios", genero: "Niña"   },
    { id:120, nombre: "Bolso mini niña",            precio: 15, stock: 14, categoria: "Accesorios", genero: "Niña"   },

    // ===== NIÑO =====
    { id:121, nombre: "Jeans niño",                 precio: 20, stock: 16, categoria: "Pantalones", genero: "Niño"   },
    { id:122, nombre: "Jogger niño",                precio: 18, stock: 18, categoria: "Pantalones", genero: "Niño"   },
    { id:123, nombre: "Pantalón cargo niño",        precio: 22, stock: 14, categoria: "Pantalones", genero: "Niño"   },
    { id:124, nombre: "Pantalón chino niño",        precio: 20, stock: 12, categoria: "Pantalones", genero: "Niño"   },
    { id:125, nombre: "Short cargo niño",           precio: 16, stock: 15, categoria: "Shorts",     genero: "Niño"   },
    { id:126, nombre: "Short deportivo niño",       precio: 14, stock: 18, categoria: "Shorts",     genero: "Niño"   },
    { id:127, nombre: "Short denim niño",           precio: 16, stock: 14, categoria: "Shorts",     genero: "Niño"   },
    { id:128, nombre: "Camiseta dinosaurio niño",   precio: 12, stock: 20, categoria: "Camisetas",  genero: "Niño"   },
    { id:129, nombre: "Camiseta superhéroe niño",   precio: 14, stock: 18, categoria: "Camisetas",  genero: "Niño"   },
    { id:130, nombre: "Camisa cuadros niño",        precio: 18, stock: 12, categoria: "Camisetas",  genero: "Niño"   },
    { id:131, nombre: "Polo niño",                  precio: 16, stock: 15, categoria: "Camisetas",  genero: "Niño"   },
    { id:132, nombre: "Camiseta gráfica niño",      precio: 13, stock: 20, categoria: "Camisetas",  genero: "Niño"   },
    { id:133, nombre: "Camisa formal niño",         precio: 20, stock: 10, categoria: "Camisetas",  genero: "Niño"   },
    { id:134, nombre: "Hoodie niño",                precio: 28, stock: 12, categoria: "Chaquetas",  genero: "Niño"   },
    { id:135, nombre: "Chaqueta impermeable niño",  precio: 35, stock: 8,  categoria: "Chaquetas",  genero: "Niño"   },
    { id:136, nombre: "Bomber niño",                precio: 32, stock: 9,  categoria: "Chaquetas",  genero: "Niño"   },
    { id:137, nombre: "Chaleco acolchado niño",     precio: 28, stock: 10, categoria: "Chaquetas",  genero: "Niño"   },
    { id:138, nombre: "Tenis niño",                 precio: 32, stock: 14, categoria: "Calzado",    genero: "Niño"   },
    { id:139, nombre: "Sandalia niño",              precio: 20, stock: 16, categoria: "Calzado",    genero: "Niño"   },
    { id:140, nombre: "Botas niño",                 precio: 35, stock: 8,  categoria: "Calzado",    genero: "Niño"   },
    { id:141, nombre: "Zapato formal niño",         precio: 30, stock: 10, categoria: "Calzado",    genero: "Niño"   },
    { id:142, nombre: "Gorra niño",                 precio: 12, stock: 22, categoria: "Accesorios", genero: "Niño"   },
    { id:143, nombre: "Mochila niño",               precio: 28, stock: 10, categoria: "Accesorios", genero: "Niño"   },
    { id:144, nombre: "Cinturón niño",              precio: 10, stock: 18, categoria: "Accesorios", genero: "Niño"   },
    { id:145, nombre: "Gafas de sol niño",          precio: 12, stock: 16, categoria: "Accesorios", genero: "Niño"   }
];

let carrito    = JSON.parse(localStorage.getItem("carrito")) || [];
let editandoId = null;

const iconosCat = {
    "Camisetas":"👕","Pantalones":"👖","Faldas":"👗","Shorts":"🩳",
    "Vestidos":"👗","Chaquetas":"🧥","Accesorios":"👜","Calzado":"👠"
};

function guardarProductos(){ localStorage.setItem("productos", JSON.stringify(productos)); }
function guardarCarrito()  { localStorage.setItem("carrito",   JSON.stringify(carrito));   }

function login() {
    const u = document.getElementById("inputUsuario").value.trim();
    const p = document.getElementById("inputPassword").value.trim();
    if (u === "admin" && p === "1234") {
        localStorage.setItem("sesion","activa");
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("appScreen").style.display  = "flex";
        renderDashboard(); renderTabla(); renderCatalogo(); renderCarritoVentas();
    } else {
        document.getElementById("loginError").textContent = "❌ Usuario o contraseña incorrectos";
    }
}

function cerrarSesion() {
    localStorage.removeItem("sesion");
    document.getElementById("appScreen").style.display   = "none";
    document.getElementById("loginScreen").style.display = "flex";
    document.getElementById("inputUsuario").value  = "";
    document.getElementById("inputPassword").value = "";
    document.getElementById("loginError").textContent = "";
}

window.onload = function () {
    if (localStorage.getItem("sesion") === "activa") {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("appScreen").style.display  = "flex";
        renderDashboard(); renderTabla(); renderCatalogo(); renderCarritoVentas();
    }
};

function mostrarSeccion(id, el) {
    ["dashboard","productos","ventas"].forEach(s => {
        document.getElementById("sec-" + s).style.display = "none";
    });
    document.getElementById("sec-" + id).style.display = "block";
    document.getElementById("tituloSeccion").textContent =
        id.charAt(0).toUpperCase() + id.slice(1);
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    if (el) el.classList.add("active");
    if (id === "dashboard") renderDashboard();
    if (id === "productos")  renderTabla();
    if (id === "ventas")    { renderCatalogo(); renderCarritoVentas(); }
}

function renderDashboard() {
    const stockBajo  = productos.filter(p => p.stock > 0 && p.stock <= 5).length;
    const valorTotal = productos.reduce((s, p) => s + p.precio * p.stock, 0);
    document.getElementById("statTotal").textContent   = productos.length;
    document.getElementById("statCarrito").textContent = carrito.length;
    document.getElementById("statValor").textContent   = "$" + valorTotal;
    document.getElementById("statBajo").textContent    = stockBajo;
    document.getElementById("dashProductos").innerHTML = productos.map(p => `
        <div class="dash-item">
            <div class="dash-item-icon">${iconosCat[p.categoria] || "🏷️"}</div>
            <div class="dash-item-info">
                <div class="dash-item-name">${p.nombre}</div>
                <div class="dash-item-cat">${p.categoria} · ${p.genero} · Stock: ${p.stock}</div>
            </div>
            <div class="dash-item-price">$${p.precio}</div>
        </div>`).join("");
}

function renderTabla(lista) {
    const datos = lista || productos;
    document.getElementById("tbodyProductos").innerHTML = datos.map(p => {
        let estado, clase;
        if      (p.stock === 0) { estado = "Agotado";    clase = "badge badge-out"; }
        else if (p.stock <= 5)  { estado = "Stock bajo"; clase = "badge badge-low"; }
        else                    { estado = "Disponible"; clase = "badge badge-ok";  }
        return `<tr>
            <td><strong>${p.nombre}</strong></td>
            <td>$${p.precio}</td>
            <td>${p.stock}</td>
            <td>${p.categoria}</td>
            <td><span class="${clase}">${estado}</span></td>
            <td style="display:flex;gap:6px;">
                <button class="btn-edit" onclick="editarProducto(${p.id})">✏️ Editar</button>
                <button class="btn-del"  onclick="eliminarProducto(${p.id})">🗑️ Eliminar</button>
            </td>
        </tr>`;
    }).join("");
}

function filtrarProductos() {
    const q = document.getElementById("buscador").value.toLowerCase();
    renderTabla(productos.filter(p =>
        p.nombre.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q)
    ));
}

function abrirModal() {
    editandoId = null;
    document.getElementById("modalTitulo").textContent = "Agregar Producto";
    document.getElementById("mNombre").value    = "";
    document.getElementById("mPrecio").value    = "";
    document.getElementById("mStock").value     = "";
    document.getElementById("mCategoria").value = "Camisetas";
    document.getElementById("modal").style.display = "flex";
}

function editarProducto(id) {
    const p = productos.find(x => x.id === id);
    if (!p) return;
    editandoId = id;
    document.getElementById("modalTitulo").textContent = "Editar Producto";
    document.getElementById("mNombre").value    = p.nombre;
    document.getElementById("mPrecio").value    = p.precio;
    document.getElementById("mStock").value     = p.stock;
    document.getElementById("mCategoria").value = p.categoria;
    document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

function guardarProducto() {
    const nombre    = document.getElementById("mNombre").value.trim();
    const precio    = parseFloat(document.getElementById("mPrecio").value);
    const stock     = parseInt(document.getElementById("mStock").value);
    const categoria = document.getElementById("mCategoria").value;
    if (!nombre || isNaN(precio) || isNaN(stock)) {
        alert("Por favor completa todos los campos."); return;
    }
    if (editandoId) {
        const idx = productos.findIndex(x => x.id === editandoId);
        productos[idx] = { id: editandoId, nombre, precio, stock, categoria };
    } else {
        const nuevoId = productos.length > 0 ? Math.max(...productos.map(p => p.id)) + 1 : 1;
        productos.push({ id: nuevoId, nombre, precio, stock, categoria });
    }
    guardarProductos(); cerrarModal(); renderTabla(); renderDashboard(); renderCatalogo();
}

function eliminarProducto(id) {
    if (!confirm("¿Eliminar este producto?")) return;
    productos = productos.filter(p => p.id !== id);
    guardarProductos(); renderTabla(); renderDashboard(); renderCatalogo();
}

function renderCatalogo() {
    const div = document.getElementById("catalogoVentas");
    if (!div) return;
    div.innerHTML = productos.map(p => `
        <div class="prod-card" onclick="agregarAlCarrito(${p.id})">
            <div class="prod-card-icon">${iconosCat[p.categoria] || "🏷️"}</div>
            <div class="prod-card-name">${p.nombre}</div>
            <div class="prod-card-price">$${p.precio}</div>
            <div class="prod-card-stock">Stock: ${p.stock}</div>
        </div>`).join("");
}

function agregarAlCarrito(id) {
    const p = productos.find(x => x.id === id);
    if (!p || p.stock === 0) { alert("Producto sin stock."); return; }
    carrito.push({ id: p.id, nombre: p.nombre, precio: p.precio });
    guardarCarrito(); renderCarritoVentas(); renderDashboard();
}

function quitarDelCarrito(idx) {
    carrito.splice(idx, 1);
    guardarCarrito(); renderCarritoVentas(); renderDashboard();
}

function renderCarritoVentas() {
    const lista = document.getElementById("listaCarrito");
    const badge = document.getElementById("badgeCarrito");
    if (!lista) return;
    const total = carrito.reduce((s, c) => s + c.precio, 0);
    badge.textContent = carrito.length;
    document.getElementById("totalCarrito").textContent = "$" + total;
    lista.innerHTML = carrito.length === 0
        ? `<p style="color:#bbb;font-size:13px;padding:20px 0;text-align:center;">Carrito vacío</p>`
        : carrito.map((c, i) => `
            <div class="carrito-item">
                <span>${c.nombre}</span>
                <div style="display:flex;align-items:center;gap:8px;">
                    <strong>$${c.precio}</strong>
                    <button class="btn-remove" onclick="quitarDelCarrito(${i})">✕</button>
                </div>
            </div>`).join("");
}

function procesarVenta() {
    if (carrito.length === 0) { alert("El carrito está vacío."); return; }
    carrito.forEach(item => {
        const idx = productos.findIndex(p => p.id === item.id);
        if (idx !== -1 && productos[idx].stock > 0) productos[idx].stock -= 1;
    });
    guardarProductos(); limpiarCarrito(); renderTabla(); renderCatalogo(); renderDashboard();
    alert("✅ ¡Venta procesada con éxito!");
}

function limpiarCarrito() {
    carrito = [];
    guardarCarrito(); renderCarritoVentas(); renderDashboard();
}