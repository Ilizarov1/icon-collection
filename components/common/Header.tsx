import { Layout, Menu } from 'antd';

const { Header } = Layout;

function header() {
	return (
		<>
			<Header>
				<Menu
					theme="dark"
					mode="horizontal"
					items={new Array(5).fill(null).map((_, index) => {
						const key = index + 1;
						return {
							key,
							label: `nav ${key}`,
						};
					})}
				/>
			</Header>
		</>
	);
}
export default header;
