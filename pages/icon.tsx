import type { NextPage } from 'next'
import Header from '../components/common/Header'
import { Menu as MenuEnum } from '../constants/common/menu'
const Icon: NextPage = () => {
	return (
		<div>
			<Header active={MenuEnum.ICON} />
		</div>
	)
}

export default Icon
