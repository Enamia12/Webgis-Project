var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_2 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_BatasAdmKelurahan_3 = new ol.format.GeoJSON();
var features_BatasAdmKelurahan_3 = format_BatasAdmKelurahan_3.readFeatures(json_BatasAdmKelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasAdmKelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasAdmKelurahan_3.addFeatures(features_BatasAdmKelurahan_3);
var lyr_BatasAdmKelurahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasAdmKelurahan_3, 
                style: style_BatasAdmKelurahan_3,
                popuplayertitle: 'Batas Adm Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasAdmKelurahan_3.png" /> Batas Adm Kelurahan'
            });
var format_LokasiPenelitian_4 = new ol.format.GeoJSON();
var features_LokasiPenelitian_4 = format_LokasiPenelitian_4.readFeatures(json_LokasiPenelitian_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiPenelitian_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiPenelitian_4.addFeatures(features_LokasiPenelitian_4);
var lyr_LokasiPenelitian_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiPenelitian_4, 
                style: style_LokasiPenelitian_4,
                popuplayertitle: 'Lokasi Penelitian',
                interactive: true,
                title: '<img src="styles/legend/LokasiPenelitian_4.png" /> Lokasi Penelitian'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleLabels_2.setVisible(true);lyr_BatasAdmKelurahan_3.setVisible(true);lyr_LokasiPenelitian_4.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_GoogleLabels_2,lyr_BatasAdmKelurahan_3,lyr_LokasiPenelitian_4];
lyr_BatasAdmKelurahan_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LokasiPenelitian_4.set('fieldAliases', {'Lokasi': 'Lokasi', 'Kondisi': 'Kondisi', 'Gmaps': 'Gmaps', 'X': 'X', 'Y': 'Y', 'Foto': 'Foto', });
lyr_BatasAdmKelurahan_3.set('fieldImages', {'KARKTR': 'Range', 'STSBTS': 'Range', 'FCODE': 'TextEdit', 'KELAS': 'Range', 'UUPP': 'TextEdit', 'LOKASI': 'Range', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'Range', 'PJGBTS': 'TextEdit', 'KLBADM': 'Range', 'TIPLOK': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_LokasiPenelitian_4.set('fieldImages', {'Lokasi': 'TextEdit', 'Kondisi': 'TextEdit', 'Gmaps': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_BatasAdmKelurahan_3.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LokasiPenelitian_4.set('fieldLabels', {'Lokasi': 'inline label - visible with data', 'Kondisi': 'inline label - visible with data', 'Gmaps': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'Foto': 'header label - visible with data', });
lyr_LokasiPenelitian_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});