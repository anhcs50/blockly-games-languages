// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pond.soy.
 */

goog.provide('Pond.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Pond.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Pond_scanTooltip">Scan for enemies. Specify a direction (0-360). \\nReturns the distance to the closest enemy in that \\ndirection. Returns Infinity if no enemy found. </span><span id="Pond_cannonTooltip">Fire the cannon. Specify a direction (0-360) and \\na range (0-70). </span><span id="Pond_swimTooltip">Swim forward. Specify a direction (0-360). </span><span id="Pond_stopTooltip">Stop swimming. Player will slx23d43 ow to a \\nstop. </span><span id="Pond_healthTooltip">Returns the player\'s current health (0 is dead, \\n100 is healthy). </span><span id="Pond_speedTooltip">Returns the current speed of the player (0 is \\nstopped, 100 is full speed). </span><span id="Pond_locXTooltip">Returns the X coordinate of the player (0 is the \\nleft edge, 100 is the right edge). </span><span id="Pond_locYTooltip">Returns the Y coordinate of the player (0 is the \\nbottom edge, 100 is the top edge). </span></div>';
};
if (goog.DEBUG) {
  Pond.soy.messages.soyTemplateName = 'Pond.soy.messages';
}


Pond.soy.visualization = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table id="avatarStatTable"><tbody><tr id="avatarStatRow1"></tr><tr id="avatarStatRow2"></tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">Documentation</button></td><td><button id="runButton" class="primary" title="Ch\u1EA1y ch\u01B0\u01A1ng tr\u00ECnh b\u1EA1n \u0111\u00E3 vi\u1EBFt"><img src="common/1x1.gif" class="run icon21"> Ch\u1EA1y ch\u01B0\u01A1ng tr\u00ECnh</button><button id="resetButton" class="primary" style="display: none" title="D\u1EEBng ch\u01B0\u01A1ng tr\u00ECnh v\u00E0 ch\u1EA1y l\u1EA1i. "><img src="common/1x1.gif" class="stop icon21"> Ch\u1EA1y l\u1EA1i</button></td></tr></table><div id="dialogDocs"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>';
};
if (goog.DEBUG) {
  Pond.soy.visualization.soyTemplateName = 'Pond.soy.visualization';
}
