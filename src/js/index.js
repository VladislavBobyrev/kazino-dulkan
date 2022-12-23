import "../style/normalize.scss"
import "../style/index.scss"

const carouseBtn = document.querySelector(".carousel__btn")
const carouselCercle = document.querySelector(".carousel__cercle")

const random = () => Math.ceil(Math.random() * 10000)
let value = random()

carouselCercle.style.transform = `rotate(${value}deg)`

carouseBtn.addEventListener(
	"click",
	() => (carouselCercle.style.transform += `rotate(${random()}deg)`)
)
