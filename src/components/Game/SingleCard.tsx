import './SingleCard.css'


interface card{
    "src":string,
    match:boolean,
    id?:number
}

interface props{
    card:card,
    handleChoice:(e:card)=>void,
    flipped:boolean

}

export default function SingleCard({ card,handleChoice ,flipped}:props) {
  const handleClick=()=>{
    handleChoice(card)
  }
  return (
    <div className="card">
      <div className={flipped?"flipped":""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.png" onClick={handleClick} alt="cover" />
      </div>
    </div>
  )
}