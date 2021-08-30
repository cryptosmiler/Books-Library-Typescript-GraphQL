import styled from 'styled-components'
import { Card } from '@material-ui/core'
import { useQuery } from '@apollo/client'
import { GET_BOOK } from '../../GraphQLQueries/GraphQLQueries'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

interface PropsType {
  bookID: string
}

interface ItemType {
  id: string
  name: string
}

export default function BookList({ bookID }: PropsType) {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { bookID },
  })

  if (loading)
    return (
      <>
        <Title>Book Information</Title>
        <StyledCard elevation={2}>
          <SpinnerWrapper>
            <Loader type='ThreeDots' color='#3f51b5' height={100} width={100} />
          </SpinnerWrapper>
        </StyledCard>
      </>
    )

  if (error)
    return (
      <>
        <Title>Book Information</Title>
        <StyledCard elevation={2}>
          <ErrorText>No book selected yet !</ErrorText>
        </StyledCard>
      </>
    )

  return (
    <>
      <Title>Book Information</Title>
      <StyledCard elevation={2}>
        <Text>
          <span>Name:</span> {data.book.name}
        </Text>
        <Text>
          <span>Genre:</span> {data.book.genre}
        </Text>
        <Text>
          <span>Author:</span> {data.book.author.name}
        </Text>
        <Text>
          <span>All Books for this Author:</span>{' '}
        </Text>
        <List>
          {data.book.author.books.map((item: ItemType) => (
            <ListItem key={item.id}>{item.name}</ListItem>
          ))}
        </List>
      </StyledCard>
    </>
  )
}

/*---> Styles <---*/
export const StyledCard = styled(Card)`
  /* border: 1px solid red; */
  padding: 30px;
  display: flex;
  flex-direction: column;
  min-height: 335px;
  max-height: 335px;
  overflow: scroll !important;
  overflow-x: hidden !important;
  ::-webkit-scrollbar {
    display: none !important;
  }
  scrollbar-width: none; //for firefox
`

export const Title = styled.p`
  /* border: 1px solid red; */
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
`

export const Text = styled.p`
  /* border: 1px solid red; */
  font-weight: bold;
  margin-bottom: 10px;

  span {
    color: #3f51b5;
  }
`

export const ErrorText = styled.p`
  /* border: 1px solid red; */
  margin: auto;
`

export const List = styled.ul`
  /* border: 1px solid red; */
`

export const ListItem = styled.li`
  /* border: 1px solid red; */
  font-weight: bold;
  margin-bottom: 10px;
`

export const SpinnerWrapper = styled.div`
  /* border: 1px solid red; */
  margin: auto;
  display: flex;
  align-items: center;
`
