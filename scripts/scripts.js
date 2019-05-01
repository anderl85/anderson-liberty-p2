var mNames = ['Adrik ', 'Baern ', 'Brottor ', 'Dain ', 'Delg ','Einkil ', 'Fargrim ', 'Gardain ', 'Kildrak ', 'Orsik ', 'Rangrim ', 'Taklinn ', 'Thorin ', 'Traubon ', 'Ulfgar ', 'Vondal ', 'Barendd ', 'Harbek ', 'Morgran ', 'Rurik '];

var fNames = ['Artin ', 'Bardryn ', 'Diesa ', 'Falkrunn ', 'Gunnloda ','Helja ', 'Kathra ', 'Ilde ', 'Mardred ', 'Sannl ', 'Torgga ', 'Vistra ', 'Eldeth ', 'Liftrasa ', 'Riswynn ', 'Audhild ', 'Finellen ', 'Hlin ', 'Torbera ', 'Kristryd '];

var clanNames = ['Balderk', 'Brawnanvil', 'Dankil', 'Fireforge', 'Gorunn','Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart', 'Battlehammer', 'Frostbeard', 'Shatterarmour', 'Mudbane', 'Wraithgut', 'Drakebraids', 'Orccloak'];

var fCount = 0;
var mCount = 0;

var display = document.getElementById('sendNames');

var nl = '</p><p>';
var close = '</p>';

function getFNames() {
	clearDisplay();
	var out = '<p>';
	switch (fCount){
		case 0: 
			out += fNames[0] + clanNames[0] + nl;
			out += fNames[4] + clanNames[4] + nl;
			out += fNames[8] + clanNames[8] + nl;
			out += fNames[12] + clanNames[12] + nl;
			out += fNames[16] + clanNames[16];
			out += close;
			fCount ++;
		break;
		case 1:
			out += fNames[1] + clanNames[1] + nl;
			out += fNames[5] + clanNames[5] + nl;
			out += fNames[9] + clanNames[9] + nl;
			out += fNames[13] + clanNames[13] + nl;
			out += fNames[17] + clanNames[17];
			out += close;
			fCount ++;
		break;
		case 2:
			out += fNames[2] + clanNames[2] + nl;
			out += fNames[6] + clanNames[6] + nl;
			out += fNames[10] + clanNames[10] + nl;
			out += fNames[14] + clanNames[14] + nl;
			out += fNames[18] + clanNames[18];
			out += close;
			fCount ++;
		break;
		case 3:
			out += fNames[3] + clanNames[3] + nl;
			out += fNames[7] + clanNames[7] + nl;
			out += fNames[11] + clanNames[11] + nl;
			out += fNames[15] + clanNames[15] + nl;
			out += fNames[19] + clanNames[19];
			out += close;
			fCount = 0;
		break;
	}
	display.innerHTML = out;
}
function getMNames(){
	clearDisplay();
	var out = '<p>';
	switch (mCount){
		case 0: 
		out += mNames[0] + clanNames[0] + nl;
		out += mNames[4] + clanNames[4] + nl;
		out += mNames[8] + clanNames[8] + nl;
		out += mNames[12] + clanNames[12] + nl;
		out += mNames[16] + clanNames[16];
		out += close;
		mCount ++;
	break;
	case 1:
		out += mNames[1] + clanNames[1] + nl;
		out += mNames[5] + clanNames[5] + nl;
		out += mNames[9] + clanNames[9] + nl;
		out += mNames[13] + clanNames[13] + nl;
		out += mNames[17] + clanNames[17];
		out += close;
		mCount ++;
	break;
	case 2:
		out += mNames[2] + clanNames[2] + nl;
		out += mNames[6] + clanNames[6] + nl;
		out += mNames[10] + clanNames[10] + nl;
		out += mNames[14] + clanNames[14] + nl;
		out += mNames[18] + clanNames[18];
		out += close;
		mCount ++;
	break;
	case 3:
		out += mNames[3] + clanNames[3] + nl;
		out += mNames[7] + clanNames[7] + nl;
		out += mNames[11] + clanNames[11] + nl;
		out += mNames[15] + clanNames[15] + nl;
		out += mNames[19] + clanNames[19];
		out += close;
		mCount = 0;
	break;
	}
	display.innerHTML = out;
}
function clearDisplay(){
	display.innerHTML='';
}
