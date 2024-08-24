const getColor = ()=>{
    const randomNumber = Math.floor(Math.random()*166777215)
    const randomColor = "#" +randomNumber .toString(16)
    document.body.style.backgroundColor=randomCode
    document.getElementById("color-code").addEventListener(

    )
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor()