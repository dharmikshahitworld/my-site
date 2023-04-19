import React, { FC, useState } from 'react'
import { Board } from './board'
import { Container } from 'react-bootstrap'
import { RButton } from '../UIKit/button'


const Game = () => {
	const [history, setHistory] = useState<any[]>([Array(9).fill(null)])
	const [currentMove, setCurrentMove] = useState<number>(0)
	const xIsNext = currentMove % 2 === 0
	const currentSquares = history[currentMove]

	const handlePlay = (nextSquares: unknown) => {
		const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
		setHistory(nextHistory)
		setCurrentMove(nextHistory.length - 1)
	}

	const jumpTo = (nextMove: number) => {
		setCurrentMove(nextMove)
	}

	const moves: JSX.Element[] = history.map((squares: number[], move: number) => {
		let description
		if (move > 0) {
			description = 'Go to move #' + move
		} else {
			description = 'Go to game start'
		}
		return (
			<li key={move}>
				<RButton onClick={() => jumpTo(move)}>{description}</RButton>
			</li>
		)
	})

	return (
		<Container>
			<h1 className='text-center my-5 fw-light border-bottom border-5 border-dark pb-3'>Tic-Tac-Toe Game</h1>
			<Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
			<ol className=''>{moves}</ol>
		</Container>
	)
}

export default Game