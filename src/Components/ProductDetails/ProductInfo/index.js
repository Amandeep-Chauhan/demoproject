import { useState } from 'react';
import Button from '@mui/material/Button';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import styles from '../styles.module.css';

function ProductInfo({
	productCode = {},
	option = [],
	loading,
	productCodeId,
	cogopoints,
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

	const handleChange=(e) => {
		setProductCount(e.target.value);
	}

	return (
		<div className={styles.product_details}>
			<div className={styles.image_container}>
				<div className={styles.img}>
					{logo_urls.map((url) => (
						<img
							key={url}
							src={url}
							alt='productInfo_alt'
							height={80}
							width={80}
							onClick={() => setImage(url)}
							role="presentation"
							className={styles.each_img}
						/>
					))}
				</div>
				{!logo_urls && (
					<AllInboxIcon height={400} width="85%" className={styles.enlarge} />
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
						<div className={styles.quantity_add_to_cart}>
							{true ? (
								<>
									<div className={styles.select_fields}>
										<TextField
											value={productCount}
											onChange={(e)=>handleChange(e)}
											placeholder='count'
										size="small"
										/>
									</div>
									<Button className={styles.add_to_cart_button} variant='contained'>
										add to cart
									</Button>
								</>
							) : (
								<Button
									type="submit"
									onClick={() => navigate('/cart')}
									disabled={loading}
									className={styles.add_to_cart_button}
								>
									go_to_cart
								</Button>
							)}
						</div>

					{option.length === 0 && (
						<div className={styles.out_of_stock}>Out of Stock</div>
					)}
				</div>
				<div className={styles.about_voucher}>
					About voucher
				</div>
				<div className={styles.about_voucher_text}>{description}</div>
			</div>
		</div>
	);
}
export default ProductInfo;
