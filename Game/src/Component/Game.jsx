import { useState } from 'react'

const Game = () => {
  const [userMove, setUserMove] = useState(null)
  const [computerMove, setComputerMove] = useState(null)
  const [result, setResult] = useState('Choose a move to start.')
  const [score, setScore] = useState({ player: 0, computer: 0, draws: 0 })
  const [previousRound, setPreviousRound] = useState(null)

  const detail = { Rock: '🪨', Paper: '📄', Scissors: '✂️' }
  const options = ['Rock', 'Paper', 'Scissors']

  const handleClick = (move) => {
    setPreviousRound({
      userMove,
      computerMove,
      result,
      score,
    })

    const comp = options[Math.floor(Math.random() * options.length)]
    let nextResult = ''
    let nextScore = { ...score }

    if (move === comp) {
      nextResult = "It's a tie!"
      nextScore.draws += 1
    } else {
      const userWins =
        (move === 'Rock' && comp === 'Scissors') ||
        (move === 'Paper' && comp === 'Rock') ||
        (move === 'Scissors' && comp === 'Paper')

      if (userWins) {
        nextResult = 'You win!'
        nextScore.player += 1
      } else {
        nextResult = 'Computer wins!'
        nextScore.computer += 1
      }
    }

    setUserMove(move)
    setComputerMove(comp)
    setResult(nextResult)
    setScore(nextScore)
  }

  const handleBack = () => {
    if (!previousRound) {
      return
    }

    setUserMove(previousRound.userMove)
    setComputerMove(previousRound.computerMove)
    setResult(previousRound.result)
    setScore(previousRound.score)
    setPreviousRound(null)
  }

  return (
    <div>
      <h2>
        Wins: {score.player} | Computer: {score.computer} | Draws: {score.draws}
      </h2>
      <h1 className='computer'>
        {computerMove ? detail[computerMove] : '--'} : {userMove ? detail[userMove] : '--'}
      </h1>
      <p className='result'>{result}</p>
      <div className='controls'>
        <button className='rock' type='button' onClick={() => handleClick('Rock')}>🪨</button>
        <button className='paper' type='button' onClick={() => handleClick('Paper')}>📄</button>
        <button className='scissors' type='button' onClick={() => handleClick('Scissors')}>✂️</button>
        <button type='button' onClick={handleBack} disabled={!previousRound}>
          Back
        </button>
      </div>
    </div>
  )
}

export default Game
