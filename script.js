/* ===== Granel & Origen — catálogo + interacciones ===== */

const P = "images/productos/";
const PRODUCTS = [
  // Maní confitado y confitados dulces
  { n:"Almendra confitada", c:"confitados", e:"🌰", img:P+"almendra-confitada.jpg" , p:13400 },
  { n:"Castaña de cajú confitada", c:"confitados", e:"🌰", img:P+"castana-caju-confitada.jpg" , p:12900 },
  { n:"Almendra de color", c:"confitados", e:"🎨", img:P+"almendra-color.jpg" , p:8300 },
  { n:"Maní sabor arándano", c:"confitados", e:"🔵", img:P+"mani-arandano.jpg" , p:4200 },
  { n:"Maní sabor capuchino", c:"confitados", e:"☕", img:P+"mani-capuchino.jpg" , p:4200 },
  { n:"Maní sabor cereza", c:"confitados", e:"🍒", img:P+"mani-cereza.jpg" , p:4200 },
  { n:"Maní sabor chirimoya", c:"confitados", e:"🍈", img:P+"mani-chirimoya.jpg" , p:4200 },
  { n:"Maní sabor chocolate", c:"confitados", e:"🍫", img:P+"mani-chocolate.jpg" , p:4200 },
  { n:"Maní sabor coco", c:"confitados", e:"🥥", img:P+"mani-coco.jpg" , p:4200 },
  { n:"Maní sabor durazno", c:"confitados", e:"🍑", img:P+"mani-durazno.jpg" , p:4200 },
  { n:"Maní sabor frambuesa", c:"confitados", e:"🍓", img:P+"mani-frambuesa.jpg" , p:4200 },
  { n:"Maní sabor frutilla", c:"confitados", e:"🍓", img:P+"mani-frutilla.jpg" , p:4200 },
  { n:"Maní sabor frutos del bosque", c:"confitados", e:"🍇", img:P+"mani-frutos-bosque.jpg" , p:4200 },
  { n:"Maní sabor guinda", c:"confitados", e:"🍒", img:P+"mani-guinda.jpg" , p:4200 },
  { n:"Maní sabor leche condensada", c:"confitados", e:"🥛", img:P+"mani-leche-condensada.jpg" , p:4200 },
  { n:"Maní sabor limón", c:"confitados", e:"🍋", img:P+"mani-limon.jpg" , p:4200 },
  { n:"Maní sabor mango", c:"confitados", e:"🥭", img:P+"mani-mango.jpg" , p:4200 },
  { n:"Maní sabor manzana", c:"confitados", e:"🍎", img:P+"mani-manzana.jpg" , p:4200 },
  { n:"Maní sabor maracuyá", c:"confitados", e:"🍈", img:P+"mani-maracuya.jpg" , p:4200 },
  { n:"Maní sabor menta", c:"confitados", e:"🌿", img:P+"mani-menta.jpg" , p:4200 },
  { n:"Maní sabor mix", c:"confitados", e:"🎉", img:P+"mani-mix.jpg" , p:4200 },
  { n:"Maní sabor mora", c:"confitados", e:"🟣", img:P+"mani-mora.jpg" , p:4200 },
  { n:"Maní sabor naranja", c:"confitados", e:"🍊", img:P+"mani-naranja.jpg" , p:4200 },
  { n:"Maní sabor piña", c:"confitados", e:"🍍", img:P+"mani-pina.jpg" , p:4200 },
  { n:"Maní sabor pisco sour", c:"confitados", e:"🍸", img:P+"mani-pisco-sour.jpg" , p:4200 },
  { n:"Maní sabor pistacho", c:"confitados", e:"🥜", img:P+"mani-pistacho.jpg" , p:4200 },
  { n:"Maní rojo natural", c:"confitados", e:"🔴", img:P+"mani-rojo-natural.jpg" , p:4200 },
  { n:"Maní rojo sésamo", c:"confitados", e:"🔴", img:P+"mani-rojo-sesamo.jpg" , p:4200 },
  { n:"Maní sabor ron", c:"confitados", e:"🥃", img:P+"mani-ron.jpg" , p:4200 },
  { n:"Maní sabor sandía", c:"confitados", e:"🍉", img:P+"mani-sandia.jpg" , p:4200 },
  { n:"Maní sabor sésamo", c:"confitados", e:"⚪", img:P+"mani-sesamo.jpg" , p:4200 },
  { n:"Maní sabor tres leches", c:"confitados", e:"🥛", img:P+"mani-tres-leches.jpg" , p:4200 },
  { n:"Maní sabor tuti fruti", c:"confitados", e:"🍬", img:P+"mani-tuti-fruti.jpg" , p:4200 },
  { n:"Maní sabor vainilla", c:"confitados", e:"🍦", img:P+"mani-vainilla.jpg" , p:4200 },
  { n:"Maní sabor whisky", c:"confitados", e:"🥃", img:P+"mani-whisky.jpg" , p:4200 },

  // Frutos secos
  { n:"Almendra", c:"frutos-secos", e:"🌰", img:P+"almendra.jpg" , p:14700 },
  { n:"Avellana europea tostada", c:"frutos-secos", e:"🌰", img:P+"avellana-tostada.jpg" , p:14400 },
  { n:"Castaña salada", c:"frutos-secos", e:"🌰", img:P+"castana-salada.jpg" , p:13100 },
  { n:"Castaña sin sal", c:"frutos-secos", e:"🌰", img:P+"castana-sin-sal.jpg" , p:13100 },
  { n:"Maní con cáscara", c:"frutos-secos", e:"🥜", img:P+"mani-con-cascara.jpg" , p:4250 },
  { n:"Maní con merkén", c:"frutos-secos", e:"🌶️", img:P+"mani-merken.jpg" , p:3800 },
  { n:"Maní salado", c:"frutos-secos", e:"🥜", img:P+"mani-salado.jpg" , p:3200 },
  { n:"Pistacho salado", c:"frutos-secos", e:"🥜", img:P+"pistacho-salado.jpg" , p:18300 },
  { n:"Pistacho sin sal", c:"frutos-secos", e:"🥜", img:P+"pistacho-sin-sal.jpg" , p:18300 },
  { n:"Garbanzo tostado", c:"frutos-secos", e:"🟤", img:P+"garbanzo-tostado.jpg" , p:2200 },
  { n:"Almendra laminada", c:"frutos-secos", e:"🌰", img:P+"almendra-laminada.jpg" , ag:true },

  // Frutas deshidratadas
  { n:"Cranberry", c:"frutas", e:"🔴", img:P+"cranberry.jpg" , p:10490 },
  { n:"Flor de Jamaica", c:"frutas", e:"🌺", img:P+"flor-jamaica.jpg" , p:8500 },
  { n:"Frutilla deshidratada", c:"frutas", e:"🍓", img:P+"frutilla-deshidratada.jpg" , p:9000 },
  { n:"Jengibre en cubo", c:"frutas", e:"🟡", img:P+"jengibre.jpg" , p:7700 },
  { n:"Kiwi", c:"frutas", e:"🥝", img:P+"kiwi.jpg" , p:6300 },
  { n:"Mango bajo en azúcar", c:"frutas", e:"🥭", img:P+"mango-bajo-azucar.jpg" , p:9100 },
  { n:"Mango lonja", c:"frutas", e:"🥭", img:P+"mango-lonja.jpg" , ag:true },
  { n:"Mango candy cubo 2×2", c:"frutas", e:"🥭", img:P+"mango-candy.jpg" , p:5100 },
  { n:"Manzana cubo", c:"frutas", e:"🍎", img:P+"manzana-cubo.jpg" , p:7900 },
  { n:"Papaya cubo mix", c:"frutas", e:"🟠", img:P+"papaya-cubo-mix.jpg" , p:6800 },
  { n:"Papaya strip mix color", c:"frutas", e:"🟠", img:P+"papaya-strip-mix.jpg" , p:5800 },
  { n:"Papaya strip naranja", c:"frutas", e:"🟠", img:P+"papaya-strip-naranja.jpg" , p:5800 },
  { n:"Piña baja en azúcar", c:"frutas", e:"🍍", img:P+"pina-baja-azucar.jpg" , p:11200 },
  { n:"Piña en cubo", c:"frutas", e:"🍍", img:P+"pina-cubo.jpg" , p:6600 },
  { n:"Piña en rodajas", c:"frutas", e:"🍍", img:P+"pina-rodajas.jpg" , p:9100 },
  { n:"Pomelo", c:"frutas", e:"🍊", img:P+"pomelo.jpg" , p:6100 },
  { n:"Ciruela sin carozo", c:"frutas", e:"🟣", img:P+"ciruela.jpg" , p:7100 },
  { n:"Damasco turco", c:"frutas", e:"🍑", img:P+"damasco.jpg" , ag:true },
  { n:"Goji", c:"frutas", e:"🔴", img:P+"goji.jpg" , p:12550 },
  { n:"Huesillo grande", c:"frutas", e:"🍑", img:P+"huesillo.jpg" , ag:true },
  { n:"Banana chip", c:"frutas", e:"🍌", img:P+"banana-chip.jpg" , p:7400 },
  { n:"Hibiscus", c:"frutas", e:"🌺", img:P+"hibiscus.jpg" , p:10600 },

  // Semillas, cereales y granos
  { n:"Chía", c:"semillas", e:"⚫", img:P+"chia.jpg" , p:4100 },
  { n:"Linaza", c:"semillas", e:"🟤", img:P+"linaza.jpg" , ag:true },
  { n:"Linaza argentina", c:"semillas", e:"🟤", img:P+"linaza-argentina.jpg" , ag:true },
  { n:"Sésamo blanco", c:"semillas", e:"⚪", img:P+"sesamo-blanco.jpg" , p:5100 },
  { n:"Sésamo negro", c:"semillas", e:"⚫", img:P+"sesamo-negro.jpg" , p:5100 },
  { n:"Sésamo tostado", c:"semillas", e:"🟤", img:P+"sesamo-tostado.jpg" , p:5100 },
  { n:"Semilla de maravilla", c:"semillas", e:"🌻", img:P+"maravilla.jpg" , p:2900 },
  { n:"Quínoa blanca", c:"semillas", e:"🌾", img:P+"quinoa-blanca.jpg" , p:5000 },
  { n:"Quínoa negra", c:"semillas", e:"🌾", img:P+"quinoa-negra.jpg" , p:5000 },
  { n:"Quínoa tricolor", c:"semillas", e:"🌾", img:P+"quinoa-tricolor.jpg" , p:5000 },
  { n:"Quínoa inflada dulce", c:"semillas", e:"🌾", img:P+"quinoa-inflada-dulce.jpg" , p:7700 },
  { n:"Quínoa inflada natural", c:"semillas", e:"🌾", img:P+"quinoa-inflada-natural.jpg" , p:10490 },
  { n:"Avena entera", c:"semillas", e:"🌾", img:P+"avena-entera.jpg" , p:1690 },
  { n:"Avena granola", c:"semillas", e:"🥣", img:P+"avena-granola.jpg" , p:3100 },
  { n:"Avena instantánea", c:"semillas", e:"🥣", img:P+"avena-instantanea.jpg" , p:1690 },
  { n:"Poroto negro", c:"semillas", e:"🟤", img:P+"poroto-negro.jpg" , ag:true },
  { n:"Maíz Curagua", c:"semillas", e:"🌽", img:P+"maiz-curagua.jpg" , p:1850 },

  // Snacks salados
  { n:"Habas fritas saladas", c:"snacks", e:"🟤", img:P+"habas-fritas.jpg" , p:9000 },
  { n:"Japonés Crokissimo cebolla", c:"snacks", e:"🧅", img:P+"japones-cebolla.jpg" , p:5100 },
  { n:"Japonés Crokissimo natural", c:"snacks", e:"🥜", img:P+"japones-natural.jpg" , p:5100 },
  { n:"Maíz frito barbecue", c:"snacks", e:"🌽", img:P+"maiz-frito-barbecue.jpg" , p:5300 },
  { n:"Maíz frito chili", c:"snacks", e:"🌶️", img:P+"maiz-frito-chili.jpg" , p:5200 },
  { n:"Maíz frito mostaza miel", c:"snacks", e:"🍯", img:P+"maiz-frito-mostaza.jpg" , p:4800 },
  { n:"Maíz frito salado", c:"snacks", e:"🌽", img:P+"maiz-frito-salado.jpg" , p:5300 },
  { n:"Maíz gigante sal", c:"snacks", e:"🌽", img:P+"maiz-gigante.jpg" , ag:true },
  { n:"Cono de maíz", c:"snacks", e:"🌽", img:P+"cono-maiz.jpg" , p:4000 },
  { n:"Guaquitas", c:"snacks", e:"🍿", img:P+"guaquitas.jpg" , p:5800 },
  { n:"Chubi", c:"snacks", e:"🍿", img:P+"chubi.jpg" , p:5600 },

  // Golosinas y confites
  { n:"Barra de coco con chocolate", c:"golosinas", e:"🍫", img:P+"barra-coco-chocolate.jpg" , ag:true },
  { n:"Crocante de castaña", c:"golosinas", e:"🍬", img:P+"crocante-castana.jpg" , p:9700 },
  { n:"Crocante de maní", c:"golosinas", e:"🍬", img:P+"crocante-mani.jpg" , p:5800 },
  { n:"Crocante de zapallo", c:"golosinas", e:"🎃", img:P+"crocante-zapallo.jpg" , p:8400 },
  { n:"Crocante mix", c:"golosinas", e:"🍬", img:P+"crocante-mix.jpg" , p:7300 },
  { n:"Fondant de leche", c:"golosinas", e:"🥛", img:P+"fondant-leche.jpg" , p:5490 },
  { n:"Fondant de leche y chocolate", c:"golosinas", e:"🍫", img:P+"fondant-leche-chocolate.jpg" , p:5490 },
  { n:"Fondant de leche y coco", c:"golosinas", e:"🥥", img:P+"fondant-leche-coco.jpg" , p:5490 },
  { n:"Gomita de mango centro líquido", c:"golosinas", e:"🍬", img:P+"gomita-mango.jpg" , p:4500 },
  { n:"Gomita pelable", c:"golosinas", e:"🍬", img:P+"gomita-pelable.jpg" , p:4560 },
  { n:"Gomitas eucalipto", c:"golosinas", e:"🌿", img:P+"gomitas-eucalipto.jpg" , p:5800 },
  { n:"Gomones de fruta", c:"golosinas", e:"🍬", img:P+"gomones-fruta.jpg" , p:4500 },
  { n:"MalvaCoco", c:"golosinas", e:"🥥", img:P+"malvacoco.jpg" , p:6690 },
  { n:"Merenguitos", c:"golosinas", e:"🍥", img:P+"merenguitos.jpg" , p:4000 },
  { n:"Pé de Moca con chocolate", c:"golosinas", e:"🍫", img:P+"pe-de-moca.jpg" , ag:true },

  // Despensa natural
  { n:"Cacao amargo", c:"despensa", e:"🍫", img:P+"cacao-amargo.jpg" , ag:true },
  { n:"Cacao Oriente natural", c:"despensa", e:"🍫", img:P+"cacao-oriente.jpg" , p:6400 },
  { n:"Coco laminado", c:"despensa", e:"🥥", img:P+"coco-laminado.jpg" , p:8300 },
  { n:"Coco rallado fino", c:"despensa", e:"🥥", img:P+"coco-rallado-fino.jpg" , p:6900 },
  { n:"Coco rallado grueso", c:"despensa", e:"🥥", img:P+"coco-rallado-grueso.jpg" , p:6900 },
  { n:"Aceite de almendras 250 ml", c:"despensa", e:"🧴", img:P+"aceite-almendras.jpg", u:true , p:6200 },
  { n:"Aceite de coco 100 ml", c:"despensa", e:"🧴", img:P+"aceite-coco.jpg", u:true , p:2010 },
  { n:"Aceite de coco sin sabor 1 L", c:"despensa", e:"🧴", img:P+"aceite-coco.jpg", u:true , p:10800 },
  { n:"Aceite de nuez 250 ml", c:"despensa", e:"🧴", img:P+"aceite-nuez.jpg", u:true , p:5640 },
  { n:"Té Ceylán", c:"despensa", e:"🍵", img:P+"te-ceylan.jpg" , p:8290 },
  { n:"Té verde", c:"despensa", e:"🍵", img:P+"te-verde.jpg" , p:6300 },
  { n:"Bicarbonato", c:"despensa", e:"🧂", img:P+"bicarbonato.jpg" , p:1490 },
  { n:"Maicena", c:"despensa", e:"🌽", img:P+"maicena.jpg" , ag:true },

  // ===== Productos nuevos =====
  // Frutos secos
  { n:"Avellana chilena tostada", c:"frutos-secos", e:"🌰", img:P+"avellana-chilena.jpg" , p:24000 },
  { n:"Maní con piel", c:"frutos-secos", e:"🥜", img:P+"mani-con-piel.jpg" , p:3800 },
  { n:"Maní sin sal", c:"frutos-secos", e:"🥜", img:P+"mani-sin-sal.jpg" , p:3200 },
  { n:"Nuez", c:"frutos-secos", e:"🌰", img:P+"nuez.jpg" , p:11490 },
  { n:"Nuez cuartillo", c:"frutos-secos", e:"🌰", img:P+"nuez-cuartillo.jpg" , p:9850 },
  { n:"Nuez de Brasil", c:"frutos-secos", e:"🌰", img:P+"nuez-brasil.jpg" , p:25000 },
  { n:"Pistacho tostado sin sal", c:"frutos-secos", e:"🥜", img:P+"pistacho-tostado.jpg" , p:18300 },

  // Frutas deshidratadas
  { n:"Cereza deshidratada", c:"frutas", e:"🍒", img:P+"cereza-deshidratada.jpg" , p:8490 },
  { n:"Naranja deshidratada", c:"frutas", e:"🍊", img:P+"naranja-deshidratada.jpg" , p:13300 },
  { n:"Pasas morenas", c:"frutas", e:"🍇", img:P+"pasas-morenas.jpg" , p:4600 },
  { n:"Jengibre en lonja", c:"frutas", e:"🟡", img:P+"jengibre-lonja.jpg" , p:6800 },
  { n:"Fruta confitada", c:"frutas", e:"🍬", img:P+"fruta-confitada.jpg" , p:6100 },

  // Golosinas y confites
  { n:"Almendra con chocolate caramelizada", c:"golosinas", e:"🍫", img:P+"almendra-choco-caramelizada.jpg" , p:10100 },
  { n:"Almendra con chocolate Vizzio", c:"golosinas", e:"🍫", img:P+"almendra-choco-vizzio.jpg" , p:16400 },
  { n:"Avellana con chocolate", c:"golosinas", e:"🍫", img:P+"avellana-choco.jpg" , p:14000 },
  { n:"Castaña con chocolate", c:"golosinas", e:"🍫", img:P+"castana-choco.jpg" , p:16500 },
  { n:"Café con chocolate bitter", c:"golosinas", e:"🍫", img:P+"cafe-choco-bitter.jpg" , p:13300 },
  { n:"Café con chocolate blanco", c:"golosinas", e:"🍫", img:P+"cafe-choco-blanco.jpg" , p:13400 },
  { n:"Café con chocolate leche", c:"golosinas", e:"🍫", img:P+"cafe-choco-leche.jpg" , p:13400 },
  { n:"Café con chocolate mix", c:"golosinas", e:"🍫", img:P+"cafe-choco-mix.jpg" , p:13400 },
  { n:"Naranja con chocolate", c:"golosinas", e:"🍫", img:P+"naranja-choco.jpg" , p:13450 },
  { n:"Marshmallows", c:"golosinas", e:"🍡", img:P+"marshmallows.jpg" , p:8500 },
  { n:"Rocklets", c:"golosinas", e:"🍫", img:P+"rocklets.jpg" , p:5800 },
  { n:"Gomitas ácidas de limón", c:"golosinas", e:"🍬", img:P+"gomitas-acidas-limon.jpg" , p:4500 },
  { n:"Frugele", c:"golosinas", e:"🍬", img:P+"frugele.jpg" , p:6400 },

  // Despensa natural
  { n:"Agua de coco con pulpa 1 L", c:"despensa", e:"🥥", img:P+"agua-coco-pulpa.jpg", u:true , p:2700 },
  { n:"Agua de coco Copra 200 ml", c:"despensa", e:"🥥", img:P+"agua-coco-copra.jpg", u:true , p:1080 },
  { n:"Azúcar de coco", c:"despensa", e:"🟤", img:P+"azucar-coco.jpg" , p:9300 },
  { n:"Café de cebada", c:"despensa", e:"☕", img:P+"cafe-cebada.jpg" , p:3200 },
  { n:"Café de higo", c:"despensa", e:"☕", img:P+"cafe-higo.jpg" , p:3200 },
  { n:"Café de quinoa", c:"despensa", e:"☕", img:P+"cafe-quinoa.jpg" , p:3200 },
  { n:"Café de trigo", c:"despensa", e:"☕", img:P+"cafe-trigo.jpg" , p:3200 },
  { n:"Harina de almendra con piel", c:"despensa", e:"🌾", img:P+"harina-almendra.jpg" , p:8200 },
  { n:"Chuño", c:"despensa", e:"🥔", img:P+"chuno.jpg" , ag:true },
  { n:"Gelatina sin sabor", c:"despensa", e:"🍮", img:P+"gelatina-sin-sabor.jpg" , p:9300 },
  { n:"Syrup de coco y chocolate", c:"despensa", e:"🍯", img:P+"syrup-coco-choco.jpg" , p:2800 },
  { n:"Tropical coco", c:"despensa", e:"🥥", img:P+"tropical-coco.jpg" , ag:true },
  { n:"Harina tostada", c:"despensa", e:"🌾", img:P+"harina-tostada.jpg" , ag:true },
  { n:"Harina integral", c:"despensa", e:"🌾", img:P+"harina-integral.jpg" , ag:true },
  { n:"Harina de quínoa", c:"despensa", e:"🌾", img:P+"harina-quinoa.jpg" , ag:true },
  { n:"Harina de avena", c:"despensa", e:"🌾", img:P+"harina-avena.jpg" , p:1690 },
  { n:"Harina de maqui", c:"despensa", e:"🟣", img:P+"harina-maqui.jpg" , ag:true },
  { n:"Harina de linaza", c:"despensa", e:"🟤", img:P+"harina-linaza.jpg" , ag:true },
  { n:"Harina de coco", c:"despensa", e:"🥥", img:P+"harina-coco.jpg" , ag:true },
  { n:"Carne vegetal", c:"despensa", e:"🌱", img:P+"carne-vegetal.jpg" , ag:true },

  // Condimentos y especias
  { n:"Ajinomoto", c:"condimentos", e:"🧂", img:P+"ajinomoto.jpg" , ag:true },
  { n:"Ajo en polvo", c:"condimentos", e:"🧄", img:P+"ajo-polvo.jpg" , p:2750 },
  { n:"Anís estrella", c:"condimentos", e:"⭐", img:P+"anis-estrella.jpg" , p:12200 },
  { n:"Canela molida", c:"condimentos", e:"🟤", img:P+"canela-molida.jpg" , p:7400 },
  { n:"Cassia (canela en rama)", c:"condimentos", e:"🟤", img:P+"cassia.jpg" , p:6100 },
  { n:"Cebolla en escama", c:"condimentos", e:"🧅", img:P+"cebolla-escama.jpg" , p:7400 },
  { n:"Comino en polvo", c:"condimentos", e:"🟤", img:P+"comino-polvo.jpg" , p:6100 },
  { n:"Comino entero", c:"condimentos", e:"🟤", img:P+"comino-entero.jpg" , p:6200 },
  { n:"Cúrcuma en polvo", c:"condimentos", e:"🟡", img:P+"curcuma.jpg" , p:4600 },
  { n:"Curry", c:"condimentos", e:"🟡", img:P+"curry.jpg" , p:3000 },
  { n:"Hoja de eneldo", c:"condimentos", e:"🌿", img:P+"eneldo.jpg" , ag:true },
  { n:"Jengibre en polvo", c:"condimentos", e:"🟡", img:P+"jengibre-polvo.jpg" , p:6900 },
  { n:"Orégano", c:"condimentos", e:"🌿", img:P+"oregano.jpg" , p:5800 },
  { n:"Pimienta negra entera", c:"condimentos", e:"⚫", img:P+"pimienta-negra.jpg" , p:13300 },
  { n:"Pimienta molida", c:"condimentos", e:"⚫", img:P+"pimienta-molida.jpg" , p:13300 },
  { n:"Romero", c:"condimentos", e:"🌿", img:P+"romero.jpg" , p:6700 },
  { n:"Sal de Himalaya fina", c:"condimentos", e:"🧂", img:P+"sal-himalaya-fina.jpg" , ag:true },
  { n:"Sal de Himalaya intermedia", c:"condimentos", e:"🧂", img:P+"sal-himalaya-intermedia.jpg" , ag:true },
  { n:"Sal de Himalaya gruesa", c:"condimentos", e:"🧂", img:P+"sal-himalaya-gruesa.jpg" , ag:true },
  { n:"Semilla de anís", c:"condimentos", e:"🌱", img:P+"semilla-anis.jpg" , p:6900 },
  { n:"Tomillo", c:"condimentos", e:"🌿", img:P+"tomillo.jpg" , p:6900 },
  { n:"Paprika", c:"condimentos", e:"🌶️", img:P+"paprika.jpg" , p:4190 },
  { n:"Nuez moscada entera", c:"condimentos", e:"🟤", img:P+"nuez-moscada.jpg" , ag:true },
  { n:"Merkén ahumado", c:"condimentos", e:"🌶️", img:P+"merken-ahumado.jpg" , ag:true },
  { n:"Cebolla en polvo", c:"condimentos", e:"🧅", img:P+"cebolla-polvo.jpg" , ag:true },
  { n:"Ajo en escama", c:"condimentos", e:"🧄", img:P+"ajo-escama.jpg" , ag:true },
  { n:"Aliño completo", c:"condimentos", e:"🧂", img:P+"alino-completo.jpg" , ag:true },

  // ===== Agregados desde lista mayorista 2026 (foto pendiente, por ahora emoji) =====
  // Aceites y aguas (por unidad)
  { n:"Aceite de coco 200 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-200-ml.jpg" , p:3300 },
  { n:"Aceite de coco 500 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-500-ml.jpg" , p:6400 },
  { n:"Aceite de coco 1 L", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-1-l.jpg" , p:10800 },
  { n:"Aceite de coco sin sabor 200 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-sin-sabor-200-ml.jpg" , p:3300 },
  { n:"Aceite de coco sin sabor 500 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-sin-sabor-500-ml.jpg" , p:6400 },
  { n:"Aceite de coco spray sin sabor 100 ml", c:"despensa", e:"🧴", u:true, img:P+"aceite-de-coco-spray-sin-sabor-100-ml.jpg" , p:4900 },
  { n:"Agua de coco Copra 1 L", c:"despensa", e:"🥥", u:true, img:P+"agua-de-coco-copra-1-l.jpg" , p:2700 },
  // Golosinas / chocolates
  { n:"Chips de chocolate", c:"golosinas", e:"🍫", img:P+"chips-de-chocolate.jpg" , p:11500 },
  { n:"Cholito", c:"golosinas", e:"🔴", img:P+"cholito.jpg" , p:6500 },
  { n:"Cholito blanco", c:"golosinas", e:"⚪", img:P+"cholito-blanco.jpg" , p:6900 },
  { n:"Cholito mix", c:"golosinas", e:"🎉", img:P+"cholito-mix.jpg" , p:6900 },
  { n:"Cranberry con chocolate", c:"golosinas", e:"🍫", img:P+"cranberry-con-chocolate.jpg" , p:13300 },
  { n:"Mango con chocolate", c:"golosinas", e:"🍫", img:P+"mango-con-chocolate.jpg" , p:10600 },
  { n:"Maní choco rols", c:"golosinas", e:"🍫", img:P+"mani-choco-rols.jpg" , p:8500 },
  { n:"Pasas al ron con chocolate", c:"golosinas", e:"🍫", img:P+"pasas-al-ron-con-chocolate.jpg" , p:12000 },
  { n:"Piña con chocolate", c:"golosinas", e:"🍫", img:P+"pina-con-chocolate.jpg" , p:11200 },
  { n:"Pasas con chocolate", c:"golosinas", e:"🍫", img:P+"pasas-con-chocolate.jpg" , p:6500 },
  // Maní confitado (sabores nuevos)
  { n:"Maní sabor cereza sour", c:"confitados", e:"🍒", img:P+"mani-sabor-cereza-sour.jpg" , p:4200 },
  { n:"Maní sabor miel", c:"confitados", e:"🍯", img:P+"mani-sabor-miel.jpg" , p:4200 },
  { n:"Maní sabor Nutella", c:"confitados", e:"🍫", img:P+"mani-sabor-nutella.jpg" , p:4200 },
  { n:"Maní sabor papaya", c:"confitados", e:"🟠", img:P+"mani-sabor-papaya.jpg" , p:4200 },
  { n:"Maní sabor plátano", c:"confitados", e:"🍌", img:P+"mani-sabor-platano.jpg" , p:4200 },
  { n:"Maravilla confitada", c:"confitados", e:"🌻", img:P+"maravilla-confitada.jpg" , p:3720 },
  { n:"Maravilla confitada menta", c:"confitados", e:"🌿", img:P+"maravilla-confitada-menta.jpg" , p:3720 },
  // Pastas y cremas untables (por unidad)
  { n:"Crema de avellana tipo Nutella 350 g", c:"despensa", e:"🍫", u:true , p:3200 },
  { n:"Crema de pistacho 200 g", c:"despensa", e:"🟢", u:true , p:5600 },
  { n:"Pasta de castaña de cajú con cacao 200 g", c:"despensa", e:"🥜", u:true , p:3200 },
  { n:"Pasta de castaña de cajú entera 200 g", c:"despensa", e:"🥜", u:true , p:3200 },
  { n:"Pasta de maní 500 g", c:"despensa", e:"🥜", u:true , p:2900 },
  { n:"Pasta de maní crunchy 500 g", c:"despensa", e:"🥜", u:true , p:2900 },
  // Crocantes con chocolate
  { n:"Crocante de castaña con chocolate", c:"golosinas", e:"🍫", img:P+"crocante-de-castana-con-chocolate.jpg" , p:10400 },
  { n:"Crocante de maní con chocolate", c:"golosinas", e:"🍫", img:P+"crocante-de-mani-con-chocolate.jpg" , p:6600 },
  // Dulces
  { n:"Gomita tiburón con chocolate", c:"golosinas", e:"🦈" , p:4500 },
  { n:"Snicker", c:"golosinas", e:"🍫", u:true , p:13300 },
  { n:"Azúcar de coco 350 g", c:"despensa", e:"🟤", u:true, img:P+"azucar-de-coco-350-g.jpg" , p:5640 },
  { n:"Glucosa", c:"despensa", e:"🍯", img:P+"glucosa.jpg" , p:1540 },
  // Frutas deshidratadas
  { n:"Banana liofilizada", c:"frutas", e:"🍌", img:P+"banana-liofilizada.jpg" , p:16800 },
  { n:"Dátil sin carozo", c:"frutas", e:"🟤", img:P+"datil-sin-carozo.jpg" , p:7560 },
  { n:"Frutilla liofilizada", c:"frutas", e:"🍓", img:P+"frutilla-liofilizada.jpg" , p:23600 },
  { n:"Higo deshidratado", c:"frutas", e:"🟣", img:P+"higo-deshidratado.jpg" , ag:true },
  { n:"Mix de frutas deshidratadas", c:"frutas", e:"🍍", img:P+"mix-de-frutas-deshidratadas.jpg" , p:12500 },
  { n:"Manzana rodaja", c:"frutas", e:"🍎", img:P+"manzana-rodaja.jpg" , p:9100 },
  { n:"Pasas ámbar", c:"frutas", e:"🍇", img:P+"pasas-ambar.jpg" , p:6900 },
  { n:"Pasas golden", c:"frutas", e:"🍇", img:P+"pasas-golden.jpg" , p:5300 },
  { n:"Pasas rubias", c:"frutas", e:"🍇", img:P+"pasas-rubias.jpg" , p:6900 },
  // Frutos secos
  { n:"Almendra grande", c:"frutos-secos", e:"🌰", img:P+"almendra-grande.jpg" , p:15000 },
  { n:"Almendra mediana", c:"frutos-secos", e:"🌰", img:P+"almendra-mediana.jpg" , p:14800 },
  { n:"Almendra pequeña", c:"frutos-secos", e:"🌰", img:P+"almendra-pequena.jpg" , p:14600 },
  { n:"Coco cubo", c:"frutos-secos", e:"🥥", img:P+"coco-cubo.jpg" , p:10490 },
  { n:"Nuez amarilla", c:"frutos-secos", e:"🌰", img:P+"nuez-amarilla.jpg" , p:11490 },
  { n:"Nuez cuarto", c:"frutos-secos", e:"🌰", img:P+"nuez-cuarto.jpg" , p:9850 },
  // Snacks (por unidad)
  { n:"Chips de camote", c:"snacks", e:"🍠", u:true, img:P+"chips-de-camote.jpg" , p:12500 },
  { n:"Chips de yuca", c:"snacks", e:"🥔", u:true, img:P+"chips-de-yuca.jpg" , p:12500 },
  // Infusiones
  { n:"Flor de manzanilla", c:"despensa", e:"🌼", img:P+"flor-de-manzanilla.jpg" , p:12500 },
  { n:"Té Chai", c:"despensa", e:"🍵", img:P+"te-chai.jpg" , ag:true },
  // Cereales
  { n:"Arroz Basmati", c:"semillas", e:"🌾", img:P+"arroz-basmati.jpg" , p:3850 },
  { n:"Granola tradicional premium", c:"semillas", e:"🥣", img:P+"granola-tradicional-premium.jpg" , p:3200 },
  { n:"Quínoa roja", c:"semillas", e:"🌾", img:P+"quinoa-roja.jpg" , p:5000 },
  // Condimentos
  { n:"Canela Ceylán en rama", c:"condimentos", e:"🟤", img:P+"canela-ceylan-en-rama.jpg" , p:32500 },
  { n:"Canela molida Ceylán", c:"condimentos", e:"🟤", img:P+"canela-molida-ceylan.jpg" , p:13500 },
  { n:"Clavo de olor entero", c:"condimentos", e:"🟤", img:P+"clavo-de-olor-entero.jpg" , p:17300 },
  { n:"Clavo de olor molido", c:"condimentos", e:"🟤", img:P+"clavo-de-olor-molido.jpg" , p:17300 },
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

// Formatea precios en pesos chilenos: 13400 -> "$13.400"
const fmtCLP = n => "$" + Math.round(n).toLocaleString("es-CL");

// Subtotal de una línea del carrito.
//  - Por unidad: precio fijo.
//  - A granel: precio por kilo prorrateado según los gramos elegidos.
function lineTotal(p, g){
  if(!p || p.ag || p.p == null) return 0;
  return p.u ? p.p : Math.round(p.p * g / 1000);
}

// Totales del carrito. El 10% por envase aplica solo a lo que va a granel.
function cartTotals(){
  let granel = 0, unidad = 0;
  for(const id of Object.keys(cart)){
    const p = PRODUCT_BY_ID[id];
    if(!p) continue;
    const t = lineTotal(p, cart[id]);
    if(p.u) unidad += t; else granel += t;
  }
  const desc = cartEnvase ? Math.round(granel * 0.1) : 0;
  return { granel, unidad, desc, total: granel + unidad - desc };
}

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
    const priceHtml = p.ag
      ? `<span class="p-card__price p-card__price--out">Agotado</span>`
      : `<span class="p-card__price">${fmtCLP(p.p)}<span class="p-card__unit"> ${p.u ? "c/u" : "/kg"}</span></span>`;
    const btn = p.ag
      ? `<button class="p-card__add is-out" disabled aria-label="${p.n} agotado" title="Agotado">
        <span class="p-card__add-ico" aria-hidden="true">—</span>
      </button>`
      : `<button class="p-card__add${inCart ? " is-in" : ""}" data-id="${p.id}" aria-label="${inCart ? "Quitar" : "Agregar"} ${p.n} ${inCart ? "del" : "al"} pedido" title="${inCart ? "En tu pedido" : "Agregar al pedido"}">
        <span class="p-card__add-ico" aria-hidden="true">${inCart ? "✓" : "+"}</span>
      </button>`;
    return `
    <article class="p-card${p.img ? " p-card--photo" : ""}${p.ag ? " p-card--out" : ""}">
      ${media}
      <span class="p-card__body">
        <span class="p-card__name">${p.n}</span>
        <span class="p-card__cat">${CAT_LABEL[p.c]}</span>
        ${priceHtml}
      </span>
      ${btn}
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
const cartTotalEl = document.getElementById("cartTotal");
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
  if(PRODUCT_BY_ID[id] && PRODUCT_BY_ID[id].ag) return; // agotado: no se agrega
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
    if(btn.dataset.id == null) return; // botón "Agotado": sin acción
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
    const sub = `<span class="cart-item__sub">${fmtCLP(lineTotal(p, g))}</span>`;
    return `
    <div class="cart-item" data-id="${p.id}">
      ${media}
      <div class="cart-item__info">
        <span class="cart-item__name">${p.n}</span>
        <div class="cart-item__row">${control}${sub}</div>
      </div>
      <button class="cart-item__del" data-id="${p.id}" aria-label="Quitar ${p.n}" title="Quitar">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 7h12M9 7V5h6v2M8 7l.8 12.1a1 1 0 0 0 1 .9h4.4a1 1 0 0 0 1-.9L16 7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>`;
  }).join("");

  // Total estimado
  if(cartTotalEl){
    const { desc, total } = cartTotals();
    cartTotalEl.innerHTML = hasItems
      ? `<span class="cart-total__label">Total estimado</span>
         <span class="cart-total__value">${fmtCLP(total)}</span>
         ${desc ? `<span class="cart-total__desc">Incluye 10% dcto. envase (−${fmtCLP(desc)})</span>` : ""}`
      : "";
  }

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
    return p.u
      ? `• ${p.n} — ${fmtCLP(p.p)}`
      : `• ${p.n} — ${fmtQty(cart[id])} · ${fmtCLP(lineTotal(p, cart[id]))}`;
  });
  let msg = "Hola Granel & Origen 🌰, quiero hacer este pedido:\n\n" + lines.join("\n");
  const { desc, total } = cartTotals();
  if(cartEnvase) msg += "\n\n♻️ Llevo mi envase (10% dcto)";
  msg += `\n\nTotal estimado: ${fmtCLP(total)}`;
  if(desc) msg += ` (incluye 10% dcto. envase)`;
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

cartEnvaseEl.addEventListener("change", () => { cartEnvase = cartEnvaseEl.checked; persistCart(); renderCart(); });
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

/* ===== Formulario precios mayoristas (FormSubmit) ===== */
const mayoristaForm = document.getElementById("mayoristaForm");
if(mayoristaForm){
  const wmsg = document.getElementById("wformMsg");
  const WA = "https://wa.me/56967216888";
  mayoristaForm.addEventListener("submit", async e => {
    e.preventDefault();
    const nombre = mayoristaForm.nombre.value.trim();
    const email  = mayoristaForm.email.value.trim();
    wmsg.hidden = true;
    wmsg.classList.remove("is-ok", "is-err");
    if(!nombre || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      wmsg.textContent = "Escribe tu nombre y un correo válido.";
      wmsg.classList.add("is-err"); wmsg.hidden = false;
      return;
    }
    const btn = mayoristaForm.querySelector(".wform__submit");
    const label = btn.textContent;
    btn.disabled = true; btn.textContent = "Enviando…";
    const payload = {
      nombre,
      negocio:  mayoristaForm.negocio.value.trim(),
      telefono: mayoristaForm.telefono.value.trim(),
      email,
      _subject: "Solicitud de precios mayoristas — Granel & Origen",
      _template: "table",
      _captcha: "false",
      _autoresponse: "¡Gracias por tu interés en Granel & Origen! Recibimos tu solicitud de precios mayoristas (sobre 10 kg). En breve te enviaremos la lista de precios a este correo. Cualquier consulta: WhatsApp +56 9 6721 6888."
    };
    try{
      const res = await fetch("https://formsubmit.co/ajax/granelyorigen@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      });
      if(!res.ok) throw new Error("http " + res.status);
      mayoristaForm.reset();
      wmsg.textContent = "¡Gracias! Te enviaremos la lista de precios mayoristas a tu correo 📩";
      wmsg.classList.add("is-ok"); wmsg.hidden = false;
    } catch(err){
      wmsg.innerHTML = 'No pudimos enviar el formulario. Escríbenos por WhatsApp: <a href="' + WA + '" target="_blank" rel="noopener">+56 9 6721 6888</a>';
      wmsg.classList.add("is-err"); wmsg.hidden = false;
    } finally {
      btn.disabled = false; btn.textContent = label;
    }
  });
}
