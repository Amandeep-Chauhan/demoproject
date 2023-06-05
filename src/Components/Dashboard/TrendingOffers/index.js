import Tooltip from '@mui/material/Tooltip';
import styles from './styles.module.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const TrendingStores = ({ data = {}, loading = false }) => {
	const navigate = useNavigate();
	const { list } = data || {};
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
  
	const handleStepChange = (step) => {
	  setActiveStep(step);
	};

	const Head = (
		<div className={styles.heading}>Trending Offers 🔥</div>
	);

	const renderName = (name = '') => {
		if (name.length > 15) {
			return (
				<Tooltip title={name} interactive>
					<div>{name.substring(0, 15)}...</div>
				</Tooltip>
			);
		}
		return name;
	};

	return (
		<div>
				<div className={styles.container}>
					{Head}
					<Box sx={{ flexGrow: 1 }}>
						<AutoPlaySwipeableViews
						axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
						index={activeStep}
						onChangeIndex={handleStepChange}
						enableMouseEvents
						>
						{(list || []).map((item, index) => {
							const { id = '', cogopoints = 0, product_code } = item || {};
							const {
								name = '',
								brand,
								logo_urls = [],
								category,
							} = product_code || {};
							const { name: brandName = '' } = brand || {};
							const { display_name = '' } = category || {};

							return (
								<div className={styles.wrapper} key={id}>
							    {Math.abs(activeStep - index) <= 2 && (
									<div
										role="presentation"
										className={styles.offer_box}
										key={id}
										onClick={() => navigate(`/cogo-store/${id}`)}
									>
										<img alt="" className={styles.image} src={logo_urls?.[0]} />
										<div className={styles.sub_text}>{display_name || '-'}</div>
										<div className={styles.flex}>
											<div className={styles.details_div}>
												<div className={styles.product_details}>
													{renderName(name)}
												</div>
												<div className={styles.sub_text}>{brandName}</div>
											</div>
											<div className={styles.amount_div}>
												<div className={styles.amount}>
													<KeyboardArrowRight className={styles.styled_ic_cogo_coin} />
													<div className={styles.value}>{cogopoints}</div>
												</div>
											</div>
										</div>
									</div>
									)}
								</div>
							);
						})}
				   </AutoPlaySwipeableViews>
				 </Box>
				</div>
		</div>
	);
}

export default TrendingStores;
