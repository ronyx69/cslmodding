function decruft(doc,errs)
{
	let log = doc.value;
	let lines = log.split("\n");
	for (var i=lines.length-1; i>0; i--)
	{
		let current = lines[i];
		if (current.indexOf("DebugBindings.gen.cpp Line: 51") != -1) // literally log bukkake
		{
			lines.splice(i,2);
		}
		else if (current.startsWith("Fallback handler")) // who cares?
		{
			lines.splice(i,1);
		}
		else if (current.indexOf("(this message is harmless)") != -1) // so why log it?
		{
			lines.splice(i,1);
		}
		else if (current.startsWith("Assembly ")) // rid
		{
			lines.splice(i,2);
		}
		else if (current.startsWith("No source files found:")) // rid
		{
			lines.splice(i,2);
		}
		else if (current.startsWith("(Filename:  Line: ")) // not useful
		{
			if (lines[i+2].startsWith("d3d11: failed"))
			{
				lines.splice(i,4);
			}
			else
			{
				lines.splice(i,2);
			}
		}
		else if (current.endsWith(" [Mods - Internal]")) // shrink it
		{
			let idx1 = current.lastIndexOf("\\") + 1;
			let idx2 = current.indexOf(" [Mods ");
			let what = current.substring(idx1,idx2);

			let where = "?";

			if (current.indexOf("Cities_Skylines\\Files\\Mods") != -1)
			{
				where = "Bundled Mod";
			}
			else if (current.indexOf("Cities_Skylines\\Addons\\Mods") != -1)
			{
				where = "Local Mod";
			}
			else if (current.indexOf("workshop\\content\\255710") != -1)
			{
				where = "Workshop Mod";
			}

			lines[i] = where + ": " + what;
			lines.splice(i+1,1);
		}
		else if (current.endsWith(" [Packer - Internal]")) // shrink it
		{
			let what = current.split("'")[1];
			let idx1 = current.lastIndexOf("\\") + 1;
			let idx2 = current.indexOf(".crp");
			let name = current.substring(idx1,idx2);

			lines[i] = "Asset: '" + what + "' = " + name;
			lines.splice(i+1,1);
		}
	}
	// clear excess blank lines
	let blank = false;

	for (var i=lines.length-1; i>0; i--)
	{
		let current = lines[i];
		if (current.length < 3) {
			if (!blank)
			{
				blank = true;
			}
			else
			{
				lines.splice(i,1);
			}
		}
		else
		{
			blank = false;
		}
	}
	// output decrufted log
	doc.value = lines.join("\n");
	// now split out errors
	let active = false;
	let trace = [];
	for (var i=0; i<lines.length; i++)
	{
		current = lines[i];
		if (current.startsWith("  at ")) 
		{
			if (!active) 
			{
				trace.push(lines[i-1]);
				active = true;
			}
			trace.push(current);
		}
		else if (active)
		{
			active = false;
			trace.push("","----------------------------------","","");
		}
	}
	// output stack traces
	errs.value = trace.join("\n");
}