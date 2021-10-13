/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
import {bootstrapExtra} from '@workadventure/scripting-api-extra'

bootstrapExtra().catch((e) => console.error('bootstrapExtra', e));

console.log('Script Le Tournoi des Maisons successfully');

// Manage Red door
WA.room.onEnterZone('doorRedZoneOpened', () => {
    if(!WA.player.tags.includes('home_red')) return;
    WA.room.hideLayer('doorRedClosed');
});
WA.room.onEnterZone('doorRedZoneClosed', () => {
    WA.room.showLayer('doorRedClosed');
});

// Manage Blue door
WA.room.onEnterZone('doorBlueZoneOpened', () => {
    if(!WA.player.tags.includes('home_blue')) return;
    WA.room.hideLayer('doorBlueClosed');
});
WA.room.onEnterZone('doorBlueZoneClosed', () => {
    WA.room.showLayer('doorBlueClosed');
});

// Manage Purple door
WA.room.onEnterZone('doorPurpleZoneOpened', () => {
    if(!WA.player.tags.includes('home_purple')) return;
    WA.room.hideLayer('doorPurpleClosed');
});
WA.room.onEnterZone('doorPurpleZoneClosed', () => {
    WA.room.showLayer('doorPurpleClosed');
});

// Manage Yellow door
WA.room.onEnterZone('doorYellowZoneOpened', () => {
    if(!WA.player.tags.includes('home_yellow')) return;
    WA.room.hideLayer('doorYellowClosed');
});
WA.room.onEnterZone('doorYellowZoneClosed', () => {
    WA.room.showLayer('doorYellowClosed');
});
