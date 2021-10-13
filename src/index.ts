/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import {bootstrapExtra} from '@workadventure/scripting-api-extra'

bootstrapExtra().catch((e) => console.error('bootstrapExtra', e));

console.log('Script started successfully');

// Manage Red door
WA.room.onEnterZone('doorRedZoneOpened', () => WA.room.hideLayer('doorRedClosed'));
WA.room.onEnterZone('doorRedZoneClosed', () => WA.room.showLayer('doorRedClosed'));

// Manage Blue door
WA.room.onEnterZone('doorBlueZoneOpened', () => WA.room.hideLayer('doorBlueClosed'));
WA.room.onEnterZone('doorBlueZoneClosed', () => WA.room.showLayer('doorBlueClosed'));

// Manage Purple door
WA.room.onEnterZone('doorPurpleZoneOpened', () => WA.room.hideLayer('doorPurpleClosed'));
WA.room.onEnterZone('doorPurpleZoneClosed', () => WA.room.showLayer('doorPurpleClosed'));

// Manage Yellow door
WA.room.onEnterZone('doorYellowZoneOpened', () => {
    console.log('doorYellowZoneOpened => onEnterZone')
    WA.room.hideLayer('doorYellowClosed')
});
WA.room.onEnterZone('doorYellowZoneClosed', () => {
    console.log('doorYellowZoneClosed => onEnterZone')
    WA.room.showLayer('doorYellowClosed')
});
