let tekil = function(){
    function s(){
        return Number( String( window.crypto.getRandomValues(  new Uint32Array( 1 ) )[ 0 ] ).substring( 0, 8 ) ).toString( 16 );
    }
    /**
     * window.crypto, gerekli uzunluktan daha az değer döndürebiliyor.
     * Bundan ötürü gerekli uzunluktan biraz daha fazlasını gerçekleştirerek gerekli uzunluğu .substring( 0, 8 ) ile çekip daha kısa bir sayı sekansı dönmesini engelleniyor.
     */
    return( ( s() + s() + s() + s() + s() + s() ).substring( 0, 32 ) );
    /**
     * 0-9 ve a-f arası 32 tamgalık string döndürür.
     */
}
