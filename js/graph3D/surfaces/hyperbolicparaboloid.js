
Surfaces.prototype.hyperbolicparaboloid = (count = 20) => {
    const points = [];
    const edges = [];
    const polygons = [];
    const size = 10;
    const delta = size / count;
     //нарисовать точки
    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            const x = i * delta - size / 2;
            const y = j * delta - size / 2;
            const z = x * x / 2 - y * y / 2;
            points.push(new Point(x, y, z));
        }
    //провести ребра
    for (let i = 0; i < points.length; i++) {
        if (i < points.length && (i + 1 % count !== 0)) {
            edges.push(new Edge(i, i + 1));
        }

        if (i + count < points.length) {
            edges.push(new Edge(i));
        }
        if (i + 1 + count < points.length && (i + 1 % count == 0)){
            polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count]));
        }
    }   
}

    //окрасить полигоны решеткой

    let k = 0;
    for (let i = 0; i < points.length; i++) {
        if ((i % count) == 0) {
            k++;
        }
        
        if (((i + k ) % 2) < 1) {
            if (i + 1 + count < points.length && (i + 1) % count != 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#000000"));
            }
        }
        
    }
    for (let i = 0; i < points.length; i++) {
        if ((i % count) != 0) {
            k++;
        }
        if (((i + k ) % 2) < 1) {
            if (i + 1 + count < points.length && (i + 1) % count != 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#000000"))
            }
        }
    }   

    return new Subject(points, edges, polygons);
}