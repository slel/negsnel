function TriangleTilingPolygon(tiling,a,b){
    TilingPolygon.call(this);
    this.tiling = tiling;
    this.a = a;
    this.b = b;
}

TriangleTilingPolygon.prototype = Object.create(TilingPolygon.prototype);