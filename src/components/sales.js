import React from "react";
import { Container, Header, Menu, Grid } from "semantic-ui-react";
import TopMenu from "./topMenu";

const sales = () => {
	return (
		<React.Fragment>
			<TopMenu>
				<Menu.Item header>Sales</Menu.Item>
			</TopMenu>
			<Grid padded>
				<Grid.Column>
					<Container>
						<Header as="h1">Sales!</Header>
						<p>Here's your sales stuff!! Look at that $$$.</p>
					</Container>
				</Grid.Column>
			</Grid>
		</React.Fragment>
	);
};

export default sales;
