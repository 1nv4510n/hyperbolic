Surfaces.prototype.parabolyccylinder = (count = 10, color = '#FFD700') => {

    let points = [];
    
    let edges = [];
    
    let polygons = [];
    
    const size = 10;
    
    // Расставить точки
    
    for (let i = -count; i < count; i++) {
    
    for (let j = 0; j < count; j++) {
    
    const x = i + size/count;
    
    const y = x * x / size;
    
    const z = j - size;
    
    points.push(new Point(x, y, z));
    
    }
    
    }
    
    //Провести рёбра

    for (let i = 0; i < points.length; i++) 
    {
    
        if ((i + 1) < points.length && (i + 1) % count !== 0) 
        {
        
            edges.push(new Edge(i, i + 1))
        
        }
    
        if (i + count < points.length) {
        
            edges.push(new Edge(i, i + count))
        
        }
    }

    //1x1
    let k = 0;
    // полигоны
    for (let i = 0; i < points.length; i++) {
        if ((i % count) == 0) {
            k++;
        }
        
        if (((i + k ) % 2) < 1) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"))
            }
        } else {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"))
            }
        }
    }
    
    
   
    
    return new Subject(
    
    points, edges, polygons
    
    );
    
    }

    /* 
    1x1
    let k = 0;
    // полигоны
    for (let i = 0; i < points.length; i++) {
        if ((i % count) == 0) {
            k++;
        }
        
        if (((i + k ) % 2) < 1) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"))
            }
        } else {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"))
            }
        }
    }
    2x2
    let k = 0;
    // полигоны
    for (let i = 0; i < points.length; i++) {
        if ((i/2 % count) == 0) {
            k++;
        }
        
        if (((i + k*2 ) % 4) <=1) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"))
            }
        } else {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"))
            }
        }
    }
    Randomcolor
     function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }
    randColor()
    SETKA
    let k = 0;
    // полигоны
    for (let i = 0; i < points.length; i++) {
        if ((i % count) == 0) {
            k++;
        }
        
        if (((i + k ) % 2) <1) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"))
            }
        
        }
    }
    Зэбра
    let k = 0;
    // полигоны
    for (let i = 0; i < points.length; i++) {
        if ((i*2 % count) == 0) {
            k++;
        }
        
        if (((k+1  ) % 4 ) <= 1) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"))
            }
        } else {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"));
            } else if (i + 1 + count < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"))
            }
        }
    }*/