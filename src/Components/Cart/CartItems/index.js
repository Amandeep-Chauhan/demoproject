import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useEffect, useState } from 'react';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { OPTIONS } from '../../../constant/options';
import SelectSmall from '../../../Utilities/Select'

import styles from './styles.module.css';

function CartItems({
	cartInfo = {},
	setLoad,
	updateCogostoreCartItem = () => {},
	updateLoading = false,
	setProductStock,
}) {
	const {
		id = '',
		cogopoints = 0,
		quantity = 0,
		product_code = {},
		brand = {},
		product = {},
	} = cartInfo;

	const [productCount, setProductCount] = useState(quantity);

	const { user_purchase_limit = -1, is_stock_available = false } = product;

	const { name = '', logo_urls = [] } = product_code || {};
	const [productImg] = logo_urls || [];
	const { name: brandName = '' } = brand;

	const option =
		user_purchase_limit === -1
			? OPTIONS
			: OPTIONS.filter((ite) => +ite.value <= user_purchase_limit);

	const deleteItemFromCart = () => {
		updateCogostoreCartItem({
			status: 'inactive',
			id,
			quantity: 0,
		});
	};
	const onChangeCartNumber = (val) => {
		setProductCount(val);
		setLoad(false);
		updateCogostoreCartItem({
			id,
			quantity: val,
		});
	};

	useEffect(() => {
		setProductStock((prev) => ({ ...prev, [id]: is_stock_available }));
	}, [is_stock_available]);

	return (
		<div className={styles.order_details}>
			<div className={styles.order_description}>
				<div className={styles.order_image}>
					<img
						src={productImg}
						alt={'jhgfdfghjkjhg'}
					/>
				</div>

				<div className={styles.order_desc}>
					<div className={styles.order_value}>{name}</div>
					<div className={styles.product_brand}>{brandName}</div>
					<div className={styles.product_price}>
					<CurrencyBitcoinIcon />
						<div>{cogopoints}</div>
					</div>
				</div>
			</div>
			<div className={styles.order_price}>
				<div className={styles.order_count_update}>
					<div className={styles.select_container}>
						<SelectSmall
							type="number"
							value={productCount}
							onChange={onChangeCartNumber}
							placeholder={'jhghjkjhg'}
							options={option}
							disabled={updateLoading || !is_stock_available}
							size="sm"
						/>
					</div>
					<DeleteForeverIcon
						width={20}
						height={20}
						className={styles.delete_button}
						onClick={deleteItemFromCart}
					/>
				</div>
			</div>
		</div>
	);
}

export default CartItems;
