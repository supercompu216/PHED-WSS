var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 0.292000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_PHEDataforPDDFinal_1 = new ol.format.GeoJSON();
var features_PHEDataforPDDFinal_1 = format_PHEDataforPDDFinal_1.readFeatures(json_PHEDataforPDDFinal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PHEDataforPDDFinal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PHEDataforPDDFinal_1.addFeatures(features_PHEDataforPDDFinal_1);
var lyr_PHEDataforPDDFinal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PHEDataforPDDFinal_1, 
                style: style_PHEDataforPDDFinal_1,
                popuplayertitle: 'PHE Data for P&DD Final',
                interactive: true,
                title: '<img src="styles/legend/PHEDataforPDDFinal_1.png" /> PHE Data for P&DD Final'
            });
var format_Balochistan_Province_2 = new ol.format.GeoJSON();
var features_Balochistan_Province_2 = format_Balochistan_Province_2.readFeatures(json_Balochistan_Province_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Balochistan_Province_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Balochistan_Province_2.addFeatures(features_Balochistan_Province_2);
var lyr_Balochistan_Province_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Balochistan_Province_2, 
                style: style_Balochistan_Province_2,
                popuplayertitle: 'Balochistan_Province',
                interactive: true,
                title: '<img src="styles/legend/Balochistan_Province_2.png" /> Balochistan_Province'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_PHEDataforPDDFinal_1.setVisible(true);lyr_Balochistan_Province_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_PHEDataforPDDFinal_1,lyr_Balochistan_Province_2];
lyr_PHEDataforPDDFinal_1.set('fieldAliases', {'ID': 'ID', 'Time Stamp': 'Time Stamp', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Department': 'Department', 'Questionnaire Type': 'Questionnaire Type', 'Asset_Type': 'Asset_Type', 'Name of Asset': 'Name of Asset', 'District': 'District', 'Tehsil': 'Tehsil', 'UC/Ward': 'UC/Ward', 'Address': 'Address', 'Functional Status': 'Functional Status', });
lyr_Balochistan_Province_2.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM2_REF': 'ADM2_REF', 'ADM2ALT1EN': 'ADM2ALT1EN', 'ADM2ALT2EN': 'ADM2ALT2EN', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', });
lyr_PHEDataforPDDFinal_1.set('fieldImages', {'ID': 'Range', 'Time Stamp': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Department': 'TextEdit', 'Questionnaire Type': 'TextEdit', 'Asset_Type': 'TextEdit', 'Name of Asset': 'TextEdit', 'District': 'TextEdit', 'Tehsil': 'TextEdit', 'UC/Ward': 'TextEdit', 'Address': 'TextEdit', 'Functional Status': 'TextEdit', });
lyr_Balochistan_Province_2.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM2_REF': 'TextEdit', 'ADM2ALT1EN': 'TextEdit', 'ADM2ALT2EN': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', });
lyr_PHEDataforPDDFinal_1.set('fieldLabels', {'ID': 'header label - visible with data', 'Time Stamp': 'header label - visible with data', 'Latitude': 'header label - visible with data', 'Longitude': 'header label - visible with data', 'Department': 'header label - visible with data', 'Questionnaire Type': 'header label - visible with data', 'Asset_Type': 'header label - visible with data', 'Name of Asset': 'header label - visible with data', 'District': 'header label - visible with data', 'Tehsil': 'header label - visible with data', 'UC/Ward': 'header label - visible with data', 'Address': 'header label - visible with data', 'Functional Status': 'header label - visible with data', });
lyr_Balochistan_Province_2.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM2_REF': 'no label', 'ADM2ALT1EN': 'no label', 'ADM2ALT2EN': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', });
lyr_Balochistan_Province_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});