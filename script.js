/* ===== Granel & Origen — catálogo + interacciones ===== */

const PRODUCTS = [
  // Maní confitado y confitados dulces
  { n:"Almendra confitada", c:"confitados", e:"🌰" },
  { n:"Castaña de cajú confitada", c:"confitados", e:"🌰" },
  { n:"Almendra de color", c:"confitados", e:"🎨" },
  { n:"Maní sabor arándano", c:"confitados", e:"🔵" },
  { n:"Maní sabor capuchino", c:"confitados", e:"☕" },
  { n:"Maní sabor cereza", c:"confitados", e:"🍒" },
  { n:"Maní sabor chirimoya", c:"confitados", e:"🍈" },
  { n:"Maní sabor chocolate", c:"confitados", e:"🍫" },
  { n:"Maní sabor coco", c:"confitados", e:"🥥" },
  { n:"Maní sabor durazno", c:"confitados", e:"🍑" },
  { n:"Maní sabor frambuesa", c:"confitados", e:"🍓" },
  { n:"Maní sabor frutilla", c:"confitados", e:"🍓" },
  { n:"Maní sabor frutos del bosque", c:"confitados", e:"🍇" },
  { n:"Maní sabor guinda", c:"confitados", e:"🍒" },
  { n:"Maní sabor leche condensada", c:"confitados", e:"🥛" },
  { n:"Maní sabor limón", c:"confitados", e:"🍋" },
  { n:"Maní sabor mango", c:"confitados", e:"🥭" },
  { n:"Maní sabor manzana", c:"confitados", e:"🍎" },
  { n:"Maní sabor maracuyá", c:"confitados", e:"🍈" },
  { n:"Maní sabor menta", c:"confitados", e:"🌿" },
  { n:"Maní sabor mix", c:"confitados", e:"🎉" },
  { n:"Maní sabor mora", c:"confitados", e:"🟣" },
  { n:"Maní sabor naranja", c:"confitados", e:"🍊" },
  { n:"Maní sabor piña", c:"confitados", e:"🍍" },
  { n:"Maní sabor pisco sour", c:"confitados", e:"🍸" },
  { n:"Maní sabor pistacho", c:"confitados", e:"🥜" },
  { n:"Maní rojo natural", c:"confitados", e:"🔴" },
  { n:"Maní rojo sésamo", c:"confitados", e:"🔴" },
  { n:"Maní sabor ron", c:"confitados", e:"🥃" },
  { n:"Maní sabor sandía", c:"confitados", e:"🍉" },
  { n:"Maní sabor sésamo", c:"confitados", e:"⚪" },
  { n:"Maní sabor tres leches", c:"confitados", e:"🥛" },
  { n:"Maní sabor tuti fruti", c:"confitados", e:"🍬" },
  { n:"Maní sabor vainilla", c:"confitados", e:"🍦" },
  { n:"Maní sabor whisky", c:"confitados", e:"🥃" },

  // Frutos secos
  { n:"Almendra", c:"frutos-secos", e:"🌰" },
  { n:"Avellana europea tostada", c:"frutos-secos", e:"🌰" },
  { n:"Castaña salada", c:"frutos-secos", e:"🌰" },
  { n:"Castaña sin sal", c:"frutos-secos", e:"🌰" },
  { n:"Maní con cáscara", c:"frutos-secos", e:"🥜" },
  { n:"Maní con merkén", c:"frutos-secos", e:"🌶️" },
  { n:"Maní salado", c:"frutos-secos", e:"🥜" },
  { n:"Pistacho salado", c:"frutos-secos", e:"🥜" },
  { n:"Pistacho sin sal", c:"frutos-secos", e:"🥜" },
  { n:"Garbanzo tostado", c:"frutos-secos", e:"🟤" },

  // Frutas deshidratadas
  { n:"Cranberry", c:"frutas", e:"🔴" },
  { n:"Flor de Jamaica", c:"frutas", e:"🌺" },
  { n:"Frutilla deshidratada", c:"frutas", e:"🍓" },
  { n:"Jengibre en cubo", c:"frutas", e:"🟡" },
  { n:"Kiwi", c:"frutas", e:"🥝" },
  { n:"Mango bajo en azúcar", c:"frutas", e:"🥭" },
  { n:"Mango lonja", c:"frutas", e:"🥭" },
  { n:"Mango candy cubo 2×2", c:"frutas", e:"🥭" },
  { n:"Manzana cubo", c:"frutas", e:"🍎" },
  { n:"Papaya cubo mix", c:"frutas", e:"🟠" },
  { n:"Papaya strip mix color", c:"frutas", e:"🟠" },
  { n:"Papaya strip naranja", c:"frutas", e:"🟠" },
  { n:"Piña baja en azúcar", c:"frutas", e:"🍍" },
  { n:"Piña en cubo", c:"frutas", e:"🍍" },
  { n:"Piña en rodajas", c:"frutas", e:"🍍" },
  { n:"Pomelo", c:"frutas", e:"🍊" },
  { n:"Ciruela sin carozo", c:"frutas", e:"🟣" },
  { n:"Damasco turco", c:"frutas", e:"🍑" },
  { n:"Goji", c:"frutas", e:"🔴" },
  { n:"Huesillo grande", c:"frutas", e:"🍑" },
  { n:"Banana chip", c:"frutas", e:"🍌" },
  { n:"Hibiscus", c:"frutas", e:"🌺" },

  // Semillas, cereales y granos
  { n:"Chía", c:"semillas", e:"⚫" },
  { n:"Linaza", c:"semillas", e:"🟤" },
  { n:"Linaza argentina", c:"semillas", e:"🟤" },
  { n:"Sésamo blanco", c:"semillas", e:"⚪" },
  { n:"Sésamo negro", c:"semillas", e:"⚫" },
  { n:"Sésamo tostado", c:"semillas", e:"🟤" },
  { n:"Semilla de maravilla", c:"semillas", e:"🌻" },
  { n:"Quínoa blanca", c:"semillas", e:"🌾" },
  { n:"Quínoa negra", c:"semillas", e:"🌾" },
  { n:"Quínoa tricolor", c:"semillas", e:"🌾" },
  { n:"Quínoa inflada dulce", c:"semillas", e:"🌾" },
  { n:"Quínoa inflada natural", c:"semillas", e:"🌾" },
  { n:"Avena entera", c:"semillas", e:"🌾" },
  { n:"Avena granola", c:"semillas", e:"🥣" },
  { n:"Avena instantánea", c:"semillas", e:"🥣" },
  { n:"Poroto negro", c:"semillas", e:"🟤" },
  { n:"Maíz Curagua", c:"semillas", e:"🌽" },

  // Snacks salados
  { n:"Habas fritas saladas", c:"snacks", e:"🟤" },
  { n:"Japonés Crokissimo cebolla", c:"snacks", e:"🧅" },
  { n:"Japonés Crokissimo natural", c:"snacks", e:"🥜" },
  { n:"Maíz frito barbecue", c:"snacks", e:"🌽" },
  { n:"Maíz frito chili", c:"snacks", e:"🌶️" },
  { n:"Maíz frito mostaza miel", c:"snacks", e:"🍯" },
  { n:"Maíz frito salado", c:"snacks", e:"🌽" },
  { n:"Maíz gigante sal", c:"snacks", e:"🌽" },
  { n:"Cono de maíz", c:"snacks", e:"🌽" },
  { n:"Guaquitas", c:"snacks", e:"🍿" },
  { n:"Chubi", c:"snacks", e:"🍿" },

  // Golosinas y confites
  { n:"Barra de coco con chocolate", c:"golosinas", e:"🍫" },
  { n:"Crocante de castaña", c:"golosinas", e:"🍬" },
  { n:"Crocante de maní", c:"golosinas", e:"🍬" },
  { n:"Crocante de zapallo", c:"golosinas", e:"🎃" },
  { n:"Crocante mix", c:"golosinas", e:"🍬" },
  { n:"Fondant de leche", c:"golosinas", e:"🥛" },
  { n:"Fondant de leche y chocolate", c:"golosinas", e:"🍫" },
  { n:"Fondant de leche y coco", c:"golosinas", e:"🥥" },
  { n:"Gomita de mango centro líquido", c:"golosinas", e:"🍬" },
  { n:"Gomita pelable", c:"golosinas", e:"🍬" },
  { n:"Gomitas eucalipto", c:"golosinas", e:"🌿" },
  { n:"Gomones de fruta", c:"golosinas", e:"🍬" },
  { n:"MalvaCoco", c:"golosinas", e:"🥥" },
  { n:"Merenguitos", c:"golosinas", e:"🍥" },
  { n:"Pé de Moca con chocolate", c:"golosinas", e:"🍫" },

  // Despensa natural
  { n:"Cacao amargo", c:"despensa", e:"🍫" },
  { n:"Cacao Oriente natural", c:"despensa", e:"🍫" },
  { n:"Coco laminado", c:"despensa", e:"🥥" },
  { n:"Coco rallado fino", c:"despensa", e:"🥥" },
  { n:"Coco rallado grueso", c:"despensa", e:"🥥" },
  { n:"Aceite de almendras", c:"despensa", e:"🧴" },
  { n:"Aceite de coco", c:"despensa", e:"🧴" },
  { n:"Aceite de coco sin sabor", c:"despensa", e:"🧴" },
  { n:"Aceite de nuez", c:"despensa", e:"🧴" },
  { n:"Té Ceylán", c:"despensa", e:"🍵" },
  { n:"Té verde", c:"despensa", e:"🍵" },
  { n:"Bicarbonato", c:"despensa", e:"🧂" },
  { n:"Maicena", c:"despensa", e:"🌽" },
];

const CATEGORIES = [
  { id:"todos",        label:"Todos" },
  { id:"confitados",   label:"Maní & confitados" },
  { id:"frutos-secos", label:"Frutos secos" },
  { id:"frutas",       label:"Frutas deshidratadas" },
  { id:"semillas",     label:"Semillas & cereales" },
  { id:"snacks",       label:"Snacks salados" },
  { id:"golosinas",    label:"Golosinas & confites" },
  { id:"despensa",     label:"Despensa natural" },
];

const CAT_LABEL = Object.fromEntries(CATEGORIES.map(c => [c.id, c.label]));

const grid    = document.getElementById("productGrid");
const empty   = document.getElementById("productEmpty");
const filters = document.getElementById("filters");
const search  = document.getElementById("search");

let activeCat = "todos";

// Normaliza (sin acentos, minúsculas) para búsqueda
const norm = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function countFor(id){
  return id === "todos" ? PRODUCTS.length : PRODUCTS.filter(p => p.c === id).length;
}

function renderFilters(){
  filters.innerHTML = CATEGORIES.map(c => `
    <button class="filter${c.id === activeCat ? " is-active" : ""}" data-cat="${c.id}">
      ${c.label}<span class="filter__count">${countFor(c.id)}</span>
    </button>`).join("");
}

function renderProducts(){
  const q = norm(search.value.trim());
  const list = PRODUCTS.filter(p => {
    const okCat = activeCat === "todos" || p.c === activeCat;
    const okSearch = !q || norm(p.n).includes(q);
    return okCat && okSearch;
  });

  empty.hidden = list.length !== 0;
  grid.innerHTML = list.map(p => `
    <article class="p-card">
      <span class="p-card__emoji">${p.e}</span>
      <span class="p-card__body">
        <span class="p-card__name">${p.n}</span>
        <span class="p-card__cat">${CAT_LABEL[p.c]}</span>
      </span>
    </article>`).join("");
}

filters.addEventListener("click", e => {
  const btn = e.target.closest(".filter");
  if(!btn) return;
  activeCat = btn.dataset.cat;
  renderFilters();
  renderProducts();
});

search.addEventListener("input", renderProducts);

renderFilters();
renderProducts();

/* ===== Menú móvil ===== */
const toggle = document.getElementById("navToggle");
const links  = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("is-open"));
links.addEventListener("click", e => {
  if(e.target.tagName === "A") links.classList.remove("is-open");
});

/* ===== Año ===== */
document.getElementById("year").textContent = new Date().getFullYear();
