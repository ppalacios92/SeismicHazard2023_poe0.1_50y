var wms_layers = [];


        var lyr_EsriStandard_0 = new ol.layer.Tile({
            'title': 'Esri Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_hmapmeanPGA475TR_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "hmap mean PGA 475TR",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/hmapmeanPGA475TR_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-9018021.230776, -558751.514677, -8370657.428645, 165011.490874]
                            })
                        });
var format_CurvasNivelhmapmeanPGA475TR_2 = new ol.format.GeoJSON();
var features_CurvasNivelhmapmeanPGA475TR_2 = format_CurvasNivelhmapmeanPGA475TR_2.readFeatures(json_CurvasNivelhmapmeanPGA475TR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasNivelhmapmeanPGA475TR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasNivelhmapmeanPGA475TR_2.addFeatures(features_CurvasNivelhmapmeanPGA475TR_2);
var lyr_CurvasNivelhmapmeanPGA475TR_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurvasNivelhmapmeanPGA475TR_2, 
                style: style_CurvasNivelhmapmeanPGA475TR_2,
                interactive: true,
                title: '<img src="styles/legend/CurvasNivelhmapmeanPGA475TR_2.png" /> CurvasNivel hmap mean PGA 475TR'
            });
var format_ciudades_3 = new ol.format.GeoJSON();
var features_ciudades_3 = format_ciudades_3.readFeatures(json_ciudades_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ciudades_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ciudades_3.addFeatures(features_ciudades_3);
var lyr_ciudades_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ciudades_3, 
                style: style_ciudades_3,
                interactive: true,
                title: '<img src="styles/legend/ciudades_3.png" /> ciudades'
            });
var format_bndEcuadorBoundary_4 = new ol.format.GeoJSON();
var features_bndEcuadorBoundary_4 = format_bndEcuadorBoundary_4.readFeatures(json_bndEcuadorBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bndEcuadorBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bndEcuadorBoundary_4.addFeatures(features_bndEcuadorBoundary_4);
var lyr_bndEcuadorBoundary_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bndEcuadorBoundary_4, 
                style: style_bndEcuadorBoundary_4,
                interactive: true,
                title: '<img src="styles/legend/bndEcuadorBoundary_4.png" /> bnd — EcuadorBoundary'
            });
var group_Ecuador = new ol.layer.Group({
                                layers: [lyr_ciudades_3,lyr_bndEcuadorBoundary_4,],
                                title: "Ecuador"});
var group_POE_01 = new ol.layer.Group({
                                layers: [lyr_hmapmeanPGA475TR_1,lyr_CurvasNivelhmapmeanPGA475TR_2,],
                                title: "POE_0.1"});
var group_Mapas = new ol.layer.Group({
                                layers: [lyr_EsriStandard_0,],
                                title: "Mapas"});

lyr_EsriStandard_0.setVisible(true);lyr_hmapmeanPGA475TR_1.setVisible(true);lyr_CurvasNivelhmapmeanPGA475TR_2.setVisible(true);lyr_ciudades_3.setVisible(true);lyr_bndEcuadorBoundary_4.setVisible(true);
var layersList = [group_Mapas,group_POE_01,group_Ecuador];
lyr_CurvasNivelhmapmeanPGA475TR_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'id': 'id', 'elev': 'elev', });
lyr_ciudades_3.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', });
lyr_bndEcuadorBoundary_4.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', });
lyr_CurvasNivelhmapmeanPGA475TR_2.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'id': '', 'elev': '', });
lyr_ciudades_3.set('fieldImages', {'qc_id': 'TextEdit', 'id': 'TextEdit', });
lyr_bndEcuadorBoundary_4.set('fieldImages', {'qc_id': '', 'fid': '', });
lyr_CurvasNivelhmapmeanPGA475TR_2.set('fieldLabels', {});
lyr_ciudades_3.set('fieldLabels', {});
lyr_bndEcuadorBoundary_4.set('fieldLabels', {});
lyr_bndEcuadorBoundary_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});