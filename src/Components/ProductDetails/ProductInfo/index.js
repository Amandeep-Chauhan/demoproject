import { useState } from 'react';

import Button from '@mui/material/Button';
import BadgeIcon from '@mui/icons-material/Badge';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useNavigate } from 'react-router-dom';
import SelectSmall from '../../../Utilities/Select'

import styles from '../styles.module.css';

function ProductInfo({
	productCode = {},
	option = [],
	loading,
	createCogostoreCartItem,
	productCodeId,
	cogopoints,
	addToCard,
}) {
	const navigate = useNavigate();
	const [image, setImage] = useState('');
	const [productCount, setProductCount] = useState(1);
	const {
		name = '',
		description = '',
		brand = {},
		logo_urls = [],
	} = productCode || {};
	const { name: brand_name } = brand;

	return (
		<div className={styles.product_details}>
			<div className={styles.image_container}>
				<div className={styles.img}>
					{logo_urls.map((url) => (
						<img
							key={url}
							src={url}
							alt='image1'
							height={80}
							width={80}
							onClick={() => setImage(url)}
							role="presentation"
							className={styles.each_img}
						/>
					))}
				</div>
				{!logo_urls && (
					<BadgeIcon height={400} width="85%" className={styles.enlarge} />
				)}
				{logo_urls && (
					<img src={image || logo_urls[0]} alt="" className={styles.enlarge} />
				)}
			</div>

			<div className={styles.product_details_text}>
				<div className={styles.product_name}>{name}</div>
				<div className={styles.brand_name}>{brand_name}</div>
				<div className={styles.product_price}>
					<MonetizationOnIcon width={20} height={20} /> {cogopoints}
				</div>
				<div className={styles.product_tnc}>
				Terms & Conditions applied*
				</div>
				<div>
					{option.length > 0 && (
						<div className={styles.quantity_add_to_cart}>
							{!addToCard ? (
								<>
									<div className={styles.select_fields}>
										<SelectSmall
											value={productCount}
											onChange={setProductCount}
											placeholder="product_details_productInfo"
											options={option}
											size="sm"
										/>
									</div>
									<Button
										onClick={() => {
											createCogostoreCartItem({
												product_code_id: productCodeId,
												quantity: productCount,
											});
										}}
										disabled={loading}
										size="lg"
										className={styles.add_to_cart_button}
									>
										Add To Cart
									</Button>
								</>
							) : (
								<Button
									type="submit"
									onClick={() => navigate('/cart')}
									disabled={loading}
									className={styles.add_to_cart_button}
								>
									Go To Cart
								</Button>
							)}
						</div>
					)}
					{option.length === 0 && (
						<div className={styles.out_of_stock}>Out of Stock</div>
					)}
				</div>
				<div className={styles.about_voucher}>
						About this voucher
				</div>
				<div className={styles.about_voucher_text}>{description}</div>
			</div>
		</div>
	);
}
export default ProductInfo;
