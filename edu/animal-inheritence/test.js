//------ Run the Demo -----

var els = null;

function appendToOutput(str) {
	els = els || document.getElementsByClassName('output');
	if (els && els.length)  {
		els[0].append(str);
		els[0].append(document.createElement('br'));
	}
}

(function() {
	try {
		appendToOutput('Animal testing...')
		var a = new bits.demo.Animal();
		appendToOutput('This is my animal named:');
		appendToOutput('> ' + a.name);
		appendToOutput(a.name + ' says:');
		appendToOutput('> ' + a.speak());
	}
	catch(e) {
		appendToOutput('ERROR: ' + e.message);
	}
	finally {
		appendToOutput('Animal testing complete!');
	}

	appendToOutput('');

	try {
		appendToOutput('Dog testing...')
		var d = new bits.demo.Dog('Spike');
		appendToOutput('This is my dog named:');
		appendToOutput('> ' + d.name);
		appendToOutput(d.name + ' says: ');
		appendToOutput('> ' + d.speak());
		appendToOutput('When ' + d.name + ' is happy, he does this:')
		appendToOutput('> ' + d.emote());
		appendToOutput('Watch me pet him:');
		appendToOutput('> ' + d.pet());
	}
	catch(e) {
		appendToOutput('ERROR: ' + e.message);
	}
	finally {
		appendToOutput('Dog testing complete!')
	}

	appendToOutput('');

	try {
		appendToOutput('Lizard testing...')
		var l = new bits.demo.Lizard('Mr. Green');
		appendToOutput('This is my lizard named:');
		appendToOutput('> ' + l.name);
		appendToOutput(l.name + ' says: ');
		appendToOutput('> ' + l.speak());
		appendToOutput('When ' + l.name + ' is happy, he does this:');
		appendToOutput('> ' + l.emote());
		appendToOutput('Watch me pet him:');
		appendToOutput('> ' + l.pet());
	}
	catch(e) {
		appendToOutput('ERROR: ' + e.message);
	}
	finally {
		appendToOutput('Lizard testing complete!')
	}	
})();