// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Puzzle.soy.
 */

goog.provide('Puzzle.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Puzzle.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_animal1">Con v\u1ECBt</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">L\u00F4ng v\u1ECBt</span><span id="Puzzle_animal1Trait2">M\u1ECF</span><span id="Puzzle_animal1HelpUrl">https://vi.wikipedia.org/wiki/V%E1%BB%8Bt</span><span id="Puzzle_animal2">Con m\u00E8o</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Ria m\u00E9p</span><span id="Puzzle_animal2Trait2">L\u00F4ng m\u00E8o</span><span id="Puzzle_animal2HelpUrl">https://vi.wikipedia.org/wiki/M%C3%A8o</span><span id="Puzzle_animal3">Con ong</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">M\u1EADt ong</span><span id="Puzzle_animal3Trait2">Ong \u0111\u1ED1t</span><span id="Puzzle_animal3HelpUrl">https://vi.wikipedia.org/wiki/Ong</span><span id="Puzzle_animal4">\u1ED0c s\u00EAn</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">V\u1ECF \u1ED1c</span><span id="Puzzle_animal4Trait2">Da nh\u1EDDn</span><span id="Puzzle_animal4HelpUrl">https://vi.wikipedia.org/wiki/%E1%BB%90c</span><span id="Puzzle_picture">h\u00ECnh \u1EA3nh:</span><span id="Puzzle_legs">ch\u00E2n:</span><span id="Puzzle_legsChoose">ch\u1ECDn...</span><span id="Puzzle_traits">\u0111\u1EB7c \u0111i\u1EC3m:</span><span id="Puzzle_error0">R\u1EA5t ho\u00E0n ch\u1EC9nh!\nT\u1EA5t c\u1EA3 %1 m\u1EA3nh \u0111\u1EC1u ch\u00EDnh x\u00E1c.</span><span id="Puzzle_error1">G\u1EA7n \u0111\u00FAng r\u1ED3i! M\u1ED9t m\u1EA3nh c\u00F2n ch\u01B0a ch\u00EDnh x\u00E1c.</span><span id="Puzzle_error2">%1 m\u1EA3nh c\u00F2n ch\u01B0a ch\u00EDnh x\u00E1c.</span><span id="Puzzle_tryAgain">C\u00E1c m\u1EA3nh \u0111\u01B0\u1EE3c \u0111\u00E1nh d\u1EA5u l\u00E0 kh\u00F4ng \u0111\u00FAng.\nC\u1ED1 l\u00EAn!</span></div>';
};
if (goog.DEBUG) {
  Puzzle.soy.messages.soyTemplateName = 'Puzzle.soy.messages';
}


Puzzle.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Puzzle.soy.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1>' + BlocklyGames.soy.titleSpan({appName: '\u0110\u1ED1 vui'}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Tr\u1EE3 gi\u00FAp</button>&nbsp;<button id="checkButton" class="primary">Ki\u1EC3m tra \u0111\u00E1p \u00E1n</button></td></tr></table><div id="blockly"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">V\u1EDBi m\u1ED7i con v\u1EADt (m\u00E0u xanh l\u00E1 c\u00E2y), h\u00E3y g\u1EAFn v\u00E0o h\u00ECnh \u1EA3nh \u0111\u00FAng v\u1EDBi m\u1ED7i con v\u1EADt \u0111\u00F3, ch\u1ECDn s\u1ED1 ch\u00E2n c\u1EE7a ch\u00FAng, v\u00E0 g\u1EAFn \u0111\u1EB7c \u0111i\u1EC3m th\u00EDch h\u1EE3p c\u1EE7a ch\u00FAng.</div><div id="sample" class="readonly"></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</div>';
};
if (goog.DEBUG) {
  Puzzle.soy.start.soyTemplateName = 'Puzzle.soy.start';
}
