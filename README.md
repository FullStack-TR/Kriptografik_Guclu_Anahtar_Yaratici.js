# Kriptografik_Güçlü_Açar_Yaratıcı.js

## Nedir?
JavaScript ile tarayıcı tarafında kriptografik açıdan güçlü açarlar ( anahtarlar ) oluşturur.

## Ne yapar?
**f_tekil.js** dosyasının oluşturduğu açar, ```0-9``` ve ```a-f``` arasındaki tamgalardan oluşan 32 tamgalık ```string``` türünde bir değerdir.

## Neden?
Bu değer kriptografik açıdan güçlüdür ve 32 basamak gibi yüksek bir basamak sayısı kullanıldığından ötürü oluşturulan açarın tahmin edilebilmesi oldukça güçtür.

## Ne işe yarar?
İnternet üzerinden gerçekleştirilen içerik yönetim sistemi kurulumu gibi durumlarda, eğer sunucu çevrimiçiyse kurulum başkaları tarafından devralınabilir. Bu tür durumların engellenmesi amacıyla oluşturulan açarlar bir yandan tarayıcı çerezlerine yazılırken öte yandan kurulum dosyasında güvenliği sağlayan dosyaya yerleştirilir.

Böylelikle, yetkili tarayıcıda bulunması zorunlu olan açara sahip olmayanların çevrimiçi sunuculardaki kurulum işlemine etki etmesi engellenmiş olur.
