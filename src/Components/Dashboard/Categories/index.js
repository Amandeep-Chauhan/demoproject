import { ICON_MAPPING } from '../../../constant/iconMapping';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import styles from './styles.module.css';

function Categories({ data = {} }) {


	const navigate = useNavigate();

	const scrollRef = useRef();

	const { list } = data || {};

	const handleRouting = (id = '') => {
		if (id) {
			navigate(`/cogo-store/category/${id}?isCategory=true`);
		} else {
			navigate('/cogo-store/allcategory');
		}
	};

	// const scrollHandler = () => {
	// 	scrollRef.current.scrollLeft += 820;
	// };

	const Head = (
		<div className={styles.heading}>Top Categories</div>
	);

	return (
		<div className={styles.container}>
			
				<div>
					<div className={styles.flex}>
						{Head}
						<div
							role="presentation"
							className={styles.hyperlink}
							onClick={() => handleRouting()}
						>
					        View All
						</div>
					</div>
					<div className={styles.item_container}>
						<div className={styles.scroll_container} ref={scrollRef}>
							{(list || []).map((item) => {
								const {
									id = '',
									display_name = '',
									category = '',
									logo_url = '',
								} = item || {};
								return (
									<div
										className={styles.tile_container}
										key={id}
										onClick={() => handleRouting(id)}
										role="presentation"
									>
										<img
											alt=""
											className={styles.image}
											src={logo_url || ICON_MAPPING[category]}
										/>
										<div className={styles.styled_text}>{display_name}</div>
									</div>
								);
							})}
						</div>
						{/* <div
							className={styles.icon_container}
							onClick={scrollHandler}
							role="presentation"
						>
							<KeyboardArrowRight
								className={styles.animated_arrow}
								width={35}
								height={35}
							/>
							<KeyboardArrowRight width={35} height={35} />
						</div> */}
					</div>
				</div>

		</div>
	);
}

export default Categories;
