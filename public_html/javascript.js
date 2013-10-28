   var image = new Image();
      
   image.onload = function() {
        var stage = new Kinetic.Stage({
            container: 'blurAnimasyon',
            width: image.width,
            height: image.height
        });
        
        var x = stage.getWidth()/2 - 100; 
        var y = stage.getHeight()/2 - 50;
        var x2 = x + 200;
        var y2 = y + 100;
        
        var cerceveGroup = new Kinetic.Group({
            draggable: true
        });
        
        var cerceve = new Kinetic.Blob({
            points: [x, y, x2, y, x2, y2, x, y2],
            tension: 0.3,
            stroke: 'lightBlue',
            strokeWidth: 4
        });
        
        var cerceveNet = new Kinetic.Blob({
    /*Sol*/ points: [x-10,y+20,x + 10,y + 40,x+13,y+51,x+20,y+65,x+24,y+76,x+22,y+87,x+23,y2,
    /*Alt*/          x+40,y2+11,x+160,y2+12,
    /*Sağ*/          x2-23,y2,x2-22,y+87,x2-24,y+76,x2-20,y+65,x2-13,y+51,x2-10,y+40,x2+10,y+20,
    /*Üst*/          x2,y,x2-45,y-12,x2-60,y-13,x2-80,y-15,x2-100,y-15,x2-130,y-14, x2-160,y-11,x,y,x-10,y+20],
            tension: 0.4,
            stroke: 'red',
            strokeWidth: 1,
            fillPatternImage: image,
            fillPatternRepeat: 'repeat',
            fillPatternOffsetX: 0,
            fillPatternOffsetY: 0,
            lineJoin: 'round',
            dashArray: [10, 3]
            });
        
        cerceveGroup.on('dragstart dragmove touchstart touchmove', function(pos) {
            canvasOffset = $('#blurAnimasyon').offset();
            cerceveGroup.setX(pos.x - stage.getWidth()/2 - canvasOffset.left);
            cerceveGroup.setY(pos.y - stage.getHeight()/2 - canvasOffset.top);
            cerceveNet.setFillPatternOffsetX(pos.x - stage.getWidth()/2 - canvasOffset.left);
            cerceveNet.setFillPatternOffsetY(pos.y - stage.getHeight()/2 - canvasOffset.top);
        
        });

        var resimBlur = new Kinetic.Image({
            x: 0,
            y: 0,
            image: image,
            width: stage.getWidth(),
            height: stage.getHeight(),
            filter: Kinetic.Filters.Blur,
            filterRadius: 10
        });
       
        var layer = new Kinetic.Layer();
        var layer2 = new Kinetic.Layer();
        
        cerceveGroup.add(cerceveNet);
        cerceveGroup.add(cerceve);
     
        layer.add(resimBlur);
        layer2.add(cerceveGroup);
        
        stage.add(layer);
        stage.add(layer2);
   };
   image.src = 'resim.jpg';    
   

