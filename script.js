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
  { n:"Almendra laminada", c:"frutos-secos", e:"🌰", img:P+"almendra-laminada.jpg" },

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
  { n:"Aceite de almendras 250 ml", c:"despensa", e:"🧴", img:P+"aceite-almendras.jpg", u:true },
  { n:"Aceite de coco 100 ml", c:"despensa", e:"🧴", img:P+"aceite-coco.jpg", u:true },
  { n:"Aceite de coco sin sabor 1 L", c:"despensa", e:"🧴", img:P+"aceite-coco.jpg", u:true },
  { n:"Aceite de nuez 250 ml", c:"despensa", e:"🧴", img:P+"aceite-nuez.jpg", u:true },
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
  { n:"Agua de coco con pulpa 1 L", c:"despensa", e:"🥥", img:P+"agua-coco-pulpa.jpg", u:true },
  { n:"Agua de coco Copra 200 ml", c:"despensa", e:"🥥", img:P+"agua-coco-copra.jpg", u:true },
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
  { n:"Harina tostada", c:"despensa", e:"🌾", img:P+"harina-tostada.jpg" },
  { n:"Harina integral", c:"despensa", e:"🌾", img:P+"harina-integral.jpg" },
  { n:"Harina de quínoa", c:"despensa", e:"🌾", img:P+"harina-quinoa.jpg" },
  { n:"Harina de avena", c:"despensa", e:"🌾", img:P+"harina-avena.jpg" },
  { n:"Harina de maqui", c:"despensa", e:"🟣", img:P+"harina-maqui.jpg" },
  { n:"Harina de linaza", c:"despensa", e:"🟤", img:P+"harina-linaza.jpg" },
  { n:"Harina de coco", c:"despensa", e:"🥥", img:P+"harina-coco.jpg" },
  { n:"Carne vegetal", c:"despensa", e:"🌱", img:P+"carne-vegetal.jpg" },

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
  { n:"Paprika", c:"condimentos", e:"🌶️", img:P+"paprika.jpg" },
  { n:"Nuez moscada entera", c:"condimentos", e:"🟤", img:P+"nuez-moscada.jpg" },
  { n:"Merkén ahumado", c:"condimentos", e:"🌶️", img:P+"merken-ahumado.jpg" },
  { n:"Cebolla en polvo", c:"condimentos", e:"🧅", img:P+"cebolla-polvo.jpg" },
  { n:"Ajo en escama", c:"condimentos", e:"🧄", img:P+"ajo-escama.jpg" },
  { n:"Aliño completo", c:"condimentos", e:"🧂", img:P+"alino-completo.jpg" },

  // ===== Agregados desde lista mayorista 2026 (foto pendiente, por ahora emoji) =====
  // Aceites y aguas (por unidad)
  { n:"Aceite de coco 200 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-200-ml.jpg" },
  { n:"Aceite de coco 500 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-500-ml.jpg" },
  { n:"Aceite de coco 1 L", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-1-l.jpg" },
  { n:"Aceite de coco sin sabor 200 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-sin-sabor-200-ml.jpg" },
  { n:"Aceite de coco sin sabor 500 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-sin-sabor-500-ml.jpg" },
  { n:"Aceite de coco spray sin sabor 100 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-spray-sin-sabor-100-ml.jpg" },
  { n:"Agua de coco Copra 1 L", c:"despensa", e:"🥥", u:true, img:P+"agua-de-coco-copra-1-l.jpg" },
  // Golosinas / chocolates
  { n:"Chips de chocolate", c:"golosinas", e:"🍫", img:P+"chips-de-chocolate.jpg" },
  { n:"Cholito", c:"golosinas", e:"🔴", img:P+"cholito.jpg" },
  { n:"Cholito blanco", c:"golosinas", e:"⚪", img:P+"cholito-blanco.jpg" },
  { n:"Cholito mix", c:"golosinas", e:"🎉", img:P+"cholito-mix.jpg" },
  { n:"Cranberry con chocolate", c:"golosinas", e:"🍫", img:P+"cranberry-con-chocolate.jpg" },
  { n:"Mango con chocolate", c:"golosinas", e:"🍫", img:P+"mango-con-chocolate.jpg" },
  { n:"Maní choco rols", c:"golosinas", e:"🍫", img:P+"mani-choco-rols.jpg" },
  { n:"Pasas al ron con chocolate", c:"golosinas", e:"🍫", img:P+"pasas-al-ron-con-chocolate.jpg" },
  { n:"Piña con chocolate", c:"golosinas", e:"🍫", img:P+"pina-con-chocolate.jpg" },
  { n:"Pasas con chocolate", c:"golosinas", e:"🍫", img:P+"pasas-con-chocolate.jpg" },
  // Maní confitado (sabores nuevos)
  { n:"Maní sabor cereza sour", c:"confitados", e:"🍒", img:P+"mani-sabor-cereza-sour.jpg" },
  { n:"Maní sabor miel", c:"confitados", e:"🍯", img:P+"mani-sabor-miel.jpg" },
  { n:"Maní sabor Nutella", c:"confitados", e:"🍫", img:P+"mani-sabor-nutella.jpg" },
  { n:"Maní sabor papaya", c:"confitados", e:"🟠", img:P+"mani-sabor-papaya.jpg" },
  { n:"Maní sabor plátano", c:"confitados", e:"🍌", img:P+"mani-sabor-platano.jpg" },
  { n:"Maravilla confitada", c:"confitados", e:"🌻", img:P+"maravilla-confitada.jpg" },
  { n:"Maravilla confitada menta", c:"confitados", e:"🌿", img:P+"maravilla-confitada-menta.jpg" },
  // Pastas y cremas untables (por unidad)
  { n:"Crema de avellana tipo Nutella 350 g", c:"despensa", e:"🍫", u:true },
  { n:"Crema de pistacho 200 g", c:"despensa", e:"🟢", u:true },
  { n:"Pasta de castaña de cajú con cacao 200 g", c:"despensa", e:"🥜", u:true },
  { n:"Pasta de castaña de cajú entera 200 g", c:"despensa", e:"🥜", u:true },
  { n:"Pasta de maní 500 g", c:"despensa", e:"🥜", u:true },
  { n:"Pasta de maní crunchy 500 g", c:"despensa", e:"🥜", u:true },
  // Crocantes con chocolate
  { n:"Crocante de castaña con chocolate", c:"golosinas", e:"🍫", img:P+"crocante-de-castana-con-chocolate.jpg" },
  { n:"Crocante de maní con chocolate", c:"golosinas", e:"🍫", img:P+"crocante-de-mani-con-chocolate.jpg" },
  // Dulces
  { n:"Gomita tiburón con chocolate", c:"golosinas", e:"🦈" },
  { n:"Snicker", c:"golosinas", e:"🍫", u:true },
  { n:"Azúcar de coco 350 g", c:"despensa", e:"🟤", u:true, img:P+"azucar-de-coco-350-g.jpg" },
  { n:"Glucosa", c:"despensa", e:"🍯", img:P+"glucosa.jpg" },
  // Frutas deshidratadas
  { n:"Banana liofilizada", c:"frutas", e:"🍌", img:P+"banana-liofilizada.jpg" },
  { n:"Dátil sin carozo", c:"frutas", e:"🟤", img:P+"datil-sin-carozo.jpg" },
  { n:"Frutilla liofilizada", c:"frutas", e:"🍓", img:P+"frutilla-liofilizada.jpg" },
  { n:"Higo deshidratado", c:"frutas", e:"🟣", img:P+"higo-deshidratado.jpg" },
  { n:"Mix de frutas deshidratadas", c:"frutas", e:"🍍", img:P+"mix-de-frutas-deshidratadas.jpg" },
  { n:"Manzana rodaja", c:"frutas", e:"🍎", img:P+"manzana-rodaja.jpg" },
  { n:"Pasas ámbar", c:"frutas", e:"🍇", img:P+"pasas-ambar.jpg" },
  { n:"Pasas golden", c:"frutas", e:"🍇", img:P+"pasas-golden.jpg" },
  { n:"Pasas rubias", c:"frutas", e:"🍇", img:P+"pasas-rubias.jpg" },
  // Frutos secos
  { n:"Almendra grande", c:"frutos-secos", e:"🌰", img:P+"almendra-grande.jpg" },
  { n:"Almendra mediana", c:"frutos-secos", e:"🌰", img:P+"almendra-mediana.jpg" },
  { n:"Almendra pequeña", c:"frutos-secos", e:"🌰", img:P+"almendra-pequena.jpg" },
  { n:"Coco cubo", c:"frutos-secos", e:"🥥", img:P+"coco-cubo.jpg" },
  { n:"Nuez amarilla", c:"frutos-secos", e:"🌰", img:P+"nuez-amarilla.jpg" },
  { n:"Nuez cuarto", c:"frutos-secos", e:"🌰", img:P+"nuez-cuarto.jpg" },
  // Snacks (por unidad)
  { n:"Chips de camote", c:"snacks", e:"🍠", u:true, img:P+"chips-de-camote.jpg" },
  { n:"Chips de yuca", c:"snacks", e:"🥔", u:true, img:P+"chips-de-yuca.jpg" },
  // Infusiones
  { n:"Flor de manzanilla", c:"despensa", e:"🌼", img:P+"flor-de-manzanilla.jpg" },
  { n:"Té Chai", c:"despensa", e:"🍵", img:P+"te-chai.jpg" },
  // Cereales
  { n:"Arroz Basmati", c:"semillas", e:"🌾", img:P+"arroz-basmati.jpg" },
  { n:"Granola tradicional premium", c:"semillas", e:"🥣", img:P+"granola-tradicional-premium.jpg" },
  { n:"Quínoa roja", c:"semillas", e:"🌾", img:P+"quinoa-roja.jpg" },
  // Condimentos
  { n:"Canela Ceylán en rama", c:"condimentos", e:"🟤", img:P+"canela-ceylan-en-rama.jpg" },
  { n:"Canela molida Ceylán", c:"condimentos", e:"🟤", img:P+"canela-molida-ceylan.jpg" },
  { n:"Clavo de olor entero", c:"condimentos", e:"🟤", img:P+"clavo-de-olor-entero.jpg" },
  { n:"Clavo de olor molido", c:"condimentos", e:"🟤", img:P+"clavo-de-olor-molido.jpg" },
];

// Id estable para cada producto (usado por el carrito)
PRODUCTS.forEach((p, i) => { p.id = i; });

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
const CAT_ORDER = Object.fromEntries(CATEGORIES.map((c, i) => [c.id, i]));

const grid    = document.getElementById("productGrid");
const empty   = document.getElementById("productEmpty");
const filters = document.getElementById("filters");
const search  = document.getElementById("search");

let activeCat = "todos";

/* ===== Estado del carrito ===== */
const WA_NUMBER = "56967216888";
const CART_KEY  = "go_cart_v1";
const PRODUCT_BY_ID = Object.fromEntries(PRODUCTS.map(p => [p.id, p]));

// cart = { [id]: gramos }
let cart = {};
let cartNote = "";
let cartEnvase = false;

try {
  const saved = JSON.parse(localStorage.getItem(CART_KEY) || "{}");
  if (saved && typeof saved === "object") {
    cart       = saved.cart && typeof saved.cart === "object" ? saved.cart : {};
    cartNote   = typeof saved.note === "string" ? saved.note : "";
    cartEnvase = !!saved.envase;
  }
} catch (e) { /* localStorage no disponible o corrupto: empezamos vacíos */ }

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

  // Agrupa por categoría y ordena alfabéticamente dentro de cada una
  list.sort((a, b) => (CAT_ORDER[a.c] - CAT_ORDER[b.c]) || norm(a.n).localeCompare(norm(b.n), "es"));

  empty.hidden = list.length !== 0;
  grid.innerHTML = list.map(p => {
    const media = p.img
      ? `<img class="p-card__img" src="${p.img}" alt="${p.n}" loading="lazy" />`
      : `<span class="p-card__emoji">${p.e}</span>`;
    const inCart = cart[p.id] != null;
    return `
    <article class="p-card${p.img ? " p-card--photo" : ""}">
      ${media}
      <span class="p-card__body">
        <span class="p-card__name">${p.n}</span>
        <span class="p-card__cat">${CAT_LABEL[p.c]}</span>
      </span>
      <button class="p-card__add${inCart ? " is-in" : ""}" data-id="${p.id}" aria-label="${inCart ? "Quitar" : "Agregar"} ${p.n} ${inCart ? "del" : "al"} pedido" title="${inCart ? "En tu pedido" : "Agregar al pedido"}">
        <span class="p-card__add-ico" aria-hidden="true">${inCart ? "✓" : "+"}</span>
      </button>
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

/* ===== Carrito: elementos ===== */
const QTY_PRESETS = [100, 250, 500, 1000, 3000, 5000];
const DEFAULT_QTY = 250;

const cartFab     = document.getElementById("cartFab");
const cartCount   = document.getElementById("cartCount");
const cartEl      = document.getElementById("cart");
const cartOverlay = document.getElementById("cartOverlay");
const cartClose   = document.getElementById("cartClose");
const cartBody    = document.getElementById("cartBody");
const cartEmpty   = document.getElementById("cartEmpty");
const cartFoot    = document.getElementById("cartFoot");
const cartSend    = document.getElementById("cartSend");
const cartClear   = document.getElementById("cartClear");
const cartEnvaseEl= document.getElementById("cartEnvase");
const cartNoteEl  = document.getElementById("cartNote");
const toastEl     = document.getElementById("toast");

/* ===== Carrito: utilidades ===== */
function fmtQty(g){
  return g >= 1000
    ? (g / 1000).toLocaleString("es-CL", { maximumFractionDigits: 2 }) + " kg"
    : g + " g";
}

function cartCountValue(){ return Object.keys(cart).length; }

function persistCart(){
  try {
    localStorage.setItem(CART_KEY, JSON.stringify({ cart, note: cartNote, envase: cartEnvase }));
  } catch (e) { /* sin persistencia, el carrito sigue funcionando en memoria */ }
}

let toastTimer;
function toast(msg){
  if(!toastEl) return;
  toastEl.textContent = msg;
  toastEl.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("is-visible"), 1800);
}

/* ===== Carrito: mutaciones ===== */
function addToCart(id){
  if(cart[id] == null){
    cart[id] = PRODUCT_BY_ID[id].u ? "u" : DEFAULT_QTY;
    toast(`${PRODUCT_BY_ID[id].n} · agregado al pedido`);
  }
  afterCartChange();
}
function removeFromCart(id){
  delete cart[id];
  afterCartChange();
}
function setQty(id, g){
  cart[id] = g;
  afterCartChange();
}
function clearCart(){
  cart = {};
  afterCartChange();
}

function afterCartChange(){
  persistCart();
  updateFab();
  updateCardButtons();
  renderCart();
}

/* ===== Carrito: render ===== */
function updateFab(){
  const n = cartCountValue();
  cartCount.textContent = n;
  cartFab.classList.toggle("has-items", n > 0);
  cartCount.hidden = n === 0;
}

function updateCardButtons(){
  grid.querySelectorAll(".p-card__add").forEach(btn => {
    const id = Number(btn.dataset.id);
    const inCart = cart[id] != null;
    btn.classList.toggle("is-in", inCart);
    const ico = btn.querySelector(".p-card__add-ico");
    if(ico) ico.textContent = inCart ? "✓" : "+";
    const p = PRODUCT_BY_ID[id];
    if(p){
      btn.setAttribute("aria-label", `${inCart ? "Quitar" : "Agregar"} ${p.n} ${inCart ? "del" : "al"} pedido`);
      btn.title = inCart ? "En tu pedido" : "Agregar al pedido";
    }
  });
}

function renderCart(){
  const ids = Object.keys(cart);
  const hasItems = ids.length > 0;
  cartEmpty.hidden = hasItems;
  cartFoot.hidden = !hasItems;

  // Ordena por categoría y nombre, igual que el catálogo
  ids.sort((a, b) => {
    const pa = PRODUCT_BY_ID[a], pb = PRODUCT_BY_ID[b];
    return (CAT_ORDER[pa.c] - CAT_ORDER[pb.c]) || norm(pa.n).localeCompare(norm(pb.n), "es");
  });

  cartBody.innerHTML = ids.map(id => {
    const p = PRODUCT_BY_ID[id];
    const g = cart[id];
    const media = p.img
      ? `<img class="cart-item__img" src="${p.img}" alt="" loading="lazy" />`
      : `<span class="cart-item__emoji">${p.e}</span>`;
    let control;
    if(p.u){
      control = `<span class="cart-item__unit">Por unidad</span>`;
    } else {
      const presets = QTY_PRESETS.includes(g) ? QTY_PRESETS : [g, ...QTY_PRESETS];
      const options = presets.map(v => `<option value="${v}"${v === g ? " selected" : ""}>${fmtQty(v)}</option>`).join("");
      control = `<select class="cart-item__qty" aria-label="Cantidad de ${p.n}">${options}</select>`;
    }
    return `
    <div class="cart-item" data-id="${p.id}">
      ${media}
      <div class="cart-item__info">
        <span class="cart-item__name">${p.n}</span>
        ${control}
      </div>
      <button class="cart-item__del" data-id="${p.id}" aria-label="Quitar ${p.n}" title="Quitar">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12M9 7V5h6v2M8 7l.8 12.1a1 1 0 0 0 1 .9h4.4a1 1 0 0 0 1-.9L16 7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>`;
  }).join("");

  cartEnvaseEl.checked = cartEnvase;
  if(document.activeElement !== cartNoteEl) cartNoteEl.value = cartNote;
}

/* ===== Carrito: abrir / cerrar ===== */
function openCart(){
  cartEl.classList.add("is-open");
  cartEl.setAttribute("aria-hidden", "false");
  cartOverlay.hidden = false;
  requestAnimationFrame(() => cartOverlay.classList.add("is-open"));
  document.body.classList.add("no-scroll");
}
function closeCart(){
  cartEl.classList.remove("is-open");
  cartEl.setAttribute("aria-hidden", "true");
  cartOverlay.classList.remove("is-open");
  setTimeout(() => { cartOverlay.hidden = true; }, 250);
  document.body.classList.remove("no-scroll");
}

/* ===== Carrito: enviar por WhatsApp ===== */
function buildMessage(){
  const ids = Object.keys(cart).sort((a, b) => {
    const pa = PRODUCT_BY_ID[a], pb = PRODUCT_BY_ID[b];
    return (CAT_ORDER[pa.c] - CAT_ORDER[pb.c]) || norm(pa.n).localeCompare(norm(pb.n), "es");
  });
  const lines = ids.map(id => {
    const p = PRODUCT_BY_ID[id];
    return p.u ? `• ${p.n}` : `• ${p.n} — ${fmtQty(cart[id])}`;
  });
  let msg = "Hola Granel & Origen 🌰, quiero hacer este pedido:\n\n" + lines.join("\n");
  if(cartEnvase) msg += "\n\n♻️ Llevo mi envase (10% dcto)";
  const note = cartNote.trim();
  if(note) msg += `\n\nNotas: ${note}`;
  return msg;
}

function sendOrder(){
  if(cartCountValue() === 0) return;
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(buildMessage())}`;
  window.open(url, "_blank", "noopener");
}

/* ===== Carrito: eventos ===== */
grid.addEventListener("click", e => {
  const btn = e.target.closest(".p-card__add");
  if(!btn) return;
  const id = Number(btn.dataset.id);
  if(cart[id] != null) removeFromCart(id);
  else addToCart(id);
});

cartBody.addEventListener("click", e => {
  const del = e.target.closest(".cart-item__del");
  if(del) removeFromCart(Number(del.dataset.id));
});
cartBody.addEventListener("change", e => {
  const sel = e.target.closest(".cart-item__qty");
  if(sel){
    const id = Number(e.target.closest(".cart-item").dataset.id);
    setQty(id, Number(sel.value));
  }
});

cartFab.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
document.addEventListener("keydown", e => { if(e.key === "Escape" && cartEl.classList.contains("is-open")) closeCart(); });

cartEnvaseEl.addEventListener("change", () => { cartEnvase = cartEnvaseEl.checked; persistCart(); });
cartNoteEl.addEventListener("input", () => { cartNote = cartNoteEl.value; persistCart(); });
cartSend.addEventListener("click", sendOrder);
cartClear.addEventListener("click", () => {
  if(cartCountValue() === 0) return;
  if(confirm("¿Vaciar todo el pedido?")) clearCart();
});

renderFilters();
renderProducts();
updateFab();
renderCart();

/* ===== Menú móvil ===== */
const toggle = document.getElementById("navToggle");
const links  = document.getElementById("navLinks");
toggle.addEventListener("click", () => links.classList.toggle("is-open"));
links.addEventListener("click", e => {
  if(e.target.tagName === "A") links.classList.remove("is-open");
});

/* ===== Año ===== */
document.getElementById("year").textContent = new Date().getFullYear();
