var wms_layers = [];


        var lyr_ESRIIMAGERY_0 = new ol.layer.Tile({
            'title': 'ESRI IMAGERY',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UsodeSueloyVegetacin_1 = new ol.format.GeoJSON();
var features_UsodeSueloyVegetacin_1 = format_UsodeSueloyVegetacin_1.readFeatures(json_UsodeSueloyVegetacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsodeSueloyVegetacin_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsodeSueloyVegetacin_1.addFeatures(features_UsodeSueloyVegetacin_1);
var lyr_UsodeSueloyVegetacin_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsodeSueloyVegetacin_1, 
                style: style_UsodeSueloyVegetacin_1,
                popuplayertitle: 'Uso de Suelo y Vegetación',
                interactive: false,
    title: 'Uso de Suelo y Vegetación<br />\
    <img src="styles/legend/UsodeSueloyVegetacin_1_0.png" /> AGRICULTURA DE RIEGO ANUAL<br />\
    <img src="styles/legend/UsodeSueloyVegetacin_1_1.png" /> AGRICULTURA DE RIEGO PERMANENTE<br />\
    <img src="styles/legend/UsodeSueloyVegetacin_1_2.png" /> AGRICULTURA DE RIEGO SEMIPERMANENTE<br />\
    <img src="styles/legend/UsodeSueloyVegetacin_1_3.png" /> AGRICULTURA DE TEMPORAL ANUAL<br />\
    <img src="styles/legend/UsodeSueloyVegetacin_1_4.png" /> AGUA<br />\
    <img src="styles/legend/UsodeSueloyVegetacin_1_5.png" /> URBANO CONSTRUIDO<br />' });
var format_Predios_2 = new ol.format.GeoJSON();
var features_Predios_2 = format_Predios_2.readFeatures(json_Predios_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Predios_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Predios_2.addFeatures(features_Predios_2);
var lyr_Predios_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Predios_2, 
                style: style_Predios_2,
                popuplayertitle: 'Predios',
                interactive: true,
                title: '<img src="styles/legend/Predios_2.png" /> Predios'
            });
var format_RedVial_3 = new ol.format.GeoJSON();
var features_RedVial_3 = format_RedVial_3.readFeatures(json_RedVial_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVial_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_3.addFeatures(features_RedVial_3);
var lyr_RedVial_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RedVial_3, 
                style: style_RedVial_3,
                popuplayertitle: 'Red Vial',
                interactive: true,
                title: '<img src="styles/legend/RedVial_3.png" /> Red Vial'
            });
var format_Escuelas_4 = new ol.format.GeoJSON();
var features_Escuelas_4 = format_Escuelas_4.readFeatures(json_Escuelas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Escuelas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Escuelas_4.addFeatures(features_Escuelas_4);
var lyr_Escuelas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Escuelas_4, 
                style: style_Escuelas_4,
                popuplayertitle: 'Escuelas',
                interactive: true,
                title: '<img src="styles/legend/Escuelas_4.png" /> Escuelas'
            });

lyr_ESRIIMAGERY_0.setVisible(true);lyr_UsodeSueloyVegetacin_1.setVisible(false);lyr_Predios_2.setVisible(true);lyr_RedVial_3.setVisible(true);lyr_Escuelas_4.setVisible(true);
var layersList = [lyr_ESRIIMAGERY_0,lyr_UsodeSueloyVegetacin_1,lyr_Predios_2,lyr_RedVial_3,lyr_Escuelas_4];
lyr_UsodeSueloyVegetacin_1.set('fieldAliases', {'DESCRIPCIO': 'DESCRIPCIO', });
lyr_Predios_2.set('fieldAliases', {'AREA': 'Area', 'NUM_MANZ': 'Numero de Manzana', 'NUM_PRED': 'Numero de Predio', 'DOM_NOT': 'Domicilo', });
lyr_RedVial_3.set('fieldAliases', {'ID_RED': 'ID_RED', 'TIPO_VIAL': 'TIPO_VIAL', 'NOMBRE': 'NOMBRE', 'CODIGO': 'CODIGO', 'COND_PAV': 'COND_PAV', 'RECUBRI': 'RECUBRI', 'CARRILES': 'CARRILES', 'ESTATUS': 'ESTATUS', 'CONDICION': 'CONDICION', 'NIVEL': 'NIVEL', 'PEAJE': 'PEAJE', 'ADMINISTRA': 'ADMINISTRA', 'JURISDI': 'JURISDI', 'CIRCULA': 'CIRCULA', 'ESCALA_VIS': 'ESCALA_VIS', 'VELOCIDAD': 'VELOCIDAD', 'UNION_INI': 'UNION_INI', 'UNION_FIN': 'UNION_FIN', 'LONGITUD': 'LONGITUD', 'ANCHO': 'ANCHO', 'FECHA_ACT': 'FECHA_ACT', 'CALIREPR': 'CALIREPR', });
lyr_Escuelas_4.set('fieldAliases', {'Clave del': 'Clave del', 'Clave de_1': 'Clave de_1', 'Nivel de e': 'Nivel de e', 'Administra': 'Administra', 'Tipo de so': 'Tipo de so', 'Clave de n': 'Clave de n', 'Clave de_2': 'Clave de_2', 'Nivel': 'Nivel', 'Clave de_3': 'Clave de_3', 'Servicio e': 'Servicio e', 'Concatenac': 'Concatenac', 'Nombre del': 'Nombre del', 'Turno': 'Turno', 'C�digo P': 'C�digo P', 'Director': 'Director', 'Periodo': 'Periodo', 'Grado de M': 'Grado de M', 'Clave de c': 'Clave de c', 'Fecha de f': 'Fecha de f', 'Nombre de': 'Nombre de', 'Clave loca': 'Clave loca', 'N': 'N', 'E': 'E', });
lyr_UsodeSueloyVegetacin_1.set('fieldImages', {'DESCRIPCIO': 'TextEdit', });
lyr_Predios_2.set('fieldImages', {'AREA': 'TextEdit', 'NUM_MANZ': 'TextEdit', 'NUM_PRED': 'TextEdit', 'DOM_NOT': 'TextEdit', });
lyr_RedVial_3.set('fieldImages', {'ID_RED': 'TextEdit', 'TIPO_VIAL': 'TextEdit', 'NOMBRE': 'TextEdit', 'CODIGO': 'TextEdit', 'COND_PAV': 'TextEdit', 'RECUBRI': 'TextEdit', 'CARRILES': 'TextEdit', 'ESTATUS': 'TextEdit', 'CONDICION': 'TextEdit', 'NIVEL': 'Range', 'PEAJE': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'JURISDI': 'TextEdit', 'CIRCULA': 'TextEdit', 'ESCALA_VIS': 'TextEdit', 'VELOCIDAD': 'TextEdit', 'UNION_INI': 'TextEdit', 'UNION_FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'ANCHO': 'TextEdit', 'FECHA_ACT': 'TextEdit', 'CALIREPR': 'TextEdit', });
lyr_Escuelas_4.set('fieldImages', {'Clave del': 'TextEdit', 'Clave de_1': 'TextEdit', 'Nivel de e': 'TextEdit', 'Administra': 'TextEdit', 'Tipo de so': 'TextEdit', 'Clave de n': 'TextEdit', 'Clave de_2': 'TextEdit', 'Nivel': 'TextEdit', 'Clave de_3': 'TextEdit', 'Servicio e': 'TextEdit', 'Concatenac': 'TextEdit', 'Nombre del': 'TextEdit', 'Turno': 'TextEdit', 'C�digo P': 'TextEdit', 'Director': 'TextEdit', 'Periodo': 'TextEdit', 'Grado de M': 'TextEdit', 'Clave de c': 'TextEdit', 'Fecha de f': 'TextEdit', 'Nombre de': 'TextEdit', 'Clave loca': 'TextEdit', 'N': 'TextEdit', 'E': 'TextEdit', });
lyr_UsodeSueloyVegetacin_1.set('fieldLabels', {'DESCRIPCIO': 'no label', });
lyr_Predios_2.set('fieldLabels', {'AREA': 'hidden field', 'NUM_MANZ': 'hidden field', 'NUM_PRED': 'inline label - always visible', 'DOM_NOT': 'inline label - always visible', });
lyr_RedVial_3.set('fieldLabels', {'ID_RED': 'hidden field', 'TIPO_VIAL': 'header label - visible with data', 'NOMBRE': 'header label - always visible', 'CODIGO': 'hidden field', 'COND_PAV': 'header label - visible with data', 'RECUBRI': 'hidden field', 'CARRILES': 'hidden field', 'ESTATUS': 'header label - always visible', 'CONDICION': 'hidden field', 'NIVEL': 'hidden field', 'PEAJE': 'hidden field', 'ADMINISTRA': 'hidden field', 'JURISDI': 'hidden field', 'CIRCULA': 'hidden field', 'ESCALA_VIS': 'hidden field', 'VELOCIDAD': 'hidden field', 'UNION_INI': 'hidden field', 'UNION_FIN': 'hidden field', 'LONGITUD': 'hidden field', 'ANCHO': 'hidden field', 'FECHA_ACT': 'hidden field', 'CALIREPR': 'hidden field', });
lyr_Escuelas_4.set('fieldLabels', {'Clave del': 'no label', 'Clave de_1': 'no label', 'Nivel de e': 'no label', 'Administra': 'no label', 'Tipo de so': 'no label', 'Clave de n': 'no label', 'Clave de_2': 'no label', 'Nivel': 'no label', 'Clave de_3': 'no label', 'Servicio e': 'no label', 'Concatenac': 'no label', 'Nombre del': 'no label', 'Turno': 'no label', 'C�digo P': 'no label', 'Director': 'no label', 'Periodo': 'no label', 'Grado de M': 'no label', 'Clave de c': 'no label', 'Fecha de f': 'no label', 'Nombre de': 'no label', 'Clave loca': 'no label', 'N': 'no label', 'E': 'no label', });
lyr_Escuelas_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});