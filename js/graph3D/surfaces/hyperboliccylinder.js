Surfaces.prototype.hyperboliccylinder = (count = 10, color = '#FFD700') => {

    let points = [];
    
    let edges = [];
    
    let polygons = [];
    
    const size = 10;
    
    // Расставить точки 1-й части
    
    for (let i = 0; i < count; i += 0.15) {
    
    for (let j = 0; j < count; j++) {
    
    const x = i - size;
    
    const y = 1 / x;
    
    const z = j - size;
    
    points.push(new Point(x, y, z));
    
    }
    
    }
    
    //Расставить точки 2-й части
    
    for (let i = count; i < 2 * count; i += 0.1) {
    
    for (let j = 0; j < count; j++) {
    
    const x = i - size;
    
    const y = 1 / x;
    
    const z = j - size;
    
    points.push(new Point(x, y, z));
    
    }
    
    }
    
    //Провести рёбра и полигоны
    
    for (let i = 0; i < points.length; i++) {
    
        if ((i + 1) < points.length && (i + 1) % count !== 0) {
        
        edges.push(new Edge(i, i + 1))
        
        }
        
        if (i + count < points.length) {
        
        edges.push(new Edge(i, i + count))
        
        }
    }

    let l = 255;

        //1x1
    let k = 0;
    for (let i = 0; i < points.length; i++) {
        if ((i % count) == 0) {
            k++;
        }
        
        if (((i + k ) % 2) < 1) {
            if ((i + 1 + count) < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"));
            } else if ((i + count) < points.length && (i + 1) % count === 0)  {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#ffff00"))
            }
        } else {
            if ((i + 1 + count) < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"));
            } else if ((i + count) < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#2e3dfe"))
            }
        }
    }


    

    return new Subject(
    
    points, edges, polygons
    
    );
    
    }