var a = "cat",
    b = true,
    c = 3,
    d = 4.3;

jsConsole.writeLine("1.Assign all the possible JavaScript literals to different variables:");
jsConsole.writeLine(a);
jsConsole.writeLine(b);
jsConsole.writeLine(c);
jsConsole.writeLine(d);

jsConsole.writeLine("Create a string variable with quoted text in it:");
a = "'How you doin', Joye said.";
jsConsole.writeLine(a);

jsConsole.writeLine("Try typeof on all variables you created:");
jsConsole.writeLine(typeof(a));
jsConsole.writeLine(typeof(b));
jsConsole.writeLine(typeof(c));
jsConsole.writeLine(typeof(d));

jsConsole.writeLine("Create null, undefined variables and try typeof on them:");
a = null;
var e;
jsConsole.writeLine(typeof (a));
jsConsole.writeLine(typeof (e));