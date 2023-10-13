import { Container, Navbar } from 'react-bootstrap'
import { StyledNavBar } from './styles'

const Header = () => {
    return (
        <StyledNavBar>
            <Container>
                <Navbar.Brand>User Profile MS</Navbar.Brand>
            </Container>
        </StyledNavBar>
    )
}
  
export default Header