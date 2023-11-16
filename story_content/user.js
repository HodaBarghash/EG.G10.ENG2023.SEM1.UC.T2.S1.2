function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QEoQHghzA3":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v25q1attempts:player.GetVar("v25q1attempts"),v25q1answeredcorrect:player.GetVar("v25q1answeredcorrect"),v25q2attempts:player.GetVar("v25q2attempts"),v25q2answeredcorrect:player.GetVar("v25q2answeredcorrect"),v25q3attempts:player.GetVar("v25q3attempts"),v25q3answeredcorrect:player.GetVar("v25q3answeredcorrect")})
	}
	)
}

