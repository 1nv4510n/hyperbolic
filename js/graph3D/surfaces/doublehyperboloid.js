Surfaces.prototype.doublehyperboloid = (count = 20, color = '#7B68EE') => {
    let points = [];
    let edges = [];
    let polygons = [];
    const PI = Math.PI;
    let delta = 2 * PI / count;
    let a = 5, b = 5, c = 6;

    // Расставить точки верхней части
    for (let i = 0; i <= PI; i += delta) {
        for (let j = 0; j < 2 * PI; j += delta) {
            const x = c * Math.cosh(i);
            const y = b * Math.cosh(i) * Math.sin(j);
            const z = a * Math.sinh(i) * Math.cos(j);
            points.push(new Point(x, y, z));
        }
    }

    // Расставить точки нижней части
    for (let i = 0; i <= PI; i += delta) {
        for (let j = 0; j < 2 * PI; j += delta) {
            const x = -c * Math.cosh(i);
            const y = -b * Math.cosh(i) * Math.sin(j);
            const z = -a * Math.sinh(i) * Math.cos(j);
            points.push(new Point(x, y, z));
        }
    }

    //Провести рёбра
    for (let i = 0; i < points.length; i++) {
        if ((i + 1) < points.length && (i + 1) % count !== 0) {
            edges.push(new Edge(i, i + 1))
        }
        if (i + count < points.length) {
            edges.push(new Edge(i, i + count))
        }
        if ((i + 1) >= count && (i + 1) % count === 0) {
            edges.push(new Edge(i, i - count + 1))
        }
    }

//Сетка (не до конца)
let k = 0;
    for (let i = 0; i < points.length; i++) {
        if ((i % count) == 0) {
            k++;
        }
        
        if (((i + k ) % 2) <1) {
            if (i + 1 + count < points.length && (i + 1) % count !== 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"));
            } else if (i + 1 + count < points.length && (i + 1) % count === 0)  {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"))
            }
        
        }
    }

    return new Subject(
        points, edges, polygons
    );

}


/*
//Провести полигоны
    let k = 0;
    for (let i = 0; i < points.length / 2 - count; i++) {

         if ((i/2 % count) == 0) {
            k++;
        }
        if (((i + k *2 ) % 4) <= 1 ) {
            if ((i + 1 + count) < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"))
            } else if ((i + count) < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#ffff00"))
            }
        }
        else
        {
            if ((i + 1 + count) < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"))
            } else if ((i + count) < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#2e3dfe"))
            }
        }
    }

    k = 0;
    for (let i = points.length / 2; i < points.length; i++) {
        if ((i/2 % count) == 0) {
            k++;
        }
        if (((i + k *2 ) % 4) <= 1 ) {
            if ((i + 1 + count) < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#ffff00"))
            } else if ((i + count) < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#ffff00"))
            }
        }
        else{
            if ((i + 1 + count) < points.length && (i + 1) % count !== 0) {
                polygons.push(new Polygon([i, i + 1, i + 1 + count, i + count], "#2e3dfe"))
            } else if ((i + count) < points.length && (i + 1) % count === 0) {
                polygons.push(new Polygon([i, i + 1 - count, i + 1, i + count], "#2e3dfe"))
            }
        }
    }
*/