import React from 'react'
import { Outlet } from 'react-router-dom'
import { CPNavbar } from '../components/layout/common/navbar/navbar'
// import ListItem from '../components/listItem'
// import { ListItemProps } from '../components/listItem/types'
// import Game from '../components/tic-tac-toe';
import { Container, Stack } from 'react-bootstrap'
import { RButton } from '../components/UIKit/button'
import '../custom.scss'

// const products: ListItemProps[] = [
// 	{ title: 'Cabbage', isFruit: false, id: 1 },
// 	{ title: 'Garlic', isFruit: false, id: 2 },
// 	{ title: 'Apple', isFruit: true, id: 3 },
// ]

// const listItems = products.map((i) => <ListItem key={i.id} id={i.id} title={i.title} isFruit={i.isFruit} />)

export const Root = () => {
	// const [count, setCount] = useState<number>(0);

	return (
		<div>
			<CPNavbar />
			{/* {listItems} */}
			{/* <div className='d-flex justify-content-center my-5'>
        <RButton onClick={() => setCount(count + 1)} className='me-3'>{count}</RButton>
        <RButton onClick={() => setCount(count + 1)} >{count}</RButton>
      </div> */}
			{/* <Game /> */}
			<Container className='bg-secondary my-5 py-3 rounded'>
				<Stack direction="horizontal" gap={3} onClick={() => alert('I\'m Parent components alert')}>
					<RButton variant='light' onClick={() => alert('Playing Movie Clicked!')}>Play Movie</RButton>
					<RButton variant='light'>Upload Image</RButton>
				</Stack>
			</Container>
			<div>
				<Outlet />
			</div>
		</div>
	)
}
