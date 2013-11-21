/*
	©2001 Microsoft Corporation. All rights reserved.
*/

////////////////////////////////////////////////////////////////////////////////

function Init()
{
	playlist.setColumnResizeMode( 0, "Stretches" );
	playlist.setColumnResizeMode( 1, "AutoSizeData" );
	cmdShuffle.down = player.settings.getMode("shuffle");
}

////////////////////////////////////////////////////////////////////////////////

function OnClose()
{
	mediacenter.effectType = Visualizer.currentEffectType;
	mediacenter.effectPreset = Visualizer.currentPreset;
}


////////////////////////////////////////////////////////////////////////////////

//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//
// vwPlayer_UpdateShuffleRepeat()
//
function vwPlayer_UpdateShuffleRepeat()
{
    if (player.settings.getMode('shuffle')) {
        cmdShuffle.down = true;

    }
    else {
        cmdShuffle.down = false;
    }
}
