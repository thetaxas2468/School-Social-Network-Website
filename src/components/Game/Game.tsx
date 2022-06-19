import { useEffect, useState } from 'react'
import './Game.css'
import SingleCard from './SingleCard'

interface card{
    src:string,
    match:boolean,
    id?:number
}

const cardImages :card[]= [
  { src: "/img/a.png" ,match:false},
  { src: "/img/b.png" ,match:false},
  { src: "/img/c.png" ,match:false},
  { src: "/img/d.png" ,match:false},
  { src: "/img/e.png" ,match:false},
  {src: "/img/f.png" ,match:false},
]

function Game() {
  const [cards, setCards] = useState<card[]>([])
  const [turns, setTurns] = useState<number>(0)
  const [choiceOne, setChoiceOne] = useState<card | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<card | null>(null)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))
      
    setCards(shuffledCards)
    setTurns(0)
  }
  
  const handleChoice=(card:card)=>{
    choiceOne ? setChoiceTwo(card):setChoiceOne(card);
  }
  const reset=()=>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns=>prevTurns+1);
  }
  useEffect(()=>{
    if(choiceOne&& choiceTwo){
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards=>{
          return prevCards.map(card=>{
            if(card.src === choiceOne.src){
              return {...card,match:true}
            }
            else{
              return card
            }
          })
        })
        reset();
      }
      else{
        setTimeout(()=> reset(),500);
      }
    }
  },[choiceOne,choiceTwo])
  return (
    <div className="Game">
      <h1>Lets go!</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className='card-grid'> 
        {cards.map((card)=>
          (<SingleCard key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.match}></SingleCard>)

        )}
      </div>
      <p>Turns:{turns}</p>
    </div>
  );
}
export default Game;