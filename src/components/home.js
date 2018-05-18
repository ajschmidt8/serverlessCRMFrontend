import React from "react";
import TopMenu from "./topMenu";
import { Container, Header, Menu, Grid } from "semantic-ui-react";

const Home = () => {
	return (
		<React.Fragment>
			<TopMenu>
				<Menu.Item header>Home</Menu.Item>
			</TopMenu>
			<Grid padded>
				<Grid.Column>
					<Container>
						<Header as="h1">Welcome to the CRM</Header>
						<p>Please select an item from the left menu to get started.</p>
					</Container>
				</Grid.Column>
			</Grid>
		</React.Fragment>
	);
};

export default Home;
