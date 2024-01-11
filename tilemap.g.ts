// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Map":
            case "level1":return tiles.createTilemap(hex`200010000203030303030303030303030303030303030303030303030303030303030304090101010101010101010101010101010101010101010101010101010101010509010101010101010101010101010101010101010101010101010101010101050901010101010101010101010101010101010101010101010101010101010105090101010101010101010101010101010101010101010101010101010101010509010101010101010101010101010101010101010101010101010101010101050901010101010101010101010101010101010101010101010101010101010105090101010101010101010101010101010101010101010101010101010101010509010101010101010101010101010101010101010101010101010101010101050901010101010101010101010101010101010101010101010101010101010105090101010101010101010101010101010101010101010101010101010101010509010101010101010101010101010101010101010101010101010101010101050901010101010101010101010101010101010101010101010101010101010105090101010101010101010101010101010101010101010101010101010101010509010101010101010101010101010101010101010101010101010101010101050807070707070707070707070707070707070707070707070707070707070706`, img`
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
................................
`, [myTiles.transparency16,sprites.builtin.forestTiles10,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Wall of Klaxosaurio":
            case "tile1":return tile1;
            case "myTile":
            case "tile3":return tile3;
            case "myTile0":
            case "tile4":return tile4;
            case "myTile1":
            case "tile5":return tile5;
            case "myTile2":
            case "tile6":return tile6;
            case "myTile3":
            case "tile7":return tile7;
            case "myTile4":
            case "tile8":return tile8;
            case "myTile5":
            case "tile9":return tile9;
            case "myTile6":
            case "tile10":return tile10;
            case "myTile7":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
