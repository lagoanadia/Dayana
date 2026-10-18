/* Minerais e rochas do exame (PDF «VISU minerais e rochas»).
   Cada un: [id da foto, nome, categoría, descrición]. As fotos están en img/minerais/<id>-N.jpg */
const SPECIMENS = [
  ["grafito","Grafito","Mineral non silicato","Elemento nativo, cor negra, pinta sobre o papel",3],
  ["xofre","Xofre","Mineral non silicato","Cor amarela",3],
  ["magnetita","Magnetita","Mineral non silicato","Cor negra, presenta magnetismo",3],
  ["pirita","Pirita","Mineral non silicato","Dourada, brillo metálico, cristaliza en cubos",3],
  ["galena","Galena","Mineral non silicato","Prateada, brillo metálico",3],
  ["xeso","Xeso","Mineral non silicato","Dureza 2 na escala de Mohs, brillo sedoso",3],
  ["halita","Halita (sal común)","Mineral non silicato","Transparente/branca, brillo vítreo, sabor salgado",3],
  ["fluorita","Fluorita","Mineral non silicato","Cores variadas, cristaliza en poliedros (cubos, octaedros…), brillo vítreo",3],
  ["calcita","Calcita (espato de Islandia)","Mineral non silicato","Branca/transparente, brillo vítreo, presenta birrefrinxencia",3],
  ["azurita","Azurita","Mineral non silicato","Cor azul eléctrico",3],
  ["malaquita","Malaquita","Mineral non silicato","Cor verde",3],
  ["aragonito","Aragonito","Mineral non silicato","Cor marrón, brillo vítreo, cristaliza en prismas hexagonais",3],
  ["olivino","Olivino","Mineral silicato","Cor verde oliva, brillo vítreo",3],
  ["mica","Mica","Mineral silicato","Branca (moscovita) ou negra (biotita), presenta exfoliación e brillo nacarado",3],
  ["cuarzo","Cuarzo","Mineral silicato","Cores variadas, brillo vítreo",3],
  ["basalto","Basalto","Rocha magmática volcánica","O magma arrefría rapidamente no exterior e non forma cristais",2],
  ["pumita","Pedra pómez ou pumita","Rocha magmática volcánica","O magma arrefría rapidamente no exterior e non forma cristais",3],
  ["obsidiana","Obsidiana","Rocha magmática volcánica","O magma arrefría rapidamente no exterior e non forma cristais",3],
  ["granito","Granito","Rocha magmática plutónica","O magma arrefría lentamente no interior e forma cristais",3],
  ["lousa","Lousa","Rocha metamórfica foliada","Formada a partir doutras rochas por variación de presión",3],
  ["xisto","Xisto","Rocha metamórfica foliada","Formada a partir doutras rochas por variación de presión",3],
  ["gneis","Gneis","Rocha metamórfica foliada","Formada a partir doutras rochas por variación de presión",3],
  ["marmore","Mármore","Rocha metamórfica non foliada","Formada a partir doutras rochas por variación de temperatura",3],
  ["arxila","Arxila","Rocha sedimentaria detrítica","De gran moi fino. Formada a partir de sedimentos",2],
  ["arenisca","Arenisca (areísca)","Rocha sedimentaria detrítica","De gran fino. Formada a partir de sedimentos",3],
  ["conglomerado","Conglomerado ou pudinga","Rocha sedimentaria detrítica","De gran groso. Formada a partir de sedimentos",3],
  ["caliza","Calcaria ou caliza","Rocha sedimentaria non detrítica","Formada a partir de sedimentos disoltos na auga, moitas veces ten fósiles",3],
  ["carbon","Carbón","Rocha sedimentaria non detrítica","Formada a partir de restos vexetais",2]
];
const specImg = (id, n) => `img/minerais/${id}-${n || 1}.jpg`;
const SPEC_CATS = [...new Set(SPECIMENS.map(s => s[2]))];
const SPEC_BIG = c => c.startsWith('Mineral') ? 'Mineral' : c.split(' ')[1].replace(/^./, x => x.toUpperCase());   // Mineral / Magmática / Metamórfica / Sedimentaria

/* Teoría con fotos dentro do tema «As rochas» */
(function(){
  const s = SUBJECTS.find(x => x.id === 'bioloxia'); if(!s) return;
  const sec = s.sections.find(x => x.id === 'rochas'); if(!sec) return;
  const groups = [
    ['Minerais non silicatos', c => c === 'Mineral non silicato'],
    ['Minerais silicatos (con silicio)', c => c === 'Mineral silicato'],
    ['Rochas magmáticas ou ígneas', c => c.includes('magmática')],
    ['Rochas metamórficas', c => c.includes('metamórfica')],
    ['Rochas sedimentarias', c => c.includes('sedimentaria')]
  ];
  sec.body += groups.map(([title, f], gi) => `
    <div class="card gallery"><h3><span class="chip">📷</span>${title}</h3>
      <p class="muted" style="font-size:13.5px">Mira a foto e intenta dicir o nome antes de destapalo.</p>
      <div class="spec-grid">${SPECIMENS.filter(x => f(x[2])).map(x => `
        <div class="spec"><img src="${specImg(x[0])}" alt="" loading="lazy">
          <div class="spec-name"><b>${x[1]}</b></div>
          <div class="spec-cat">${x[2].replace('Mineral ', '').replace('Rocha ', '')}</div>
          <div class="spec-desc">${x[3]}</div></div>`).join('')}</div></div>`).join('');

  sec.games.push(
    {type:'specimen', title:'Foto, nome e categoría', noqa:true},
    {type:'photosort', title:'Clasifica as fotos', noqa:true},
    {type:'memory', title:'Memoria de fotos', noqa:true, pairs: SPECIMENS.map(x => ['img:' + specImg(x[0]), x[1].split(' (')[0]])}
  );
})();
