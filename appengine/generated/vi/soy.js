// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace BlocklyGames.soy.
 */

goog.provide('BlocklyGames.soy');

goog.require('soy');
goog.require('soydata');


BlocklyGames.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Games_name">Blockly Games</span><span id="Games_puzzle">Gh\u00E9p h\u00ECnh</span><span id="Games_maze">M\u00EA cung l\u1EA1c l\u1ED1i</span><span id="Games_bird">Chim t\u00ECm m\u1ED3i</span><span id="Games_turtle">R\u00F9a v\u1EBD h\u00ECnh</span><span id="Games_movie">L\u00E0m phim</span><span id="Games_music">Ngh\u1EC7 s\u0129</span><span id="Games_pondTutor">Nh\u1EADp m\u00F4n \u0111\u1EA1i chi\u1EBFn</span><span id="Games_pond">\u0110\u1EA1i chi\u1EBFn tr\u00EAn h\u1ED3</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">B\u1EA1n \u0111\u00E3 ho\u00E0n th\u00E0nh v\u1EDBi 1 d\u00F2ng l\u1EC7nh JavaScript:</span><span id="Games_linesOfCode2">B\u1EA1n \u0111\u00E3 ho\u00E0n th\u00E0nh v\u1EDBi %1 d\u00F2ng l\u1EC7nh JavaScript:</span><span id="Games_nextLevel">B\u1EA1n \u0111\u00E3 s\u1EB5n s\u00E0ng cho level %1 ch\u01B0a?</span><span id="Games_finalLevel">B\u1EA1n \u0111\u00E3 s\u1EB5n s\u00E0ng cho m\u1ED9t th\u1EED th\u00E1ch m\u1EDBi ch\u01B0a</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Ch\u1EA1y ch\u01B0\u01A1ng tr\u00ECnh</span><span id="Games_resetTooltip">D\u1EEBng ch\u01B0\u01A1ng tr\u00ECnh v\u00E0 ch\u1EA1y l\u1EA1i. </span><span id="Games_resetProgram">Ch\u1EA1y l\u1EA1i</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">D\u1EEBng l\u1EA1i</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">L\u1EB7p</span><span id="Games_catMath">To\u00E1n</span><span id="Games_catText">Ch\u1EEF</span><span id="Games_catLists">Danh s\u00E1ch</span><span id="Games_catColour">M\u00E0u s\u1EAFc</span><span id="Games_catVariables">Bi\u1EBFn</span><span id="Games_catProcedures">H\u00E0m</span><span id="Games_httpRequestError">C\u00F3 v\u1EA5n \u0111\u1EC1 v\u1EDBi c\u00E1c y\u00EAu c\u1EA7u.</span><span id="Games_linkAlert">Chia s\u1EBB game v\u1EDBi link:\n\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">danh s\u00E1ch</span><span id="Games_textVariable">ch\u1EEF</span><span id="Games_breakLink">Khi b\u1EA1n b\u1EAFt \u0111\u1EA7u l\u00E0m JavaScript, b\u1EA1n kh\u00F4ng th\u1EC3 quay l\u1EA1i ch\u1EC9nh c\u00E1c kh\u1ED1i. Ok</span><span id="Games_blocks">Kh\u1ED1i</div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.messages.soyTemplateName = 'BlocklyGames.soy.messages';
}


BlocklyGames.soy.titleSpan = function(opt_data, opt_ignored, opt_ijData) {
  return '<span id="title">' + ((opt_ijData.html) ? '<a href="index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">' : '<a href="./?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">') + 'Blockly Games</a> : ' + soy.$$escapeHtml(opt_data.appName) + '</span>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.titleSpan.soyTemplateName = 'BlocklyGames.soy.titleSpan';
}


BlocklyGames.soy.levelLinks = function(opt_data, opt_ignored, opt_ijData) {
  var output = ' &nbsp; ';
  var iLimit183 = opt_data.maxLevel + 1;
  for (var i183 = 1; i183 < iLimit183; i183++) {
    output += ' ' + ((i183 == opt_data.level) ? '<span class="level_number level_done" id="level' + soy.$$escapeHtml(i183) + '">' + soy.$$escapeHtml(i183) + '</span>' : (i183 == opt_data.maxLevel) ? '<a class="level_number" id="level' + soy.$$escapeHtml(i183) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i183) + soy.$$escapeHtml(opt_data.suffix) + '">' + soy.$$escapeHtml(i183) + '</a>' : '<a class="level_dot" id="level' + soy.$$escapeHtml(i183) + '" href="?lang=' + soy.$$escapeHtml(opt_data.lang) + '&level=' + soy.$$escapeHtml(i183) + soy.$$escapeHtml(opt_data.suffix) + '"></a>');
  }
  return output;
};
if (goog.DEBUG) {
  BlocklyGames.soy.levelLinks.soyTemplateName = 'BlocklyGames.soy.levelLinks';
}


BlocklyGames.soy.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.dialog.soyTemplateName = 'BlocklyGames.soy.dialog';
}


BlocklyGames.soy.doneDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Ch\u00FAc m\u1EEBng b\u1EA1n!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">D\u1EEBng l\u1EA1i</button><button id="doneOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.doneDialog.soyTemplateName = 'BlocklyGames.soy.doneDialog';
}


BlocklyGames.soy.abortDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">D\u1EEBng l\u1EA1i</button><button id="abortOk" class="secondary">OK</button></div></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.abortDialog.soyTemplateName = 'BlocklyGames.soy.abortDialog';
}


BlocklyGames.soy.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.storageDialog.soyTemplateName = 'BlocklyGames.soy.storageDialog';
}


BlocklyGames.soy.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
};
if (goog.DEBUG) {
  BlocklyGames.soy.ok.soyTemplateName = 'BlocklyGames.soy.ok';
}
