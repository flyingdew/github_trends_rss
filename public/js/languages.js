langsOrder = [
'all', 'unknown', 'c', 'go', 'javascript', 'objective-c', 'python', 'ruby', 'bash', 'vim', 'abap', 'as3', 'ada', 'agda', 'alloy', 'antlr', 'apex', 'applescript', 'arc', 'arduino', 'aspx-vb', 'aspectj', 'nasm', 'ats', 'augeas', 'autohotkey', 'autoit', 'awk', 'blitzbasic', 'bluespec', 'boo', 'brightscript', 'bro', 'c', 'csharp', 'cpp', 'ceylon', 'cirru', 'clean', 'clips', 'clojure', 'cobol', 'coffeescript', 'cfm', 'common-lisp', 'coq', 'crystal', 'css', 'cuda', 'd', 'dart', 'dcpu-16-asm', 'dm', 'dogescript', 'dot', 'dylan', 'e', 'ec', 'eiffel', 'elixir', 'elm', 'emacs-lisp', 'erlang', 'fsharp', 'factor', 'fancy', 'fantom', 'flux', 'forth', 'fortran', 'frege', 'game-maker-language', 'gams', 'gap', 'glyph', 'gnuplot', 'go', 'gosu', 'grammatical-framework', 'groovy', 'harbour', 'haskell', 'haxe', 'hy', 'idl', 'idris', 'inform-7', 'io', 'ioke', 'j', 'java', 'javascript', 'jsoniq', 'julia', 'kotlin', 'krl', 'lasso', 'livescript', 'logos', 'logtalk', 'lua', 'm', 'markdown', 'mathematica', 'matlab', 'max%2Fmsp', 'mercury', 'ruby', 'monkey', 'moocode', 'moonscript', 'nemerle', 'nesc', 'netlogo', 'nimrod', 'nu', 'objective-c', 'objective-c%2B%2B', 'objective-j', 'ocaml', 'omgrofl', 'ooc', 'opa', 'openedge-abl', 'oxygene', 'pan', 'parrot', 'pascal', 'pawn', 'perl', 'perl6', 'php', 'pike', 'pogoscript', 'powershell', 'processing', 'prolog', 'propeller-spin', 'puppet', 'pure-data', 'purescript', 'python', 'r', 'racket', 'ragel-in-ruby-host', 'rdoc', 'realbasic', 'rebol', 'red', 'robotframework', 'rouge', 'ruby', 'rust', 'sas', 'scala', 'scheme', 'scilab', 'self', 'bash', 'shellsession', 'shen', 'slash', 'smalltalk', 'sourcepawn', 'sql', 'squirrel', 'standard-ml', 'stata', 'supercollider', 'swift', 'systemverilog', 'tcl', 'tex', 'turing', 'txl', 'typescript', 'unrealscript', 'vala', 'verilog', 'vhdl', 'vim', 'visual-basic', 'volt', 'wisp', 'xbase', 'xc', 'xml', 'xproc', 'xquery', 'xslt', 'xtend', 'zephir', 'zimpl'
];
langs = {
  'all': 'All Languages',
  'unknown': 'Unknown',
  'abap': 'ABAP',
  'as3': 'ActionScript',
  'ada': 'Ada',
  'agda': 'Agda',
  'alloy': 'Alloy',
  'antlr': 'ANTLR',
  'apex': 'Apex',
  'applescript': 'AppleScript',
  'arc': 'Arc',
  'arduino': 'Arduino',
  'aspx-vb': 'ASP',
  'aspectj': 'AspectJ',
  'nasm': 'Assembly',
  'ats': 'ATS',
  'augeas': 'Augeas',
  'autohotkey': 'AutoHotkey',
  'autoit': 'AutoIt',
  'awk': 'Awk',
  'blitzbasic': 'BlitzBasic',
  'bluespec': 'Bluespec',
  'boo': 'Boo',
  'brightscript': 'Brightscript',
  'bro': 'Bro',
  'c': 'C',
  'csharp': 'C#',
  'cpp': 'C++',
  'ceylon': 'Ceylon',
  'cirru': 'Cirru',
  'clean': 'Clean',
  'clips': 'CLIPS',
  'clojure': 'Clojure',
  'cobol': 'COBOL',
  'coffeescript': 'CoffeeScript',
  'cfm': 'ColdFusion',
  'common-lisp': 'Common Lisp',
  'coq': 'Coq',
  'crystal': 'Crystal',
  'css': 'CSS',
  'cuda': 'Cuda',
  'd': 'D',
  'dart': 'Dart',
  'dcpu-16-asm': 'DCPU-16 ASM',
  'dm': 'DM',
  'dogescript': 'Dogescript',
  'dot': 'DOT',
  'dylan': 'Dylan',
  'e': 'E',
  'ec': 'eC',
  'eiffel': 'Eiffel',
  'elixir': 'Elixir',
  'elm': 'Elm',
  'emacs-lisp': 'Emacs Lisp',
  'erlang': 'Erlang',
  'fsharp': 'F#',
  'factor': 'Factor',
  'fancy': 'Fancy',
  'fantom': 'Fantom',
  'flux': 'FLUX',
  'forth': 'Forth',
  'fortran': 'FORTRAN',
  'frege': 'Frege',
  'game-maker-language': 'Game Maker Language',
  'gams': 'GAMS',
  'gap': 'GAP',
  'glyph': 'Glyph',
  'gnuplot': 'Gnuplot',
  'go': 'Go',
  'gosu': 'Gosu',
  'grammatical-framework': 'Grammatical Framework',
  'groovy': 'Groovy',
  'harbour': 'Harbour',
  'haskell': 'Haskell',
  'haxe': 'Haxe',
  'hy': 'Hy',
  'idl': 'IDL',
  'idris': 'Idris',
  'inform-7': 'Inform 7',
  'io': 'Io',
  'ioke': 'Ioke',
  'j': 'J',
  'java': 'Java',
  'javascript': 'JavaScript',
  'jsoniq': 'JSONiq',
  'julia': 'Julia',
  'kotlin': 'Kotlin',
  'krl': 'KRL',
  'lasso': 'Lasso',
  'livescript': 'LiveScript',
  'logos': 'Logos',
  'logtalk': 'Logtalk',
  'lua': 'Lua',
  'm': 'M',
  'markdown': 'Markdown',
  'mathematica': 'Mathematica',
  'matlab': 'Matlab',
  'max%2Fmsp': 'Max',
  'mercury': 'Mercury',
  'ruby': 'Ruby',
  'monkey': 'Monkey',
  'moocode': 'Moocode',
  'moonscript': 'MoonScript',
  'nemerle': 'Nemerle',
  'nesc': 'nesC',
  'netlogo': 'NetLogo',
  'nimrod': 'Nimrod',
  'nu': 'Nu',
  'objective-c': 'Objective-C',
  'objective-c%2B%2B': 'Objective-C++',
  'objective-j': 'Objective-J',
  'ocaml': 'OCaml',
  'omgrofl': 'Omgrofl',
  'ooc': 'ooc',
  'opa': 'Opa',
  'openedge-abl': 'OpenEdge ABL',
  'oxygene': 'Oxygene',
  'pan': 'Pan',
  'parrot': 'Parrot',
  'pascal': 'Pascal',
  'pawn': 'PAWN',
  'perl': 'Perl',
  'perl6': 'Perl6',
  'php': 'PHP',
  'pike': 'Pike',
  'pogoscript': 'PogoScript',
  'powershell': 'PowerShell',
  'processing': 'Processing',
  'prolog': 'Prolog',
  'propeller-spin': 'Propeller Spin',
  'puppet': 'Puppet',
  'pure-data': 'Pure Data',
  'purescript': 'PureScript',
  'python': 'Python',
  'r': 'R',
  'racket': 'Racket',
  'ragel-in-ruby-host': 'Ragel in Ruby Host',
  'rdoc': 'RDoc',
  'realbasic': 'REALbasic',
  'rebol': 'Rebol',
  'red': 'Red',
  'robotframework': 'RobotFramework',
  'rouge': 'Rouge',
  'rust': 'Rust',
  'sas': 'SAS',
  'scala': 'Scala',
  'scheme': 'Scheme',
  'scilab': 'Scilab',
  'self': 'Self',
  'bash': 'Shell',
  'shellsession': 'ShellSession',
  'shen': 'Shen',
  'slash': 'Slash',
  'smalltalk': 'Smalltalk',
  'sourcepawn': 'SourcePawn',
  'sql': 'SQL',
  'squirrel': 'Squirrel',
  'standard-ml': 'Standard ML',
  'stata': 'Stata',
  'supercollider': 'SuperCollider',
  'swift': 'Swift',
  'systemverilog': 'SystemVerilog',
  'tcl': 'Tcl',
  'tex': 'TeX',
  'turing': 'Turing',
  'txl': 'TXL',
  'typescript': 'TypeScript',
  'unrealscript': 'UnrealScript',
  'vala': 'Vala',
  'verilog': 'Verilog',
  'vhdl': 'VHDL',
  'vim': 'VimL',
  'visual-basic': 'Visual Basic',
  'volt': 'Volt',
  'wisp': 'wisp',
  'xbase': 'xBase',
  'xc': 'XC',
  'xml': 'XML',
  'xproc': 'XProc',
  'xquery': 'XQuery',
  'xslt': 'XSLT',
  'xtend': 'Xtend',
  'zephir': 'Zephir',
  'zimpl': 'Zimpl',
};
