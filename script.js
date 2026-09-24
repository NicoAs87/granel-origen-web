/* ===== Granel & Origen — catálogo + interacciones ===== */

const P = "images/productos/";
const PRODUCTS = [
  // Maní confitado y confitados dulces
  { n:"Almendra confitada", c:"confitados", e:"🌰", img:P+"almendra-confitada.jpg" },
  { n:"Castaña de cajú confitada", c:"confitados", e:"🌰", img:P+"castana-caju-confitada.jpg" },
  { n:"Almendra de color", c:"confitados", e:"🎨", img:P+"almendra-color.jpg" },
  { n:"Maní sabor arándano", c:"confitados", e:"🔵", img:P+"mani-arandano.jpg" },
  { n:"Maní sabor capuchino", c:"confitados", e:"☕", img:P+"mani-capuchino.jpg" },
  { n:"Maní sabor cereza", c:"confitados", e:"🍒", img:P+"mani-cereza.jpg" },
  { n:"Maní sabor chirimoya", c:"confitados", e:"🍈", img:P+"mani-chirimoya.jpg" },
  { n:"Maní sabor chocolate", c:"confitados", e:"🍫", img:P+"mani-chocolate.jpg" },
  { n:"Maní sabor coco", c:"confitados", e:"🥥", img:P+"mani-coco.jpg" },
  { n:"Maní sabor durazno", c:"confitados", e:"🍑", img:P+"mani-durazno.jpg" },
  { n:"Maní sabor frambuesa", c:"confitados", e:"🍓", img:P+"mani-frambuesa.jpg" },
  { n:"Maní sabor frutilla", c:"confitados", e:"🍓", img:P+"mani-frutilla.jpg" },
  { n:"Maní sabor frutos del bosque", c:"confitados", e:"🍇", img:P+"mani-frutos-bosque.jpg" },
  { n:"Maní sabor guinda", c:"confitados", e:"🍒", img:P+"mani-guinda.jpg" },
  { n:"Maní sabor leche condensada", c:"confitados", e:"🥛", img:P+"mani-leche-condensada.jpg" },
  { n:"Maní sabor limón", c:"confitados", e:"🍋", img:P+"mani-limon.jpg" },
  { n:"Maní sabor mango", c:"confitados", e:"🥭", img:P+"mani-mango.jpg" },
  { n:"Maní sabor manzana", c:"confitados", e:"🍎", img:P+"mani-manzana.jpg" },
  { n:"Maní sabor maracuyá", c:"confitados", e:"🍈", img:P+"mani-maracuya.jpg" },
  { n:"Maní sabor menta", c:"confitados", e:"🌿", img:P+"mani-menta.jpg" },
  { n:"Maní sabor mix", c:"confitados", e:"🎉", img:P+"mani-mix.jpg" },
  { n:"Maní sabor mora", c:"confitados", e:"🟣", img:P+"mani-mora.jpg" },
  { n:"Maní sabor naranja", c:"confitados", e:"🍊", img:P+"mani-naranja.jpg" },
  { n:"Maní sabor piña", c:"confitados", e:"🍍", img:P+"mani-pina.jpg" },
  { n:"Maní sabor pisco sour", c:"confitados", e:"🍸", img:P+"mani-pisco-sour.jpg" },
  { n:"Maní sabor pistacho", c:"confitados", e:"🥜", img:P+"mani-pistacho.jpg" },
  { n:"Maní rojo natural", c:"confitados", e:"🔴", img:P+"mani-rojo-natural.jpg" },
  { n:"Maní rojo sésamo", c:"confitados", e:"🔴", img:P+"mani-rojo-sesamo.jpg" },
  { n:"Maní sabor ron", c:"confitados", e:"🥃", img:P+"mani-ron.jpg" },
  { n:"Maní sabor sandía", c:"confitados", e:"🍉", img:P+"mani-sandia.jpg" },
  { n:"Maní sabor sésamo", c:"confitados", e:"⚪", img:P+"mani-sesamo.jpg" },
  { n:"Maní sabor tres leches", c:"confitados", e:"🥛", img:P+"mani-tres-leches.jpg" },
  { n:"Maní sabor tuti fruti", c:"confitados", e:"🍬", img:P+"mani-tuti-fruti.jpg" },
  { n:"Maní sabor vainilla", c:"confitados", e:"🍦", img:P+"mani-vainilla.jpg" },
  { n:"Maní sabor whisky", c:"confitados", e:"🥃", img:P+"mani-whisky.jpg" },

  // Frutos secos
  { n:"Almendra", c:"frutos-secos", e:"🌰", img:P+"almendra.jpg" },
  { n:"Avellana europea tostada", c:"frutos-secos", e:"🌰", img:P+"avellana-tostada.jpg" },
  { n:"Castaña salada", c:"frutos-secos", e:"🌰", img:P+"castana-salada.jpg" },
  { n:"Castaña sin sal", c:"frutos-secos", e:"🌰", img:P+"castana-sin-sal.jpg" },
  { n:"Maní con cáscara", c:"frutos-secos", e:"🥜", img:P+"mani-con-cascara.jpg" },
  { n:"Maní con merkén", c:"frutos-secos", e:"🌶️", img:P+"mani-merken.jpg" },
  { n:"Maní salado", c:"frutos-secos", e:"🥜", img:P+"mani-salado.jpg" },
  { n:"Pistacho salado", c:"frutos-secos", e:"🥜", img:P+"pistacho-salado.jpg" },
  { n:"Pistacho sin sal", c:"frutos-secos", e:"🥜", img:P+"pistacho-sin-sal.jpg" },
  { n:"Garbanzo tostado", c:"frutos-secos", e:"🟤", img:P+"garbanzo-tostado.jpg" },

  // Frutas deshidratadas
  { n:"Cranberry", c:"frutas", e:"🔴", img:P+"cranberry.jpg" },
  { n:"Flor de Jamaica", c:"frutas", e:"🌺", img:P+"flor-jamaica.jpg" },
  { n:"Frutilla deshidratada", c:"frutas", e:"🍓", img:P+"frutilla-deshidratada.jpg" },
  { n:"Jengibre en cubo", c:"frutas", e:"🟡", img:P+"jengibre.jpg" },
  { n:"Kiwi", c:"frutas", e:"🥝", img:P+"kiwi.jpg" },
  { n:"Mango bajo en azúcar", c:"frutas", e:"🥭", img:P+"mango-bajo-azucar.jpg" },
  { n:"Mango lonja", c:"frutas", e:"🥭", img:P+"mango-lonja.jpg" },
  { n:"Mango candy cubo 2×2", c:"frutas", e:"🥭", img:P+"mango-candy.jpg" },
  { n:"Manzana cubo", c:"frutas", e:"🍎", img:P+"manzana-cubo.jpg" },
  { n:"Papaya cubo mix", c:"frutas", e:"🟠", img:P+"papaya-cubo-mix.jpg" },
  { n:"Papaya strip mix color", c:"frutas", e:"🟠", img:P+"papaya-strip-mix.jpg" },
  { n:"Papaya strip naranja", c:"frutas", e:"🟠", img:P+"papaya-strip-naranja.jpg" },
  { n:"Piña baja en azúcar", c:"frutas", e:"🍍", img:P+"pina-baja-azucar.jpg" },
  { n:"Piña en cubo", c:"frutas", e:"🍍", img:P+"pina-cubo.jpg" },
  { n:"Piña en rodajas", c:"frutas", e:"🍍", img:P+"pina-rodajas.jpg" },
  { n:"Pomelo", c:"frutas", e:"🍊", img:P+"pomelo.jpg" },
  { n:"Ciruela sin carozo", c:"frutas", e:"🟣", img:P+"ciruela.jpg" },
  { n:"Damasco turco", c:"frutas", e:"🍑", img:P+"damasco.jpg" },
  { n:"Goji", c:"frutas", e:"🔴", img:P+"goji.jpg" },
  { n:"Huesillo grande", c:"frutas", e:"🍑", img:P+"huesillo.jpg" },
  { n:"Banana chip", c:"frutas", e:"🍌", img:P+"banana-chip.jpg" },
  { n:"Hibiscus", c:"frutas", e:"🌺", img:P+"hibiscus.jpg" },

  // Semillas, cereales y granos
  { n:"Chía", c:"semillas", e:"⚫", img:P+"chia.jpg" },
  { n:"Linaza", c:"semillas", e:"🟤", img:P+"linaza.jpg" },
  { n:"Linaza argentina", c:"semillas", e:"🟤", img:P+"linaza-argentina.jpg" },
  { n:"Sésamo blanco", c:"semillas", e:"⚪", img:P+"sesamo-blanco.jpg" },
  { n:"Sésamo negro", c:"semillas", e:"⚫", img:P+"sesamo-negro.jpg" },
  { n:"Sésamo tostado", c:"semillas", e:"🟤", img:P+"sesamo-tostado.jpg" },
  { n:"Semilla de maravilla", c:"semillas", e:"🌻", img:P+"maravilla.jpg" },
  { n:"Quínoa blanca", c:"semillas", e:"🌾", img:P+"quinoa-blanca.jpg" },
  { n:"Quínoa negra", c:"semillas", e:"🌾", img:P+"quinoa-negra.jpg" },
  { n:"Quínoa tricolor", c:"semillas", e:"🌾", img:P+"quinoa-tricolor.jpg" },
  { n:"Quínoa inflada dulce", c:"semillas", e:"🌾", img:P+"quinoa-inflada-dulce.jpg" },
  { n:"Quínoa inflada natural", c:"semillas", e:"🌾", img:P+"quinoa-inflada-natural.jpg" },
  { n:"Avena entera", c:"semillas", e:"🌾", img:P+"avena-entera.jpg" },
  { n:"Avena granola", c:"semillas", e:"🥣", img:P+"avena-granola.jpg" },
  { n:"Avena instantánea", c:"semillas", e:"🥣", img:P+"avena-instantanea.jpg" },
  { n:"Poroto negro", c:"semillas", e:"🟤", img:P+"poroto-negro.jpg" },
  { n:"Maíz Curagua", c:"semillas", e:"🌽", img:P+"maiz-curagua.jpg" },

  // Snacks salados
  { n:"Habas fritas saladas", c:"snacks", e:"🟤", img:P+"habas-fritas.jpg" },
  { n:"Japonés Crokissimo cebolla", c:"snacks", e:"🧅", img:P+"japones-cebolla.jpg" },
  { n:"Japonés Crokissimo natural", c:"snacks", e:"🥜", img:P+"japones-natural.jpg" },
  { n:"Maíz frito barbecue", c:"snacks", e:"🌽", img:P+"maiz-frito-barbecue.jpg" },
  { n:"Maíz frito chili", c:"snacks", e:"🌶️", img:P+"maiz-frito-chili.jpg" },
  { n:"Maíz frito mostaza miel", c:"snacks", e:"🍯", img:P+"maiz-frito-mostaza.jpg" },
  { n:"Maíz frito salado", c:"snacks", e:"🌽", img:P+"maiz-frito-salado.jpg" },
  { n:"Maíz gigante sal", c:"snacks", e:"🌽", img:P+"maiz-gigante.jpg" },
  { n:"Cono de maíz", c:"snacks", e:"🌽", img:P+"cono-maiz.jpg" },
  { n:"Guaquitas", c:"snacks", e:"🍿", img:P+"guaquitas.jpg" },
  { n:"Chubi", c:"snacks", e:"🍿", img:P+"chubi.jpg" },

  // Golosinas y confites
  { n:"Barra de coco con chocolate", c:"golosinas", e:"🍫", img:P+"barra-coco-chocolate.jpg" },
  { n:"Crocante de castaña", c:"golosinas", e:"🍬", img:P+"crocante-castana.jpg" },
  { n:"Crocante de maní", c:"golosinas", e:"🍬", img:P+"crocante-mani.jpg" },
  { n:"Crocante de zapallo", c:"golosinas", e:"🎃", img:P+"crocante-zapallo.jpg" },
  { n:"Crocante mix", c:"golosinas", e:"🍬", img:P+"crocante-mix.jpg" },
  { n:"Fondant de leche", c:"golosinas", e:"🥛", img:P+"fondant-leche.jpg" },
  { n:"Fondant de leche y chocolate", c:"golosinas", e:"🍫", img:P+"fondant-leche-chocolate.jpg" },
  { n:"Fondant de leche y coco", c:"golosinas", e:"🥥", img:P+"fondant-leche-coco.jpg" },
  { n:"Gomita de mango centro líquido", c:"golosinas", e:"🍬", img:P+"gomita-mango.jpg" },
  { n:"Gomita pelable", c:"golosinas", e:"🍬", img:P+"gomita-pelable.jpg" },
  { n:"Gomitas eucalipto", c:"golosinas", e:"🌿", img:P+"gomitas-eucalipto.jpg" },
  { n:"Gomones de fruta", c:"golosinas", e:"🍬", img:P+"gomones-fruta.jpg" },
  { n:"MalvaCoco", c:"golosinas", e:"🥥", img:P+"malvacoco.jpg" },
  { n:"Merenguitos", c:"golosinas", e:"🍥", img:P+"merenguitos.jpg" },
  { n:"Pé de Moca con chocolate", c:"golosinas", e:"🍫", img:P+"pe-de-moca.jpg" },

  // Despensa natural
  { n:"Cacao amargo", c:"despensa", e:"🍫", img:P+"cacao-amargo.jpg" },
  { n:"Cacao Oriente natural", c:"despensa", e:"🍫", img:P+"cacao-oriente.jpg" },
  { n:"Coco laminado", c:"despensa", e:"🥥", img:P+"coco-laminado.jpg" },
  { n:"Coco rallado fino", c:"despensa", e:"🥥", img:P+"coco-rallado-fino.jpg" },
  { n:"Coco rallado grueso", c:"despensa", e:"🥥", img:P+"coco-rallado-grueso.jpg" },
  { n:"Aceite de almendras", c:"despensa", e:"🧴", img:P+"aceite-almendras.jpg" },
  { n:"Aceite de coco", c:"despensa", e:"🧴", img:P+"aceite-coco.jpg" },
  { n:"Aceite de coco sin sabor", c:"despensa", e:"🧴", img:P+"aceite-coco.jpg" },
  { n:"Aceite de nuez", c:"despensa", e:"🧴", img:P+"aceite-nuez.jpg" },
  { n:"Té Ceylán", c:"despensa", e:"🍵", img:P+"te-ceylan.jpg" },
  { n:"Té verde", c:"despensa", e:"🍵", img:P+"te-verde.jpg" },
  { n:"Bicarbonato", c:"despensa", e:"🧂", img:P+"bicarbonato.jpg" },
  { n:"Maicena", c:"despensa", e:"🌽", img:P+"maicena.jpg" },

  // ===== Productos nuevos =====
  // Frutos secos
  { n:"Avellana chilena tostada", c:"frutos-secos", e:"🌰", img:P+"avellana-chilena.jpg" },
  { n:"Maní con piel", c:"frutos-secos", e:"🥜", img:P+"mani-con-piel.jpg" },
  { n:"Maní sin sal", c:"frutos-secos", e:"🥜", img:P+"mani-sin-sal.jpg" },
  { n:"Nuez", c:"frutos-secos", e:"🌰", img:P+"nuez.jpg" },
  { n:"Nuez cuartillo", c:"frutos-secos", e:"🌰", img:P+"nuez-cuartillo.jpg" },
  { n:"Nuez de Brasil", c:"frutos-secos", e:"🌰", img:P+"nuez-brasil.jpg" },
  { n:"Pistacho tostado sin sal", c:"frutos-secos", e:"🥜", img:P+"pistacho-tostado.jpg" },

  // Frutas deshidratadas
  { n:"Cereza deshidratada", c:"frutas", e:"🍒", img:P+"cereza-deshidratada.jpg" },
  { n:"Naranja deshidratada", c:"frutas", e:"🍊", img:P+"naranja-deshidratada.jpg" },
  { n:"Pasas morenas", c:"frutas", e:"🍇", img:P+"pasas-morenas.jpg" },
  { n:"Jengibre en lonja", c:"frutas", e:"🟡", img:P+"jengibre-lonja.jpg" },
  { n:"Fruta confitada", c:"frutas", e:"🍬", img:P+"fruta-confitada.jpg" },

  // Golosinas y confites
  { n:"Almendra con chocolate caramelizada", c:"golosinas", e:"🍫", img:P+"almendra-choco-caramelizada.jpg" },
  { n:"Almendra con chocolate Vizzio", c:"golosinas", e:"🍫", img:P+"almendra-choco-vizzio.jpg" },
  { n:"Avellana con chocolate", c:"golosinas", e:"🍫", img:P+"avellana-choco.jpg" },
  { n:"Castaña con chocolate", c:"golosinas", e:"🍫", img:P+"castana-choco.jpg" },
  { n:"Café con chocolate bitter", c:"golosinas", e:"🍫", img:P+"cafe-choco-bitter.jpg" },
  { n:"Café con chocolate blanco", c:"golosinas", e:"🍫", img:P+"cafe-choco-blanco.jpg" },
  { n:"Café con chocolate leche", c:"golosinas", e:"🍫", img:P+"cafe-choco-leche.jpg" },
  { n:"Café con chocolate mix", c:"golosinas", e:"🍫", img:P+"cafe-choco-mix.jpg" },
  { n:"Naranja con chocolate", c:"golosinas", e:"🍫", img:P+"naranja-choco.jpg" },
  { n:"Marshmallows", c:"golosinas", e:"🍡", img:P+"marshmallows.jpg" },
  { n:"Rocklets", c:"golosinas", e:"🍫", img:P+"rocklets.jpg" },
  { n:"Gomitas ácidas de limón", c:"golosinas", e:"🍬", img:P+"gomitas-acidas-limon.jpg" },
  { n:"Frugele", c:"golosinas", e:"🍬", img:P+"frugele.jpg" },

  // Despensa natural
  { n:"Agua de coco con pulpa", c:"despensa", e:"🥥", img:P+"agua-coco-pulpa.jpg" },
  { n:"Agua de coco Copra", c:"despensa", e:"🥥", img:P+"agua-coco-copra.jpg" },
  { n:"Azúcar de coco", c:"despensa", e:"🟤", img:P+"azucar-coco.jpg" },
  { n:"Café de cebada", c:"despensa", e:"☕", img:P+"cafe-cebada.jpg" },
  { n:"Café de higo", c:"despensa", e:"☕", img:P+"cafe-higo.jpg" },
  { n:"Café de quinoa", c:"despensa", e:"☕", img:P+"cafe-quinoa.jpg" },
  { n:"Café de trigo", c:"despensa", e:"☕", img:P+"cafe-trigo.jpg" },
  { n:"Harina de almendra con piel", c:"despensa", e:"🌾", img:P+"harina-almendra.jpg" },
  { n:"Chuño", c:"despensa", e:"🥔", img:P+"chuno.jpg" },
  { n:"Gelatina sin sabor", c:"despensa", e:"🍮", img:P+"gelatina-sin-sabor.jpg" },
  { n:"Syrup de coco y chocolate", c:"despensa", e:"🍯", img:P+"syrup-coco-choco.jpg" },
  { n:"Tropical coco", c:"despensa", e:"🥥", img:P+"tropical-coco.jpg" },

  // Condimentos y especias
  { n:"Ajinomoto", c:"condimentos", e:"🧂", img:P+"ajinomoto.jpg" },
  { n:"Ajo en polvo", c:"condimentos", e:"🧄", img:P+"ajo-polvo.jpg" },
  { n:"Anís estrella", c:"condimentos", e:"⭐", img:P+"anis-estrella.jpg" },
  { n:"Canela molida", c:"condimentos", e:"🟤", img:P+"canela-molida.jpg" },
  { n:"Cassia (canela en rama)", c:"condimentos", e:"🟤", img:P+"cassia.jpg" },
  { n:"Cebolla en escama", c:"condimentos", e:"🧅", img:P+"cebolla-escama.jpg" },
  { n:"Comino en polvo", c:"condimentos", e:"🟤", img:P+"comino-polvo.jpg" },
  { n:"Comino entero", c:"condimentos", e:"🟤", img:P+"comino-entero.jpg" },
  { n:"Cúrcuma en polvo", c:"condimentos", e:"🟡", img:P+"curcuma.jpg" },
  { n:"Curry", c:"condimentos", e:"🟡", img:P+"curry.jpg" },
  { n:"Hoja de eneldo", c:"condimentos", e:"🌿", img:P+"eneldo.jpg" },
  { n:"Jengibre en polvo", c:"condimentos", e:"🟡", img:P+"jengibre-polvo.jpg" },
  { n:"Orégano", c:"condimentos", e:"🌿", img:P+"oregano.jpg" },
  { n:"Pimienta negra entera", c:"condimentos", e:"⚫", img:P+"pimienta-negra.jpg" },
  { n:"Pimienta molida", c:"condimentos", e:"⚫", img:P+"pimienta-molida.jpg" },
  { n:"Romero", c:"condimentos", e:"🌿", img:P+"romero.jpg" },
  { n:"Sal de Himalaya fina", c:"condimentos", e:"🧂", img:P+"sal-himalaya-fina.jpg" },
  { n:"Sal de Himalaya intermedia", c:"condimentos", e:"🧂", img:P+"sal-himalaya-intermedia.jpg" },
  { n:"Sal de Himalaya gruesa", c:"condimentos", e:"🧂", img:P+"sal-himalaya-gruesa.jpg" },
  { n:"Semilla de anís", c:"condimentos", e:"🌱", img:P+"semilla-anis.jpg" },
  { n:"Tomillo", c:"condimentos", e:"🌿", img:P+"tomillo.jpg" },
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
  { id:"condimentos",  label:"Condimentos & especias" },
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
  grid.innerHTML = list.map(p => {
    const media = p.img
      ? `<img class="p-card__img" src="${p.img}" alt="${p.n}" loading="lazy" />`
      : `<span class="p-card__emoji">${p.e}</span>`;
    return `
    <article class="p-card${p.img ? " p-card--photo" : ""}">
      ${media}
      <span class="p-card__body">
        <span class="p-card__name">${p.n}</span>
        <span class="p-card__cat">${CAT_LABEL[p.c]}</span>
      </span>
    </article>`;
  }).join("");
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
