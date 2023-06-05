

import Box from '@mui/material/Box'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import styles from './styles.module.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const PopularStores = ({ data = {}, loading = false }) => {
	const navigate = useNavigate();

	const { list = [] } = data || {};

	const handleRoute = (brandId) => {
		navigate(`/cogo-store/category/${brandId}?isBrand=true`);
	};

	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
  
	const handleStepChange = (step) => {
	  setActiveStep(step);
	};

	const Head = (
		<div className={styles.heading}>Popular Brands 🎁</div>
	);

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
							const {
								logo_url: newLogo,
								id: newId,
								name,
								available_products = 0,
							} = item || {};

								return (
									<div key={newId} className={styles.flex}>
							  {Math.abs(activeStep - index) <= 2 && (
										<div className={styles.wrapper}>
											<div
												role="presentation"
												className={styles.small_image_box}
												onClick={() => handleRoute(newId)}
											>
												<img
													alt=""
													className={styles.small_image}
													src={newLogo}
												/>
												{available_products > 0 && (
													<div className={styles.overlay}>
														<div className={styles.hover_text}>
															<div className={styles.text_name}>{name}</div>
															<div className={styles.text_no}>
																{available_products} Coupons
															</div>
														</div>
													</div>
												)}
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

export default PopularStores;
