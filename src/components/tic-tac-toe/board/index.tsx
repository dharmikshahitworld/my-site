import React, { FC } from 'react'
import { Square } from './square'

interface BoardProps {
  xIsNext: boolean,
  squares: any,
  onPlay: any
}

export const Board:FC<BoardProps> = ({xIsNext, squares, onPlay }) => {
	const handleClick = (i: number) => {
		if (squares[i] || calculateWinner(squares)) {
			return
		}
		const nextSquares = squares.slice()
		xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O'
		onPlay(nextSquares)
	}

	const calculateWinner = (squares: number[]) => {
		const lines: number[][] = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c]: number[] = lines[i]
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a]
			} 
		}
		return null
	}

	const winner = calculateWinner(squares)
	let status
	if (winner) {
		status = 'Winner: ' + winner
	} else {
		status = 'Next player: ' + (xIsNext ? 'X' : 'O')
	}

	return (
		<div className='d-flex justify-content-around'>
			<h3 className="mb-4">{status}</h3>
			<div className="d-inline-flex shadow">
				<div>
					<Square value={squares[0]} onClick={() => handleClick(0)} />
					<Square value={squares[1]} onClick={() => handleClick(1)} />
					<Square value={squares[2]} onClick={() => handleClick(2)} />
				</div>
				<div>
					<Square value={squares[3]} onClick={() => handleClick(3)} />
					<Square value={squares[4]} onClick={() => handleClick(4)} />
					<Square value={squares[5]} onClick={() => handleClick(5)} />
				</div>
				<div>
					<Square value={squares[6]} onClick={() => handleClick(6)} />
					<Square value={squares[7]} onClick={() => handleClick(7)} />
					<Square value={squares[8]} onClick={() => handleClick(8)} />
				</div>
			</div>
		</div>
	)
}