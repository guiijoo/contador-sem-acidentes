let dias = hr = min = sec = "0"+ 0,
startTimer;

const startBtn = document.querySelector(".start"),
stopBtn = document.querySelector(".stop"),
resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function start()
{
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(()=>
    {
        sec++
        sec = sec<10 ? "0" + sec : sec;

        if(sec == 60)
        {
            min++
            min = min<10 ? "0" + min : min;
            sec = "0"+0;
            if(min == 60)
            {
              hr++
              hr = hr<10 ? "0" + hr : hr;
              min = "0"+0;
              if(hr==24)
                {
                    dias++
                    dias = dias<10 ? "0" + dias : dias;
                    min = "0"+0;
                }
            }
        }

        putValue();
    },1000);

}


function stop()
{
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
    
}

function reset()
{
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    let dias = hr = min = sec = "0"+ 0;
    putValue();    
}

function putValue()
{
    document.querySelector(".segundos").innerText = sec;
    document.querySelector(".minuto").innerText = min;
    document.querySelector(".hora").innerText = hr;
    document.querySelector(".dias").innerText = dias;

}