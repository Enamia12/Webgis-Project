var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ADMINISTRASIDESA_AR_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_1 = format_ADMINISTRASIDESA_AR_1.readFeatures(json_ADMINISTRASIDESA_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_1.addFeatures(features_ADMINISTRASIDESA_AR_1);
var lyr_ADMINISTRASIDESA_AR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_1, 
                style: style_ADMINISTRASIDESA_AR_1,
                popuplayertitle: 'ADMINISTRASIDESA_AR',
                interactive: false,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_1.png" /> ADMINISTRASIDESA_AR'
            });
var format_Lokasi_Penelitian_2 = new ol.format.GeoJSON();
var features_Lokasi_Penelitian_2 = format_Lokasi_Penelitian_2.readFeatures(json_Lokasi_Penelitian_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokasi_Penelitian_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokasi_Penelitian_2.addFeatures(features_Lokasi_Penelitian_2);
var lyr_Lokasi_Penelitian_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokasi_Penelitian_2, 
                style: style_Lokasi_Penelitian_2,
                popuplayertitle: 'Lokasi_Penelitian',
                interactive: true,
                title: '<img src="styles/legend/Lokasi_Penelitian_2.png" /> Lokasi_Penelitian'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ADMINISTRASIDESA_AR_1.setVisible(true);lyr_Lokasi_Penelitian_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ADMINISTRASIDESA_AR_1,lyr_Lokasi_Penelitian_2];
lyr_ADMINISTRASIDESA_AR_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Lokasi_Penelitian_2.set('fieldAliases', {'Lokasi': 'Lokasi', 'Kondisi': 'Kondisi', 'Gmaps': 'Gmaps', 'X': 'X', 'Y': 'Y', 'Foto': 'Foto', });
lyr_ADMINISTRASIDESA_AR_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Lokasi_Penelitian_2.set('fieldImages', {'Lokasi': 'TextEdit', 'Kondisi': 'TextEdit', 'Gmaps': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_ADMINISTRASIDESA_AR_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Lokasi_Penelitian_2.set('fieldLabels', {'Lokasi': 'inline label - visible with data', 'Kondisi': 'inline label - visible with data', 'Gmaps': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Foto': 'header label - visible with data', });
lyr_Lokasi_Penelitian_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});